export default { //Object
    todaysDate: Date(),
    carRuns: true,
    carBroken: false,
    address: '2111 N Hillfield Rd E138', // string
    cars: ['Honda Civic Dx', 'Honda Civic Si', 'Jeep JKU', 'Chevy Chevelle'], //array
    year: 2017,
    notDefined: undefined,
    nullable: null,
    greet() { //method
        return 'Gentlemen, Start Your Engines!';
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