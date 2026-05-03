const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const timelines = document.querySelectorAll('[data-timeline]');

for (const timeline of timelines) {
  const tabs = [...timeline.querySelectorAll('[data-timeline-target]')];
  const panels = [...timeline.querySelectorAll('[data-timeline-panel]')];

  for (const tab of tabs) {
    tab.addEventListener('click', () => {
      const target = tab.dataset.timelineTarget;
      for (const item of tabs) {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      }
      for (const panel of panels) {
        panel.classList.toggle('active', panel.dataset.timelinePanel === target);
      }
    });
  }
}

const galleries = document.querySelectorAll('[data-gallery]');

for (const gallery of galleries) {
  const image = gallery.querySelector('[data-gallery-image]');
  const caption = gallery.querySelector('[data-gallery-caption]');
  const thumbs = [...gallery.querySelectorAll('[data-gallery-thumb]')];
  const prev = gallery.querySelector('[data-gallery-prev]');
  const next = gallery.querySelector('[data-gallery-next]');
  let current = Math.max(0, thumbs.findIndex(thumb => thumb.classList.contains('active')));

  const show = index => {
    current = (index + thumbs.length) % thumbs.length;
    const thumb = thumbs[current];
    image.src = thumb.dataset.src;
    image.alt = thumb.dataset.alt;
    caption.textContent = thumb.dataset.caption;
    for (const item of thumbs) {
      const active = item === thumb;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    }
  };

  prev?.addEventListener('click', () => show(current - 1));
  next?.addEventListener('click', () => show(current + 1));
  thumbs.forEach((thumb, index) => thumb.addEventListener('click', () => show(index)));
}
