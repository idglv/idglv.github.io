sap.ui.define([],
	function() {

	return function(fn) {
		jQuery.getJSON("./data/raw.json", function(raw) {
			var data = Object.create(null);
			var result = [];

			raw.forEach(function(line) {
				data[line.id] = line;
			});

			raw.forEach(function(line) {
				if (line.parentId === 0) {
					result.push(data[line.id]);
				} else {
					data[line.parentId].next ?
						data[line.parentId].next.push(data[line.id]) :
						data[line.parentId].next = [data[line.id]];

					data[line.parentId].hasExpander = true;
				}
			});

			fn.call(null, result);
		});
	}

}, true)