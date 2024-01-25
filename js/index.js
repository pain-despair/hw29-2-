// const square = document.getElementById('square');
let isBouncing = false;

function bounce() {
    if (!isBouncing) {
        isBouncing = true;
        square.classList.add('bounce');
        setTimeout(() => {
            square.classList.remove('bounce');
            isBouncing = false;
        }, 300);
        showBems();
    }
}

function showBems() {
    const bemsText = document.createElement('div');
    bemsText.innerHTML = 'БЕМС';
    bemsText.classList.add('bems');
    square.appendChild(bemsText);
    setTimeout(() => {
        bemsText.remove();
    }, 2000);
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const rect = square.getBoundingClientRect();
    switch (key) {
        case 'arrowup':
            square.style.transform = `translate(-50%, ${Math.max(rect.top - 10, 0)}px)`;
            break;
        case 'arrowdown':
            const maxY = window.innerHeight - rect.height;
            square.style.transform = `translate(-50%, ${Math.min(rect.top + 10, maxY)}px)`;
            break;
        case 'arrowleft':
            square.style.transform = `translate(${Math.max(rect.left - 10, 0)}px, -50%)`;
            break;
        case 'arrowright':
            const maxX = window.innerWidth - rect.width;
            square.style.transform = `translate(${Math.min(rect.left + 10, maxX)}px, -50%)`;
            break;
        case ' ':
            square.style.transition = 'transform 0.5s ease';
            square.style.transform = `translate(-50%, ${Math.max(rect.top - 10, 0)}px)`;
            setTimeout(() => {
                square.style.transition = 'transform 0.3s ease';
                square.style.transform = `translate(-50%, -50%)`;
            }, 500);
            break;
        case 'control':
            square.style.transition = 'transform 0.5s ease, width 0.5s ease, height 0.5s ease';
            square.style.transform = 'translate(-50%, -50%) scale(1, 0.6)';
            square.style.width = '62.5px'; // 50px * 1.25
            square.style.height = '30px'; // 50px * 0.6
            break;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key.toLowerCase() === 'control') {
        square.style.transition = 'transform 0.3s ease, width 0.3s ease, height 0.3s ease';
        square.style.transform = 'translate(-50%, -50%)';
        square.style.width = '50px';
        square.style.height = '50px';
    }
});