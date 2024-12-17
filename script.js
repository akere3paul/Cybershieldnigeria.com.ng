//--------javaScript for Toggle Menu------//

    var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }

  // card swipper //

  const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  // user profile //

  const form = document.getElementById('profile-form');
const updateBtn = document.getElementById('update-btn');

updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch('update_profile.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

// user dashboard //

// Mock user data
const userData = {
  username: 'JohnDoe',
  accountBalance: '$100.00',
  lastLogin: '2023-11-08 10:00 AM'
};

// Update dashboard with user data
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').innerText = `Welcome, ${userData.username}!`;
  document.querySelector('.info-card h2 + p').innerText = userData.accountBalance;
  document.querySelector('.info-card:nth-child(2) h2 + p').innerText = userData.lastLogin;
});

// Cookies popup //

document.addEventListener('DOMContentLoaded', () => {
  const cookiePopup = document.getElementById('cookie-popup');
  const acceptButton = document.getElementById('accept-cookies');

  // Check if cookie exists
  if (!getCookie('cookie_accepted')) {
      // Display cookie popup
      cookiePopup.style.display = 'block';
  }

  acceptButton.addEventListener('click', () => {
      // Set cookie
      setCookie('cookie_accepted', 'true', 30);
      // Hide cookie popup
      cookiePopup.style.display = 'none';
  });
});
// Helper functions
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
          return cookieValue;
      }
  }
  return null;
}