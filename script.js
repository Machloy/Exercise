{
  const headerChangerBtn = document.querySelector(".headerChanger__btn");

  const resizeHeader = () => {
    const headerMain = document.querySelector(".js-header__main");

    headerMain.classList.toggle("header__main--bigger");
    headerChangerBtn.innerText = headerMain.classList.contains(
      "header__main--bigger"
    )
      ? "Mniejszy nagłówek"
      : "Większy nagłówek";
  };

  const init = () => {
    headerChangerBtn.addEventListener("click", resizeHeader);
  };

  init();
}
