{
  const biggerHeader = () => {
    const headerMain = document.querySelector(".js-header__main");
    const headerChangerBtn = document.querySelector(".headerChanger__btn");
    headerChangerBtn.addEventListener("click", () => {
      headerMain.classList.toggle("header__main--bigger");
      headerMain.classList.contains("header__main--bigger")
        ? (headerChangerBtn.innerText = "Mniejszy header")
        : (headerChangerBtn.innerText = "Większy header");
    });
  };
  biggerHeader();
}
