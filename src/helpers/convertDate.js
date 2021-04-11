export const timeConverter = (UNIX_timestamp) => {
	const a = new Date(UNIX_timestamp);
	const months = [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
	];
	const year = a.getFullYear();
	const month = months[a.getMonth()];
	const date = a.getDate();
	const hour = a.getHours();
	const min = a.getMinutes();
	const time = `${date}.${month}.${year} ${hour}:${min}`;
	return time;
};
