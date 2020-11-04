export const formatDate = (date) => {
	let day = date.getDate();
	let month = date.getMonth() + 1;
	const year = date.getFullYear();

	if (month.toString().length < 2) {
		month = '0' + month;
	}
	if (day.toString().length < 2) {
		day = '0' + day;
	}

	return [day, month, year].join('-');
};
