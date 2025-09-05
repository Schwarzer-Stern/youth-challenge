// 뒤로가기/앞으로가기 시 새로고침
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    location.reload();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.rotate-image').forEach(img => {
    let angle = 0; // 초기 각도
    img.addEventListener('click', () => {
      angle -= 90;
      img.style.transform = `rotate(${angle}deg)`;
    });
  });
});
