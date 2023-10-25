const btnEl = document.querySelector("#btn");

btnEl.addEventListener("mousemove", (e) => {
  let x = (e.pageX - btnEl.offsetTop);
  let y = (e.pageY - btnEl.offsetLeft);

  btnEl.style.setProperty("--Xposition", x + "px");
  btnEl.style.setProperty("--Yposition", y + "px");
})