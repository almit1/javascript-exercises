const findTheOldest = function (people) {

    let maxAge = 0;
    let oldestPerson;

    for (let person of people) {

        if (person.yearOfDeath === undefined) person.yearOfDeath = 2026;

        let age = person.yearOfDeath - person.yearOfBirth;

        if (maxAge < age) {
            maxAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
