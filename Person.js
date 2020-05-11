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
        let greetBtn = null;
        let sayNameBtn = null;

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
        greetBtn = document.createElement('button');
        sayNameBtn = document.createElement('button');

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
        container.appendChild(greetBtn);
        container.appendChild(sayNameBtn);

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
        greetBtn.id = 'greet-btn';
        sayNameBtn.id = 'sayname-btn';

        greetBtn.innerHTML = 'Greet';
        sayNameBtn.innerHTML = 'What\'s your name?';

        greetBtn.addEventListener('click', () => {
            this.greet();
        });
        sayNameBtn.addEventListener('click', () => {
            this.sayName();
        });
    }

    greet() {
        console.log(this);
        let greetBox;
        let mouth;
        greetBox = document.createElement('div');
        greetBox.className = 'greet-box';
        container.appendChild(greetBox);
        greetBox.innerHTML = 'Hello World!';
        mouth = document.querySelector('.mouth');
        mouth.style.borderTop = '2px solid red';

        setTimeout(function() {
            greetBox.style.display = 'none';
            mouth.style.borderTop = 'none';
        }, 2000);
    }
    
    sayName() {
        console.log(this);
        let greetBox;
        let mouth;
        greetBox = document.createElement('div');
        greetBox.className = 'greet-box';
        container.appendChild(greetBox);
        greetBox.innerHTML = `${this.name} ${this.surname}`;
        mouth = document.querySelector('.mouth');
        mouth.style.borderTop = '2px solid red';

        setTimeout(function() {
            greetBox.style.display = 'none';
            mouth.style.borderTop = 'none';
        }, 2000);
    }
}
