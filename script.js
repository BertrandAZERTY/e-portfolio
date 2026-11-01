// Textes anglais, dans l'ordre des attributs data-i18n ("" = identique au français)
const EN = [
"Welcome! My name is Esteban Curnillon.",
"Passionate about design and engineering, I want to bring my knowledge to life through real projects in an industrial setting.",
"I am a first-year engineering student in the 3EA department (Electronics, Electrical Energy and Automation) at ENSEEIHT in Toulouse.",
"I created this space to share my journey throughout my engineering studies. You will find my technical work, my international mobility plans, as well as my community involvement and my everyday passions.",
"I am currently looking for a six-week work placement in the aerospace sector, starting in June 2027, for a first immersion in the industrial world.",
"Enjoy exploring my work, and feel free to download my CV or get in touch!",
"View my CV",
"Profile photo<br>assets/photo.jpg",
"Skills","Computing and programming","","","",
"Languages","French: native","English: B2","Spanish: B1",
"Electronics and engineering","Circuit analysis",
"Tools and systems","","",
"Soft skills","Project management","Team spirit","Rigorous organisation","Adaptability",
"Technical projects",
"Project image<br>assets/projet-debris.png",
"Sustainability of Earth’s orbit and satellites",
"Research project carried out during my preparatory classes, submitted in May 2026. A study of the challenges of managing space debris and preserving the orbital environment, using a scientific and analytical approach.",
"Project image<br>assets/projet-sdi.png",
"Launching the Property Master Plan (FFCAM)",
"<strong>Context and objectives.</strong> Carried out during my work placement at the French Federation of Alpine and Mountain Clubs (FFCAM) in Toulouse, this project aimed to launch the Property Master Plan (SDI) to bring mountain huts up to standard and support their energy transition.",
"<strong>Tasks.</strong>",
"Designing a visual Excel database so that volunteers can complete the SDI independently.",
"Taking part in key meetings (funding committees, site kick-offs, on-site visits to the Venasque and Arrémoulit huts).",
"Analysing technical challenges in remote areas (helicopter transport, energy self-sufficiency as at Campana de Cloutou, short weather windows).",
"<strong>Skills developed.</strong> Data modelling (Excel), coordination between contractors (client and project management) and management of high-altitude construction sites.",
"As part of my training in Electrical Energy &amp; Automation (3EA) at ENSEEIHT, I want to carry out study and work placement projects abroad. I have targeted three strategic destinations, consistent with my specialisation and my career goals in the aeronautics and aerospace sector:",
"Germany",
"A major European reference in electrical engineering and aeronautics, Germany is my first choice. A stay there would let me deepen my knowledge of transport electrification and hybrid propulsion systems.",
"United States",
"A key player in technological innovation and cutting-edge aerospace, the United States is my second project. A stay there would immerse me in advanced engineering ecosystems and space research.",
"Canada",
"Known for its dynamic aviation industry (notably in maintenance and rotary-wing aircraft) and its multicultural working environment, Canada is my third project, ideal for developing my international adaptability.",
"These three destinations reflect my wish to combine technical expertise, language improvement and cultural openness to build a solid career in the aeronautics industry.",
"Restos du Cœur",
"Driven by a desire to give practical help, I volunteered with the Restos du Cœur food aid charity in Andernos. I took an active part in the logistics chain, from receiving and storing deliveries to distributing food to beneficiaries. A rich human experience that made me aware of the value of service and of solidarity on the ground.",
"AE N7 and student life",
"Involvement in the ENSEEIHT student association (AE N7), notably in organising events.",
"Sea Scouts",
"Scouting plays an essential part in my journey. After more than 11 years in the movement, I have built my independence and sense of responsibility there. Today, as a camp director with the Sea Scouts in Bordeaux, I supervise young people, lead projects and run a team. This responsibility has helped me develop strong skills in leadership, teaching, and logistical and budget management.",
"The Climate Fresk",
"From my first year of preparatory classes, I had the opportunity to take part in a “Climate Fresk” workshop alongside other Toulouse Transition students. A memorable experience that made me fully aware of today’s climate challenges and of the responsibilities awaiting us as future engineers.",
"“The Trial of King Kong”",
"Also during my first year of preparatory classes and then engineering school, I took part in the interactive play “The Trial of King Kong”. This project let me engage with a major social issue: raising awareness of sexist and sexual violence and its consequences.",
"“Futur Proche” festival",
"Thanks to ENSEEIHT and the universities of Toulouse, I took part in the “Futur Proche” festival. Through numerous talks and workshops, this event let me explore climate issues from a resolutely scientific angle and discover many current and future technological innovations.",
"Mountaineering","A taste for effort in the high mountains, the drive to push my limits and admiration for nature.",
"Triathlon","A demanding sport combining endurance, rigour and consistency in training.",
"Guitar","A personal creative activity.",
"Scouting","Involved for 11 years, with a sense of teamwork and a love of the outdoors.",
"Download the CV (French)","Download the CV (English)","LinkedIn profile",
"",
"My introduction in English: my journey as a 3EA engineering student at ENSEEIHT and my ambitions in the aerospace sector.",
"Elevator pitch video<br>assets/pitch.mp4 or YouTube iframe",
"",
"To build my career project, I draw inspiration from the paths of three passionate professionals. Each reflects one of my ambitions and echoes my international mobility projects.",
"",
"Product Owner / Work Package Manager on reusable launchers, ArianeGroup (Cergy, France)",
"<strong>Career path.</strong> After preparatory classes, he joined INSA in mechanical engineering and automation, with an unforgettable exchange year at RIT (Rochester Institute of Technology) in the United States. He then specialised with a master’s at Supaéro before joining ArianeGroup in 2007. Today he leads major projects on space launchers and is actively involved in passing on his passion to younger generations.",
"<strong>Linked mobility.</strong> A semester in the United States, to take in cutting-edge aerospace innovation and enjoy a strong international academic experience.",
"",
"Aircraft Overall Design and Performance Engineer, Ascendance (Toulouse, France)",
"<strong>Career path.</strong> After preparatory classes, he entered ISAE-SUPAERO in 2020. Following a gap-year placement and a final work-based year at Ascendance, he was hired in 2024. He now works on the hybrid thermal-electric aircraft, a key subject for combining aeronautical innovation and environmental transition.",
"<strong>Linked mobility.</strong> A semester in Germany, a pioneer in electrical engineering and sustainable aviation technologies, directly in line with my 3EA ambitions.",
"",
"Senior VP MRO, Heliwelders / Nampa Valley Helicopters (Vancouver, Canada)",
"<strong>Career path.</strong> With a master’s degree in mechanical engineering and over 25 years in aviation, Vincent has built an international career of more than 20 years in helicopter maintenance, repair and overhaul (MRO). He has worked on three continents (Europe, Asia, North America), balancing strict regulatory requirements and intercultural challenges.",
"<strong>Linked mobility.</strong> A semester in Canada, to develop my adaptability, broaden my view of the world and thrive in an inspiring multicultural environment."
];
const ALT = {
  fr: ["Portrait d'Esteban Curnillon", "Simulation des débris en orbite terrestre", "Tableau Excel de performance thermique des refuges"],
  en: ["Portrait of Esteban Curnillon", "Simulation of debris in Earth orbit", "Excel table of thermal performance of mountain huts"]
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
nodes.forEach(n => n.dataset.fr = n.innerHTML);
const imgs = [...document.querySelectorAll('.ph img')];

function setLang(l) {
  nodes.forEach(n => { n.innerHTML = (l === 'en' && EN[+n.dataset.i18n]) || n.dataset.fr; });
  imgs.forEach((im, i) => im.alt = ALT[l][i]);
  document.documentElement.lang = l;
  document.querySelectorAll('.lang span').forEach(s => s.classList.toggle('on', s.dataset.l === l));
  try { localStorage.setItem('lang', l); } catch (e) {}
}
let lang = 'fr';
try { lang = localStorage.getItem('lang') || 'fr'; } catch (e) {}
setLang(lang);
document.querySelector('.lang').addEventListener('click', () => {
  lang = lang === 'fr' ? 'en' : 'fr';
  setLang(lang);
});

// Menu mobile
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
