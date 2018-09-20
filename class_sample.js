class People {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getName() {
		return this.firstName + this.lastName;
	}
}
console.log('Hello!');
let p = new People('Takeshi', 'Yamamoto');
console.log(p.getName());
