let element = document.getElementById("board");
let isPressed = false;
element.addEventListener('mousedown', () => { isPressed = true; });
element.addEventListener('mouseup', () => { isPressed = false; });
element.addEventListener('mousemove', (e) => { 
    if (isPressed) {
        e.target.style.backgroundColor = 'red';
    } 
});
for (let i = 0; i < 11800; i++) {
    element.appendChild(document.createElement('div'));
}


let color = document.getElementById('color');
element.addEventListener('mousedown', ()=>{document.createElement})