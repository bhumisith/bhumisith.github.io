function loadImage(id, targetId) {
  var el = document.getElementById(id);
  var tragetEl = targetId ? document.getElementById(targetId) : el;
  var imageToLoad;

  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function () {
      tragetEl.classList.add("is-loaded");
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");
});
