document.getElementById('toggle-mode').addEventListener('click', function () {
  
  document.body.classList.toggle('dark-mode');
});

function smoothScroll(target) {
  
  const element = document.querySelector(target);
  if (element) {
     
      element.scrollIntoView({
          behavior: 'smooth',
          block: 'start' 
      });
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      smoothScroll(this.getAttribute('href'));
  });
});




