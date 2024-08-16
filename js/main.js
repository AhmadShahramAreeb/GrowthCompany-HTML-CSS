//for mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  /*The toggle method is used to add the active class to the
   mobileMenu element if it doesn’t already have it, or remove it if it does.*/
   
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
