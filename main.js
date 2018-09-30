var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!!!',
		list: ['one', 'two', 'three', 'four', 'five'],
		item: {
			id: 'main_column',
			class: 'main',
		},
		circle: {
			id: 'circle',
			width: 300,
			height: 300,
		},
		radius: 60,
	},
	methods: {
		handleClick: function(event) {
			alert(event.target)
		}
	}
})