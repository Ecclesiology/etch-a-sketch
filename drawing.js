const gridContainer = document.querySelector(".gridContainer")


  for(x=0; x<256; x++) {
      const block = document.createElement("div");
        block.classList.add("blocks");
        gridContainer.appendChild(block);
  }
  
