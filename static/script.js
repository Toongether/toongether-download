document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    for (let i = 0; i < 50; i++) {
      const span = document.createElement('span');
      container.appendChild(span);
    }
});
  