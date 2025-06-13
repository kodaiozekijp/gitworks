document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('ボタンがクリックされました！');
  });
});