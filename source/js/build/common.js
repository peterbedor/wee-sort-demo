Wee.fn.make('common', {
	init: function() {
		this.$private.method();
	}
}, {
	method: function() {
		var sort = Wee.fn.sort({
			selector: 'ref:weeSort',
			class: 'wee-sort'
		});

		sort.init();
	}
});