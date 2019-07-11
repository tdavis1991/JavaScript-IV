// CODE here for your Lambda Classes
class Person {
    constructor(ppl) {
        this.name = ppl.name;
        this.age = ppl.age;
        this.location = ppl.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, and I am from ${this.location}`);
    }
}

class Instuctor extends Person {
    constructor(instuctorAttr) {
        super(instuctorAttr);
        this.specialty = instuctorAttr.specialty;
        this.favLanguage = instuctorAttr.favLanguage;
        this.catchPhrase = instuctorAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we will learn about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
} 

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(subject) {
        subject.map(list => console.log(`${list}`));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instuctor {
    constructor(projectManagerAttr) {
        super(projectManagerAttr);
        this.gradClassName = projectManagerAttr.gradClassName;
        this.favInstructor = projectManagerAttr.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!`);
    }
    debugsCode(stuObj, subject) {
        console.log(`${this.name} debugs ${stuObj.name}'s code on ${subject}`);
    }
}

// Instructors
const john = new Instuctor({
    name: 'John',
    age: 32,
    location: 'Dallas',
    specialty: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'You know what I mean.'
});

const sarah = new Instuctor({
    name: 'Sarah',
    age: 35,
    location: 'Miami',
    specialty: 'Back-end',
    favLanguage: 'PHP',
    catchPhrase: 'Thats crazy.'
});

const adam = new Instuctor({
    name: 'Adam',
    age: 31,
    location: 'Baltimore',
    specialty: 'Mobile application',
    favLanguage: 'Java',
    catchPhrase: 'Are you serious'
});

// Project managers
const jessica = new ProjectManager({
    name: 'Jessica',
    age: 29,
    location: 'Dallas',
    specialty: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'OMG',
    gradClassName: 'WebPt8',
    favInstructor: 'John'
});

const james = new ProjectManager({
    name: 'James',
    age: 31,
    location: 'Miami',
    specialty: 'Back-end',
    favLanguage: 'PHP',
    catchPhrase: 'Oh really',
    gradClassName: 'Web3',
    favInstructor: 'Sarah'
});

const daryl = new ProjectManager({
    name: 'Daryl',
    age: 28,
    location: 'Baltimore',
    specialty: 'Mobile application',
    favLanguage: 'Java',
    catchPhrase: 'You so crazy',
    gradClassName: 'MobilePt2',
    favInstructor: 'Adam'
});

// Students

const tara = new Student({
    name: 'Tara',
    age: 24,
    location: 'Dallas',
    previousBackground: 'Work at Verizon.',
    className: 'WebPt8',
    favSubjects: ['HTML', 'CSS', 'JAVASCRIPT']
})

const jeff = new Student({
    name: 'Jeff',
    age: 26,
    location: 'Miami',
    previousBackground: 'Construction',
    className: 'Web3',
    favSubjects: ['PHP', 'Python']
})

const sam = new Student({
    name: 'Sam',
    age: 22,
    location: 'Baltimore',
    previousBackground: 'Teacher',
    className: 'MobilePt2',
    favSubjects: ['Java', 'C++']
})

sam.speak();
john.demo('Javascript');
sarah.grade(jeff, jeff.favSubjects[1]);
jeff.listsSubjects(jeff.favSubjects);
tara.PRAssignment('Javascript');
sam.sprintChallenge('Java');
james.standUp(james.gradClassName);
daryl.debugsCode(sam, sam.favSubjects[1]);

