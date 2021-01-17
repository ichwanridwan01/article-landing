const share = document.getElementsByClassName("share-icon");

for (x = 0; x < share.length; x++) {
  share[x].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
