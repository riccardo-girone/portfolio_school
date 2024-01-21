const cursor = document.getElementById("cursor");

const animateCursor = (e) => {
  const x = e.clientX,
        y = e.clientY;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }

  cursor.animate([keyframes], { duration: 0, fill: "forwards" });
}

document.addEventListener("mousemove", animateCursor);