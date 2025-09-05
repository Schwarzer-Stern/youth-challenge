const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.closest('.accordion-box').querySelector('.accordion-content');

    if (content.style.maxHeight) {
      // 닫기
      content.style.maxHeight = null;
      content.style.paddingTop = '0';
      content.style.paddingBottom = '0';
      btn.textContent = "▼";
    } else {
      // 열기
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "15px";
      content.style.paddingBottom = "15px";
      btn.textContent = "▲";
    }
  });
});
