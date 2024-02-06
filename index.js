const boxes = document.querySelectorAll(".box");
boxes.forEach((box) =>
  box.addEventListener("click", () => console.log(box.id), { once: true })
);
