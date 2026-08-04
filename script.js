
const text = "QUALITY ASSURANCE TESTER • MANUAL TESTER • UAT • WEB & MOBILE TESTING";
const typing = document.getElementById("typing");
let i = 0;

function type(){
  if(i < text.length){
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 28);
  }
}
type();

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

document.querySelectorAll(".stat-number[data-target]").forEach(counter => {
  const target = parseFloat(counter.dataset.target);
  let current = 0;
  const step = target / 45;

  const update = () => {
    current += step;

    if(current < target){
      counter.textContent = target % 1 === 0
        ? Math.ceil(current)
        : current.toFixed(1);
      requestAnimationFrame(update);
    }else{
      counter.textContent = target % 1 === 0
        ? target
        : target.toFixed(1) + "+";
    }
  };

  update();
});
