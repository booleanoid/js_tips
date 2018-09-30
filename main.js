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
		guitars: [
			{ id: 1, name: 'telecaster', vote: 0 },
			{ id: 2, name: 'stratocaster', vote: 0 },
			{ id: 3, name: 'lespaul', vote: 0 },
		]
	},
	methods: {
		handleClick: function(event) {
			alert(event.target)
		},
		doVote: function(index) {
      this.guitars[index].vote += 1
    }
	}
})