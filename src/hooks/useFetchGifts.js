import { getGifs } from "../helpers/GetGifts";
import { useEffect, useState } from "react";

export const useFetchGifts = (category) => {
	const [images, setimages] = useState([]);
	const [isLoading, setisLoading] = useState(true);

	const getImage = async () => {
		const newImages = await getGifs(category);
		setimages(newImages);
		setisLoading(false);
	};

	useEffect(() => {
		getImage();
	}, []);

	return {
		images,
		isLoading,
	};
};
