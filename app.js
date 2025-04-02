const coin = document.querySelector('#coin');
const avatar = document.querySelector('#player');

const xStep = 50;
const yStep = 50;

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowDown') {
        const top = parsePosNum(avatar.style.top);
        avatar.style.top = parsePosStr(top + yStep); 
    }
    if (event.key === 'ArrowUp') {
        const top = parsePosNum(avatar.style.top);
        avatar.style.top = parsePosStr(top - yStep); 
    }
    if (event.key === 'ArrowLeft') {
        const left = parsePosNum(avatar.style.left);
        avatar.style.left = parsePosStr(left - xStep);
        avatar.style.transform = 'scale(-1, 1)';
    }
    if (event.key === 'ArrowRight'){
        const left = parsePosNum(avatar.style.left);
        avatar.style.left = parsePosStr(left +xStep);
        avatar.style.transform = 'scale(1, 1)';
    }
})

function parsePosNum(pos) {
    let num = 100;
    if (pos.length > 0){
        num = parseInt(pos.slice(0,-2));
    }
    return num
}

function parsePosStr(pos) {
    return pos.toString() + 'px';
}