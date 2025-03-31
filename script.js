// Datos de ejemplo para empleos destacados
const featuredJobs = [
    {
        title: 'Desarrollador Frontend Senior',
        company: 'Tech Solutions',
        location: 'Buenos Aires',
        type: 'Tiempo completo',
        salary: '$80,000 - $120,000',
        description: 'Buscamos un desarrollador frontend con experiencia en React y TypeScript...'
    },
    {
        title: 'Product Manager',
        company: 'Innovation Labs',
        location: 'Remoto',
        type: 'Tiempo completo',
        salary: '$90,000 - $130,000',
        description: 'Se busca un Product Manager con experiencia en productos digitales...'
    },
    {
        title: 'UX Designer',
        company: 'Creative Agency',
        location: 'Córdoba',
        type: 'Tiempo completo',
        salary: '$70,000 - $100,000',
        description: 'Buscamos un diseñador UX con experiencia en diseño de interfaces...'
    }
];

// Función para crear las tarjetas de empleos destacados
function createJobCards() {
    const jobsGrid = document.querySelector('.jobs-grid');
    
    featuredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="job-details">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-clock"></i> ${job.type}</span>
                <span><i class="fas fa-dollar-sign"></i> ${job.salary}</span>
            </div>
            <p class="description">${job.description}</p>
            <button class="btn-apply">Aplicar ahora</button>
        `;
        jobsGrid.appendChild(jobCard);
    });
}

// Función para manejar la búsqueda
function handleSearch() {
    const searchButton = document.querySelector('.btn-search');
    const searchInputs = document.querySelectorAll('.search-box input');

    searchButton.addEventListener('click', () => {
        const jobTitle = searchInputs[0].value;
        const location = searchInputs[1].value;
        
        // Aquí podrías implementar la lógica de búsqueda real
        console.log('Buscando:', { jobTitle, location });
    });
}

// Función para manejar el scroll suave
function handleSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para manejar la navegación móvil
function handleMobileNav() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Agregar botón de menú móvil
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    navbar.insertBefore(menuButton, navLinks);
    
    // Toggle menú móvil
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Función para manejar el efecto parallax en el hero
function handleParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });
}

// Función para animar elementos al hacer scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.program-card, .partners-grid img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    createJobCards();
    handleSearch();
    handleSmoothScroll();
    handleMobileNav();
    handleParallax();
    handleScrollAnimations();
}); 