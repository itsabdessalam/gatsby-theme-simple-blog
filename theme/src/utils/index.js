module.exports = {
	sanitize: str => {
		return str.replace(/&#(\d+);/g, (match, dec) => {
			return String.fromCharCode(dec);
		});
	},
	slugify: string => {
		const a =
			"àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
		const b =
			"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
		const p = new RegExp(a.split("").join("|"), "g");

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(p, c => {
				return b.charAt(a.indexOf(c));
			})
			.replace(/&/g, "-and-")
			.replace(/[^\w-]+/g, "")
			.replace(/--+/g, "-")
			.replace(/^-+/, "")
			.replace(/-+$/, "");
	},
	splitCamelCase: value => {
		return value
			.replace(/([a-z])([A-Z])/g, "$1 $2")
			.split(" ")
			.map(item => {
				return item.toLowerCase();
			});
	},
	parseToObject: obj => {
		return JSON.parse(JSON.stringify(obj));
	},
	formatDate: (date, locale) => {
		return new Date(date).toLocaleDateString(locale, {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	}
};
