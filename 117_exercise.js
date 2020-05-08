class Student {
    name;
    score1;
    score2;

    constructor(name, score1, score2) {
        this.score1 = score1;
        this.score2 = score2;
        this.name = name;
    }

    average() {
        return (this.score1 + this.score2) / 2;
    }
}

class Classroom {
    students = [];
    maxSize = 30;
    passScore = 75;
    subject;

    constructor(subject, passScore) {
        this.subject = subject;
        this.passScore = passScore;
    };

    add(student) {
        if (this.students.length === this.maxSize) {
            throw Error("Classroom full");
        }
        this.students.push(student);
    }

    doesStudentPass(student) {
        return student.average >= this.passScore;
    }

    getPassingStudents() {
        this.students.filter(
            this.doesStudentPass)
    };

// Write the function doesStudentPass here:

}



    let maths =new Classroom('Basic Mathematics', 80);
maths.add(new Student('Arnav', 70, 80));
maths.add(new Student('Peter', 50, 55));
maths.add(new Student('Sunhil', 90, 99));


    let history =new Classroom('History', 60);
history.add(new Student('Arnav', 50, 40));
history.add(new Student('Peter', 88, 62));
history.add(new Student('Sunhil', 80, 50));

// console.log(maths.getPassingStudents());
// console.log(history.getPassingStudents());
for (let c of [maths, history]) {
    console.log(
        `Passing ${c.subject}: ${c.getPassingStudents().map(( s) => {s.name})}`);
}