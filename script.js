document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.getElementById('theme-toggle');
  icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

function openModal(title) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-title').textContent = title;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
