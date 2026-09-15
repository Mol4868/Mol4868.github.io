const cat =
  document.querySelector("#cat");
const catchangebutton =
  document.querySelector("#CatChanger");
catchangebutton.addEventListener("click", () => {
  cat.src = "images/Maine_Coon_Cat.jpg";
});
