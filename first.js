const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseenter', () => {
    cursor.style.background = 'rgba(255, 255, 255, 0.7)'; // Change opacity on hover
});

document.addEventListener('mouseout', () => {
    cursor.style.background = 'rgba(255, 255, 255, 0.7)';
});

document.addEventListener('mouseleave', () => {
    cursor.style.background = 'rgba(255, 255, 255, 0)'; // Reset opacity when not hovering
});

document.addEventListener('mousedown', (e) => {
    cursor.style.transform = 'scale(1.2)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

const rubiksImg = document.getElementById('rubik')
const labelImg = document.getElementById('label')
const res = document.getElementById('cv')


function handleMouseEnter(event) {
    const img = event.currentTarget;
    img.animate(
        [
            { transform: 'scale(1)', opacity: 0.8 },
            { transform: 'scale(1.1)', opacity: 1 }
        ],
        {
            duration: 200,
        }
    );

    img.style.transform = 'scale(1.1)';
    img.style.opacity = 1;
}

function handleMouseLeave(event) {
    const img = event.currentTarget;
    img.animate(
        [
            { transform: 'scale(1.1)', opacity: 1 },
            { transform: 'scale(1)', opacity: 0.8 }
        ],
        {
            duration: 200,
        }
    );

    img.style.transform = 'scale(1)';
    img.style.opacity = 0.8;
}

[rubiksImg, labelImg].forEach(img => {
    img.addEventListener('mouseenter', handleMouseEnter);
    img.addEventListener('mouseleave', handleMouseLeave);
});
