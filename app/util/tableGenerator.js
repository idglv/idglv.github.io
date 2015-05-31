sap.ui.define([],
	function() {

	var generateTable = function(id) {
		function rand(mArr) {
			return mArr[Math.random() * mArr.length << 0];
		}

		var shorts = ["Труба", "Кран", "Ключ", "Компрессор", "Двигатель", "Деталь", "Станция", "Защита"];
		var names = ["Кран шаровой ПА1022.2503.63", "Труба стальная ГОСТ 10704-91", "Цех №1 комрессорный"];
		var key = [1, 2, 3, 4, 5, 6, 7];
		return {
			id: id,
			key: rand(key),
            short: rand(shorts),
            name: rand(names),
            tag: rand(shorts)
		}
	}
	
	return function(n) {
		var id = n > 0 ? n : 10;
		var aData = [];
	    while (id) {
	    	id--;
	    	aData.push(generateTable(id))
	    }
	    return aData.reverse();
	}

}, true)