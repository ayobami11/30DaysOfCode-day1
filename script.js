let counter = 0;

const count = document.querySelector('#counter');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.onclick = () => {
    lowerCount();
    count.innerHTML = `Counter: ${counter}`;
    changeColor();
};

button2.onclick = () => {
    addCount();
    count.innerHTML = `Counter: ${counter}`;
    changeColor();
}

const lowerCount = () => {counter--;}
const addCount = () => {counter++;}

const changeColor = () => {
    if (counter < 0) {
        count.style.color = 'red';
        count.style.borderColor = 'red';
    } else {
        count.style.color ='green';
        count.style.borderColor = 'green';
    }
}