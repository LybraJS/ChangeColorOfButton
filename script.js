
const all_buttons = document.getElementsByTagName('button');

const colorList = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success',]
const randomColor = colorList[Math.floor(Math.random()*colorList.length)];

//array of buttons gets iterated and for each iteration last class item (btn-whatever) gets removed and right class gets added
function buttonRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
};
function buttonGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
};
function buttonBlue() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
};
function buttonRandom() {
    for (let i=0; i < all_buttons.length; i++) {
        const randomColor = colorList[Math.floor(Math.random()*colorList.length)];
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randomColor);
    }
};

//referring from colorChange(this) from onchange
function colorChange(selectedInput) {
    if (selectedInput.value === 'Red') {
        buttonRed()
        console.log(selectedInput.value)
    } 
    else if (selectedInput.value === 'Green') {
        buttonGreen()
        console.log(selectedInput.value)
    } 
    else if (selectedInput.value === 'Blue') {
        buttonBlue()
        console.log(selectedInput.value)
    } 
    else {
        buttonRandom()
        console.log(selectedInput.value)
    }
};

function resetColors() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    }
    document.getElementById('red-button').classList.add('btn-danger');
    document.getElementById('green-button').classList.add('btn-success');
    document.getElementById('blue-button').classList.add('btn-primary');
    document.getElementById('reset-button').classList.add('btn-warning');

}
