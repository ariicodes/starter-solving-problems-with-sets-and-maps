function intersection(a, b) {
	const map = new Map();
	const set = new Set();

	for (let e of a) {
		map.set(e, e);
	}

	for (let e of b) {
		if (map.has(e)) {
			set.add(e);
		}
	}

	return Array.from(set);
}

module.exports = intersection;
