import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
	const [AddCategory, setAddCategory] = useState("");

	const onCategoryChange = ({ target }) => {
		setAddCategory(target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (AddCategory.trim().length <= 1) return;

		//setCategories((categories) => [AddCategory, ...categories]);
		setAddCategory("");
		onNewCategory(AddCategory.trim());
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Search gifs"
					value={AddCategory}
					onChange={onCategoryChange}
				/>
			</form>
		</>
	);
};

AddCategory.prototype = {
	onNewCategory: PropTypes.func,
};
