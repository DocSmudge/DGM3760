function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerButton").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton");

x.onclick = toggleMenu;

var test = document.querySelectorAll("ul#primaryNav li a");
console.log(test);

var truck = "book.html";

var i;
for (i = 0; i < test.length; i++) {
  var myPage = test[i].getAttribute("href");
  console.log(myPage);

  if (truck === myPage) {
    test[i].parentNode.className = "active";
    test[i].parentNode.parentNode.parentNode.className = "parent";
  } else {
    test[i].parentNode.className = "";
  }
} // end of loop
