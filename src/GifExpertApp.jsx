import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);

	const onAddNewCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>Gift Expert App</h1>
			<AddCategory onNewCategory={(value) => onAddNewCategory(value)} />
			<ol>
				{categories.map((c) => (
					<GiftGrid key={c} category={c} />
				))}
			</ol>
		</>
	);
};
