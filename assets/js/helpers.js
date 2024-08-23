export function setupFlashNotice() {
  const flashNotice = document.getElementById("flash-notice");
  const buttons = document.querySelectorAll(".boton");
  const displayArea = document.getElementById("displayArea");
  if (flashNotice && buttons?.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("clicked");
        flashNotice.classList.add("flash-notice__flash");
        setTimeout(() => {
          flashNotice.classList.remove("flash-notice__flash");
        }, 2000);
      });
    });
  }
  flashNotice.addEventListener("click", () => {
    displayArea.scrollIntoView({ behavior: "smooth" });
  });
}
