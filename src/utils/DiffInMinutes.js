export default function getDiffInMinutes(date1) {
	const date2 = new Date();
	const diff = (date2 - date1) / 1000 / 60;
	return Math.abs(Math.round(diff));
}
