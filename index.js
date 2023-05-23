function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }



document.getElementById("embedded-game").setAttribute("height", screen.height - 150)
document.getElementById("embedded-game").setAttribute("width", screen.width - 10)