var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!!!',
		list: ['one', 'two', 'three', 'four', 'five'],
	},
	methods: {
		handleClick: function(event) {
			alert(event.target)
		}
	}
})