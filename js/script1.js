const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

reveals.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  observer.observe(el);
});

