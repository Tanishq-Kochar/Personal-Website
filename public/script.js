let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');
let socials = document.querySelector('.socials');
let about = document.querySelector('.about');
let resume = document.querySelector('.resume');
let projects = document.querySelector('.projects');
let contact = document.querySelector('.contact');

document.addEventListener('scroll', () => {
    const currentUrl = window.location;
    console.log(currentUrl);
    console.log(window.scrollY);

    // Debugging: Check if the navbar element is being selected correctly
    if (!navbar) {
        console.error('Navbar element not found.');
        return;
    }

    if (window.scrollY > 2900) {
        contact.classList.remove('hidden');
        contact.classList.add('show');
        navbar.style.backgroundColor = '#8A2BE2';
        navbar.style.color = '#F8F9F9';
    } else if (window.scrollY > 2400) {
        projects.classList.remove('hidden');
        projects.classList.add('show');
        navbar.style.backgroundColor = '#00BFFF';
        navbar.style.color = '#FFFFFF';
    } else if (window.scrollY > 1400) {
        navbar.style.backgroundColor = '#1ABC9C';
        navbar.style.color = '#FFFFFF';
        resume.classList.remove('hidden');
        resume.classList.add('show');
    } else if (window.scrollY > 800) {
        navbar.style.backgroundColor = '#E0F7FA';
        navbar.style.color = '#004d40';
        about.classList.remove('hidden');
        about.classList.add('show');
    } else {
        navbar.style.backgroundColor = 'Black';
        navbar.style.color = '#000000';
    }
});
