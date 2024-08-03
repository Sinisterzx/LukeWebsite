// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Optional: Change the cursor size or background on hover
document.addEventListener('mouseenter', () => {
    cursor.style.background = 'rgba(255, 255, 255, 0.7)'; // Change opacity on hover
});


document.addEventListener('mouseout', () => {
    cursor.style.background = 'rgba(255, 255, 255, 0.7)';
})

document.addEventListener('mouseleave', () => {
    cursor.style.background = 'rgba(255, 255, 255, 0)'; // Reset opacity when not hovering
});

document.addEventListener('mousedown', (e) => {
    cursor.style.transform = 'scale(1.2)'

})

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)'

})

const rubiksImg = document.getElementById("rubiks_img");

rubiksImg.addEventListener('mouseenter', () => {
    rubiksImg.animate(
        [
            { transform: 'scale(1)', opacity: 0.8 },
            { transform: 'scale(1.1)', opacity: 1}
        ],
        {
            duration: 200,
        }
    );

    rubiksImg.style.transform = 'scale(1.1)';
    rubiksImg.style.opacity = 1;
});


rubiksImg.addEventListener('mouseleave', () =>{
    rubiksImg.animate(
        [
            { transform: 'scale(1.1)', opacity: 1 },
            { transform: 'scale(1)', opacity: 0.8 }
        ],
        {
            duration: 200,
        }
    );

    rubiksImg.style.transform = 'scale(1)';
    rubiksImg.style.opacity = 0.8;
})