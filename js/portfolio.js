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