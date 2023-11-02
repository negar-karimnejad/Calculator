var root = document.getElementsByTagName("html")[0]; // '0' to assign the first (and only `HTML` tag)
const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const theme3 = document.querySelector(".theme3");
const result = document.querySelector(".result");
const remove = document.querySelector(".remove");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const keyboard = document.querySelector(".keyboard");

theme1.addEventListener("click", () => {
  root.setAttribute("class", "dark-theme");
});
theme2.addEventListener("click", () => {
  root.setAttribute("class", "light-theme");
});
theme3.addEventListener("click", () => {
  root.setAttribute("class", "neon-theme");
});

keyboard.addEventListener("click", (e) => {
  result.textContent += e.target.id;
});

reset.addEventListener("click", () => {
  result.textContent = "";
});

remove.addEventListener("click", () => {
  let newResult = result.textContent.slice(0, -1);
  result.textContent = newResult;
});

equal.addEventListener("click", () => {
  if (result.textContent.includes(".")) {
    result.textContent = eval(result.textContent).toFixed(3);
  } else {
    result.textContent = eval(result.textContent);
  }
});
