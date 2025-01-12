const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function () {
  $('.screen-carousel').owlCarousel({
    loop: true,             // Enable infinite loop
    margin: 10,             // Space between items
    nav: false,              // Enable next/prev navigation
    dots: false,             // Show dot indicators
    autoplay: true,         // Enable auto-play
    autoplayTimeout: 3200,  // Auto-play interval (in milliseconds)
    autoplayHoverPause: false, // Pause auto-play on hover
    responsive: {
      0: {
        items: 1 ,           // 1 item for small screens (e.g., smartphones)
        nav: true,  
      },
      600: {
        items: 2            // 2 items for medium screens (e.g., tablets)
      },
      1000: {
        items: 3            // 3 items for desktops
      },
      1200: {
        items: 4            // 4 items for large desktops
      }
    }
  });
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = question.getAttribute("aria-expanded") === "true";

    // Close all open answers
    document.querySelectorAll(".faq-answer.open").forEach((openAnswer) => {
      openAnswer.classList.remove("open");
      openAnswer.setAttribute("aria-hidden", "true");
      openAnswer.previousElementSibling.setAttribute("aria-expanded", "false");
    });

    // Toggle current answer
    if (!isOpen) {
      answer.classList.add("open");
      answer.setAttribute("aria-hidden", "false");
      question.setAttribute("aria-expanded", "true");
    }
  });
});


document.querySelectorAll('.picsGrid img').forEach((img) => {
  img.addEventListener('click', (event) => {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal';

    // Create focused image
    const focusedImg = document.createElement('img');
    focusedImg.src = event.target.src; // Set source to the clicked image
    modal.appendChild(focusedImg);

    // Append modal to body
    document.body.appendChild(modal);

    // Show modal
    modal.style.display = 'flex';

    // Close modal on click outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.removeChild(modal);
      }
    });
  });
});


AOS.init();
// ---------------------------------












