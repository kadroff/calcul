function c(val) {
  document.getElementById("d").value = val;
}

function math(val) {
  document.getElementById("d").value += val;
}

function e() {
  try {
    c(eval(document.getElementById("d").value));
  } catch(e) {
    c("error");
  }
}

function procent() {
  var result = document.getElementById("d").value / 100;
  document.getElementById("d").value = result
}

function minus() {
  var result = - document.getElementById("d").value;
  document.getElementById("d").value = result
}