const container = document.querySelector(".rotate-fx-con")
const card = document.querySelector(".rotate-fx")

container.addEventListener('mousemove', (e) => {
    let rect = e.target.getBoundingClientRect();
    let posX = e.clientX - rect.left;
    let posY = e.clientY - rect.top;
    let xAxis = (-(window.innerWidth / 3 - posX) /20);
    let yAxis = ((window.innerHeight / 2 - posY) /20);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // console.log(e.pageX, e.pageY);
});

// Create a new file portfolio.js or add to your existing JS file

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const slides = document.querySelectorAll('.project-slide');
    let currentSlide = 0;

    function updateArrows() {
        leftArrow.style.display = currentSlide === 0 ? 'none' : 'block';
        rightArrow.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
    }

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        updateArrows();
    }

    leftArrow.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    });

    updateArrows();
});




