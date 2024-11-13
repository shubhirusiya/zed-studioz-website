












AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log('Form submitted:', Object.fromEntries(formData));
    this.reset();
    alert('Message sent successfully!');
});
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xAxis = (rect.width / 2 - x) / 20;
        const yAxis = (rect.height / 2 - y) / 20;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0) rotateX(0)';
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    
    setTimeout(showSlides, 2000);
}

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlides();
    });
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const pageIndicator = document.getElementById('pageIndicator');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    // Function to update notch text and active nav item
    function updateNotch(newText, activeLink) {
        pageIndicator.textContent = newText;
        
        // Update active state of nav items
        navItems.forEach(item => item.style.color = 'white');
        if (activeLink) {
            activeLink.style.color = '#007bff';
        }
    }

    // Handle scroll events
    function handleScroll() {
        // Get current scroll position
        const scrollPosition = window.scrollY + 100; // Added offset for better detection

        // Find the current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const sectionId = section.getAttribute('id');
                // Find corresponding nav item
                const activeNavItem = document.querySelector(`.nav-item[href="#${sectionId}"]`);
                
                if (activeNavItem) {
                    const pageTitle = activeNavItem.getAttribute('data-page');
                    updateNotch(pageTitle, activeNavItem);
                }
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Handle click events on nav items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageTitle = this.getAttribute('data-page');
            updateNotch(pageTitle, this);
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Set initial state
    handleScroll();
});