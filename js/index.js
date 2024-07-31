document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.nav-item');
    var navInput = document.getElementById('menu');

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navInput.checked = false;
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.card-service img, .card-service p, .card-service a, .us-info h2, .us-info p, .btn-info, .btn-our-pages, .img-about, .why-us h2, .about-info article, .about-info .benefits, .why-a-website .titlte-why, .why-a-website .speach-why, .img-website img, .personalization-info p, .personalization-info h2, .opinions-container h2, .opinions-container p, .slider, .contac-speach, form');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Opcional: deja de observar el elemento después de la animación
            }
        });
    }, {
        threshold: 0.3 // Ajusta este valor según sea necesario
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const indicatorsContainer = document.querySelector('.indicators');
let currentIndex = 0;

// Create indicators
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('span');
    if (i === 0) {
        indicator.classList.add('active');
    }
    indicatorsContainer.appendChild(indicator);
}

const updateSlide = () => {
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicators
    const indicators = document.querySelectorAll('.indicators span');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
};

// Auto-slide
setInterval(nextSlide, 7000);


function scrollToSection(sectionId) {
    // Obtener la altura de la ventana visible
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calcular la posición de desplazamiento
    let offset = windowHeight * 0; // Desplazar un 50% menos
    
    // Obtener la posición y desplazarse a la sección
    let section = document.getElementById(sectionId);
    if (section) {
        let sectionTop = section.offsetTop - offset;
        
        // Aplicar el desplazamiento suave
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'  // Desplazamiento suave
        });
    }
}