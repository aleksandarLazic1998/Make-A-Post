export const nameFirstLetter = (name) => {
	const lowerCaseName = name.toLowerCase();
	const nameArray = lowerCaseName.split(" ");
	const finishedName = nameArray.map((word) => {
		return `${word[0].toUpperCase()}${word.slice(1)}`;
	});

	return finishedName.join(" ");
};
