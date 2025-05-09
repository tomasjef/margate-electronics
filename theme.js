document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  const toggle = document.createElement('button');
  toggle.textContent = document.body.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  toggle.style = 'position:fixed;bottom:1rem;right:1rem;padding:0.5rem 1rem;font-family:monospace;z-index:2000';
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
});
