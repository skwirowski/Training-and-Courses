/* eslint-disable no-underscore-dangle */
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get gender() {
    return this._gender;
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

const somebody = new Person();

console.log(somebody.sayFullName());
console.log(Person.greetExtraTerrestrials('Martians'));
