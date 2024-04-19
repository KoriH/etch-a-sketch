window.onload = function() {
    // Get modal elements
    let modal = document.getElementById("colorModal");
    let closeButton = document.getElementById("closeButton");
    let setColorButton = document.getElementById("setColorButton");
  
    // Get color picker element
    let colorPicker = document.getElementById("colorPicker");
  
    // Display modal on button click
    document.getElementById("colorButton").addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    // Close modal when close button is clicked
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  
    // Initialize RGB color picker
    for (let i = 0; i < 256; i += 32) {
      for (let j = 0; j < 256; j += 32) {
        for (let k = 0; k < 256; k += 32) {
          let colorSquare = document.createElement("div");
          colorSquare.classList.add("colorSquare");
          colorSquare.style.backgroundColor = `rgb(${i}, ${j}, ${k})`;
          colorSquare.addEventListener("click", function() {
            selectedColor = `rgb(${i}, ${j}, ${k})`;
            setColorButton.style.backgroundColor = selectedColor;
          });
          colorPicker.appendChild(colorSquare);
        }
      }
    }
  
    // Set color and close modal when "Set Color" button is clicked
    setColorButton.addEventListener("click", function() {
      let colorButton = document.getElementById("colorButton");
      colorButton.style.backgroundColor = selectedColor;
      modal.style.display = "none";
    });
  };
  