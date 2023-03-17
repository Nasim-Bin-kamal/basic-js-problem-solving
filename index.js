function rotate360() {
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById("btn" + i).innerText == 1) {
      document.getElementById("btn" + i).innerText == 4;
    }
    if (document.getElementById("btn" + i).innerText == 4) {
      document.getElementById("btn" + i).innerText == 7;
    }
    if (document.getElementById("btn" + i).innerText == 7) {
      document.getElementById("btn" + i).innerText == 8;
    }
    if (document.getElementById("btn" + i).innerText == 8) {
      document.getElementById("btn" + i).innerText == 9;
    }
    if (document.getElementById("btn" + i).innerText == 9) {
      document.getElementById("btn" + i).innerText == 6;
    }
    if (document.getElementById("btn" + i).innerText == 6) {
      document.getElementById("btn" + i).innerText == 3;
    }
    if (document.getElementById("btn" + i).innerText == 3) {
      document.getElementById("btn" + i).innerText == 2;
    }
    if (document.getElementById("btn" + i).innerText == 2) {
      document.getElementById("btn" + i).innerText == 1;
    }
  }
}
