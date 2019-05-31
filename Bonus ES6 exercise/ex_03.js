

// We have a user profile with a name, lastname, age, profession and salary.

// And we want to console log everything just like:

// "My name is xxx xxx, i'm xxx years old. I work as xxx and make $xxx.


const userProfile = {
    firstName: "Max",
    lastName: "Skupin",
    age: 37,
    position: "Web developer",
    salary: 22000,
    display: function() {
        console.log(`My name is ${this.firstName} ${this.lastName}, I'm ${this.age} years old. I work as a ${this.position} and make \$${this.salary}`)
    }
}

userProfile.display();