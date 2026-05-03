const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

for (const form of document.querySelectorAll('[data-demo-form]')) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (status) {
      status.textContent = 'Demo mode: form wiring is pending. Use the published booking email until form handling is connected.';
    }
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
