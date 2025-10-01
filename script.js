let currentLanguage = 'ja';
let currentSlide = 0;

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
    updateLanguage();
}

function updateLanguage() {
    // Get all elements with data-ja and data-en attributes
    const elements = document.querySelectorAll('[data-ja][data-en]');
    
    elements.forEach(element => {
        const jaText = element.getAttribute('data-ja');
        const enText = element.getAttribute('data-en');
        
        // Update text content based on current language
        element.textContent = currentLanguage === 'ja' ? jaText : enText;
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update page title
    document.title = currentLanguage === 'ja' 
        ? 'Amma Mia - 奄美大島ラグジュアリー体験' 
        : 'Amma Mia - Amami Oshima Luxury Experience';
}

// Carousel functionality
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const carouselInner = document.querySelector('.carousel-inner');
    
    if (!carouselInner || slides.length === 0) return;
    
    // Wrap around if necessary
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Move carousel
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active states
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-play carousel
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Initialize carousel
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        showSlide(0);
        startAutoPlay();
        
        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with href starting with #
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 2px 20px rgba(10, 37, 64, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 1px 0 rgba(10, 37, 64, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .product-card, .timeline-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Mobile menu toggle (for future implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize page in Japanese
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    initCarousel();
});