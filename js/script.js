const navbutton = document.getElementById("nav_btn");
const menu = document.getElementById("navmenu");

const input = document.getElementById("link-input");
const errMsg = document.getElementById("err-msg");
const linkForm = document.getElementById("link-form");

linkForm.addEventListener("submit", formSubmit);

navbutton.addEventListener("click", navToggle);
// Toggle Movile Menu
function navToggle() {
  navbutton.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

//Form submission functionality for the input url
function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please enter something.";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL.";
    input.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-red");
    alert("success");
  }
}
