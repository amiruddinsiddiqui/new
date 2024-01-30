document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  const hamburgerCheckbox = document.querySelector('.toggler');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && navLinks.forEach(link => link.classList.toggle('home', link.hash === '#' + entry.target.id))), { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));

  navLinks.forEach(link => link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);


      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      hamburgerCheckbox.checked && (hamburgerCheckbox.checked = false);
  }));
});





 document.addEventListener('DOMContentLoaded', function () {
      const animatedTextSection = document.querySelector('.animated-text-section');
      const animatedTextElements = document.querySelectorAll('.animated-text');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateText(entry.target);
            observer.unobserve(entry.target);
          }
        });
      });

      animatedTextElements.forEach(textElement => {
        observer.observe(textElement);
      });

      function animateText(animatedText) {
        const words = animatedText.innerText.split(' ');

        animatedText.innerHTML = ''; 

        words.forEach((word, index) => {
          const wordElement = document.createElement('span');
          wordElement.className = 'char'; 
          wordElement.innerHTML = word + ' '; 
          animatedText.appendChild(wordElement);

         
          setTimeout(() => {
            wordElement.style.transform = 'translateY(0)';
          }, 200 + index * 50);
        });
      }
    });
