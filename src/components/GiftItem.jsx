import PropTypes from "prop-types";

export const GiftItem = ({ title, url, id }) => {
	return (
		<div className="card">
			<img src={url} alt={title} />
			<h4>{title}</h4>
		</div>
	);
};

GiftItem.prototype = {
	title: PropTypes.string,
	url: PropTypes.url,
	id: PropTypes.number,
};
