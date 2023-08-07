const containerElement = document.querySelector(".container");

window.addEventListener("mouseover", (e) => {
  // console.log(e); // to see the event object in the console

  containerElement.innerHTML = `
    <div class="mouse-event">
        ${e.clientX}
        <h4>Mouse X Position (px)</h4>
    </div>
    <div class="mouse-event">
        ${e.clientY}
        <h4>Mouse Y Position (px)</h4>
    </div>
    `;
});
