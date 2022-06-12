const input = document.getElementById("input");
const err = document.getElementById("error");
const btn = document.querySelector(".btn");
const errMsg = document.getElementById("err-msg");
const successMsg = document.getElementById("success-msg");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", () => {
  if (input.value.match(mailformat)) {
    successMsg.style.visibility = "visible";
  } else {
    err.style.visibility = "visible";
    errMsg.style.visibility = "visible";
    input.style.border = "1px solid red";
  }
});
