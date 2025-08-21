
// IntersectionObserver for reveal animations
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting){
      e.target.classList.add('visible');
      if (e.target.querySelectorAll('.count').length){
        startCounters(e.target);
      }
    }
  });
},{threshold:0.15});
reveals.forEach(el=>io.observe(el));

// Animated counters
function startCounters(container){
  const counters = container.querySelectorAll('.count');
  counters.forEach((el)=>{
    const target = +el.getAttribute('data-target');
    let current = 0;
    const step = Math.max(1, Math.floor(target/60));
    const tick = ()=>{
      current += step;
      if (current >= target) current = target;
      el.textContent = current;
      if (current < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
