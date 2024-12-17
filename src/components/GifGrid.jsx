import PropTypes from "prop-types";

import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

// eslint-disable-next-line react/prop-types
export const GiftGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifts(category);

	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h3>Loading...</h3>}
			<div className="card-grid">
				{images.map((image) => (
					<GiftItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
GiftGrid.prototype = {
	category: PropTypes.string,
};
