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
        items: 1            // 1 item for small screens (e.g., smartphones)
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

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle the visibility of the answer
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    // Smooth animation for height
    if (answer.style.display === 'block') {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.transition = 'max-height 0.4s ease-in-out';
    } else {
      answer.style.maxHeight = '0';
    }

    // Reset transition after toggling
    setTimeout(() => {
      answer.style.transition = '';
    }, 400);
  });
});
