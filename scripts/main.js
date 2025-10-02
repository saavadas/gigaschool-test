document.querySelectorAll("button[data-album]").forEach((button) => {
  button.addEventListener("click", () => {
    const album = button.dataset.album;
    console.log(album);
    let details = document.getElementById(album + "Details");
    console.log(details);
    if (details.style.display === "inline") {
      details.style.display = "none";
      button.innerHTML = "Подробнее";
    } else {
      details.style.display = "inline";
      button.innerHTML = "Скрыть";
    }
    console.log(details);
  });
});
