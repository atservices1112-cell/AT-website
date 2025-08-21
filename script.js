
document.addEventListener("scroll", () => {
  document.querySelectorAll('.card, img').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('animate__animated','animate__fadeInUp');
    }
  });
});
