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
