const cursor = document.getElementById("cursor");

const updateCursorPosition = (left, top) => {
  cursor.style.left = left + "px";
  cursor.style.top = top + "px";
};

document.body.addEventListener("mousemove", (e) => {
    console.log(e)
  const left = e.pageX;
  const top = e.pageY;
  updateCursorPosition(left, top);
});
