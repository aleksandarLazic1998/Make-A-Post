// This method will sort item ascending or descending based on the prop it receive
const sortPosts = (items, ascending) => {
	return items.sort((itemsA, itemsB) => {
		if (ascending) {
			return itemsA.id > itemsB.id ? 1 : -1;
		} else {
			return itemsA.id < itemsB.id ? 1 : -1;
		}
	});
};

export default sortPosts;
