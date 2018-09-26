let btnGreen = document.querySelector('div.green');
let btnRed = document.querySelector('div.red');
let btnBlue = document.querySelector('div.blue');


btnGreen.addEventListener('click', function () {
    document.body.className = 'green';
    //document.body.classList.toggle('green');
})
btnRed.addEventListener('click', function () {
    document.body.className = 'red';
    //document.body.classList.toggle('red');
})
btnBlue.addEventListener('click', function () {
    document.body.className = 'blue';
    //document.body.classList.toggle('blue');
})