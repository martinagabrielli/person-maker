class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;

        let root = document.querySelector('body');
        let container = null;
        let hair = null;
        let head = null;
        let leftEye = null;
        let rightEye = null;
        let mouth = null;
        let body = null;
        let rightArm = null;
        let leftArm = null;
        let leftLeg = null;
        let rightLeg = null;

        container = document.createElement('div');
        hair = document.createElement('div');
        head = document.createElement('div');
        leftEye = document.createElement('div');
        rightEye = document.createElement('div');
        mouth = document.createElement('div');
        body = document.createElement('div');
        leftArm = document.createElement('div');
        rightArm = document.createElement('div');
        leftLeg = document.createElement('div');
        rightLeg = document.createElement('div');

        root.appendChild(container);
        container.appendChild(hair);
        container.appendChild(head);
        container.appendChild(leftEye);
        container.appendChild(rightEye);
        container.appendChild(mouth);
        container.appendChild(body);
        container.appendChild(leftArm);
        container.appendChild(rightArm);
        container.appendChild(leftLeg);
        container.appendChild(rightLeg);

        container.id = 'container';
        hair.className = 'hair';
        head.className = 'head';
        leftEye.className = 'eye left-eye';
        rightEye.className = 'eye right-eye';
        mouth.className = 'mouth';
        body.className = 'body';
        leftArm.className = 'arm left-arm';
        rightArm.className = 'arm right-arm';
        leftLeg.className = 'leg left-leg';
        rightLeg.className = 'leg right-leg';
    }
    greet() {
        console.log('hello world!');
        // return this;
    }
    walk() {
        console.log('I\'m walking...');
        // return this;
    }
}

console.log();