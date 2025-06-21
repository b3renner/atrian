const words = ["luz", "futuro", "tecnologia", "direção"];
let index = 0;
const dynamicWordElement = document.getElementById("dynamic-word");

function changeWord() {
    dynamicWordElement.style.opacity = 0; 
    setTimeout(() => {
        dynamicWordElement.textContent = words[index];
        dynamicWordElement.style.opacity = 1; 
        index = (index + 1) % words.length; 
    }, 500); 
}

dynamicWordElement.textContent = words[index];
index++;

setInterval(changeWord, 2000);

const points = [
    document.getElementById("point1"),
    document.getElementById("point2"),
    document.getElementById("point3"),
];
const lines = [
    document.getElementById("line1"),
    document.getElementById("line2"),
    document.getElementById("line3"),
];

function drawLine(line, delay) {
    line.style.strokeDasharray = line.getTotalLength();
    line.style.strokeDashoffset = line.getTotalLength();
    line.style.opacity = 1; 
    line.style.transition = `stroke-dashoffset 1s ease ${delay}s`;
    line.style.strokeDashoffset = '0';
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateConstellation();
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.6 });

observer.observe(document.querySelector('#quem-somos'));

function animateConstellation() {
    points[0].style.opacity = 1; 
    points[0].style.animation = "glow 1.5s ease infinite alternate"; 

    drawLine(lines[0], 0); 

    setTimeout(() => {
        points[1].style.opacity = 1; 
        points[1].style.animation = "glow 1.5s ease infinite alternate"; 
        drawLine(lines[1], 0); 
    }, 1500); 

    setTimeout(() => {
        points[2].style.opacity = 1; 
        points[2].style.animation = "glow 1.5s ease infinite alternate"; 
        drawLine(lines[2], 0); 
    }, 3000); 
}
