document.getElementById('image').addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play();
});

const box = document.getElementById("enlargeBox");

box.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
  this.style.transition = 'transform 0.4s ease';
});

box.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
  this.style.transition = 'transform 1s ease';
});