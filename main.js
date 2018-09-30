var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!!!',
		list: ['one', 'two', 'three', 'four', 'five'],
		item: {
			id: 'main_column',
			class: 'main',
		}
	},
	methods: {
		handleClick: function(event) {
			alert(event.target)
		}
	}
})