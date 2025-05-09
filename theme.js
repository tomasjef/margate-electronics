document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  const toggle = document.createElement('button');
  toggle.setAttribute('data-theme-toggle', '');
  toggle.textContent = document.body.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
});