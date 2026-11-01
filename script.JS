const menu = document.getElementById('menu');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
});
// Lien actif selon la section visible
const links = [...menu.querySelectorAll('a')];
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => obs.observe(s));
// Vidéo absente : on garde le placeholder
const box = document.getElementById('video');
box.querySelector('source').addEventListener('error', () => box.classList.add('novideo'));
document.getElementById('year').textContent = new Date().getFullYear();
