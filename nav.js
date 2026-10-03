// Highlights the sidebar link of the section currently on screen (home page only).
//
// The current section is the last one whose top has scrolled above 35% of
// the window height. At the very bottom of the page the last section is
// used instead, because Contact is too short to ever reach that line.

const links = document.querySelectorAll('.section-nav a');
const sections = Array.from(links, link => document.querySelector(link.hash));

function highlight() {
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
      current = section;
    }
  }

  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) current = sections[sections.length - 1];

  links.forEach(link => link.classList.toggle('active', link.hash === '#' + current.id));
}

window.addEventListener('scroll', highlight, { passive: true });
highlight();
