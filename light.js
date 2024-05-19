
document.body.style.backgroundColor = 'rgb(24, 25, 38)';
document.body.style.color = 'rgb(183, 189, 248)';
document.title = 'Christmas Lights';

let colour01 = document.getElementById('glow-01').style.backgroundColor = 'rgb(230, 69, 83)';
let colour02 = document.getElementById('glow-02').style.backgroundColor = 'rgb(64, 160, 43)';
let colour03 = document.getElementById('glow-03').style.backgroundColor = 'rgb(4, 165, 229)';
let colour04 = document.getElementById('glow-04').style.backgroundColor = 'rgb(136, 57, 239)';

const circle = document.querySelectorAll('.div');
let onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById('offBtn');
let incBtn = document.getElementById('incBtn');
let decBtn = document.getElementById('decBtn');

function setAnimationDuration(duration) {
    circle.forEach(function (element) {
        element.style.animationDuration = duration
    })
}
    
offBtn.addEventListener('click', function() {
    circle.forEach(function (element) {
        element.style.animation = 'none';
        element.style.boxShadow = 'none';
        element.style.backgroundColor = 'rgb(35, 38, 52)';
    })
})

onBtn.addEventListener('click', function() {
    circle.forEach(function(element, index) {
        const colors = ['rgb(230, 69, 83)', 'rgb(64, 160, 43)', 'rgb(4, 165, 229)', 'rgb(136, 57, 239)'];
        element.style.backgroundColor = colors[index];
        element.style.animation = `glow-${index + 1} 1s infinite`;
    });

    document.getElementById('glow-01').style.animation = 'glow-01 1s infinite';
    document.getElementById('glow-02').style.animation = 'glow-02 1s infinite';
    document.getElementById('glow-03').style.animation = 'glow-03 1s infinite';
    document.getElementById('glow-04').style.animation = 'glow-04 1s infinite';
});

incBtn.addEventListener('click', function() {
    setAnimationDuration('0.5s');
});

decBtn.addEventListener('click', function() {
    setAnimationDuration('2s');
});