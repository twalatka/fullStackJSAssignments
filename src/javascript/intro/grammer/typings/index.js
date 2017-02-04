export default { //Object
    todaysDate: Date(),
    isTrue: true,
    isFalse: false,
    address: '2111 N Hillfield Rd E138', // string
    pets: ['Emerson', 'Sugar', 'Cinnamon', 'Beau'], //array
    year: 2017,
    notDefined: undefined,
    nullable: null,
    greet() { //method
        return 'Hello';
    },
    car: { //Object
        year: 1971,
        make: 'Chevy',
        model: 'Chevelle',
        color: 'custom'
    },
    carOwned() { //method
        console.log('Teresa owns a ' + car.color + ' ' + car.make + ' ' +
            car.model);
    },
    emptyString: '', //will return "empty string"
    zero: 0,
    one: 1,


};