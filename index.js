// Select the "About" link and the description element
const aboutLink = document.getElementById('about-link');
const aboutDescription = document.querySelector('.about-link'); // Corrected class name

// Add an event listener to the "About" link
aboutLink.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Toggle the visibility of the description by adding or removing the "active" class
    aboutDescription.classList.toggle('active');
});
