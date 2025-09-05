// 뒤로가기/앞으로가기 시 새로고침
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    location.reload();
  }
});


// 클릭 시 이동 + 페이지 전환
document.querySelectorAll(".image-container").forEach(container => {
  const imgA = container.querySelector(".image-a");
  const link = container.getAttribute("data-link");

  imgA.addEventListener("click", () => {
    imgA.classList.add("move"); // 오른쪽 이동
    setTimeout(() => {
      window.location.href = link;
    }, 1000); // CSS transition과 동일
  });
});
