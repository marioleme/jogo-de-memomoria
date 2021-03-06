const MemoryCard = () => {
  const $heade = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
      .memory-card {
        width: 155px;
        height: 155px;
        position: relative;
      }
  
      .memory-card .card {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #f25a70;
        position: relative;
        margin-bottom: 15px;
        cursor: pointer;
        position: absolute;
      }
      .memory-card.-active .card {
        display: none;
      }
      .memory-card.-active .card.-front {
        display: flex;
      }
      
     .memory-card .card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
      }
      
     .memory-card .card > .icon {
        width: 100px;
        height: 100px;
      }
     .memory-card .card.-front {
        background-color: #fff;
      }
        
     .memory-card .card.-front > .icon {
        position: absolute;
        transform: translateY(-12px);
      }
    `;

  $heade.insertBefore($style, null);

  return ({ src, alt, nameClass }) => `
  <div class="memory-card" onClick="hardleClick(this)">
    <article class="card -front">
            <img 
                src="${src}" 
                alt="${alt}"
                class="icon"
                >
        </article> 
          <article class="card">
            <img 
                src="img/icon-collabcode.svg" 
                alt="COllabCOde"
                class="icon"
                >
        </article> 
        </div>
      `;
};

const hardleClick = $component => {
  const $cardActive = document.querySelectorAll(".memory-card.-active .card.-front");
  let count = $cardActive.length;
  if (count <= 1) {
    $component.classList.toggle("-active");
    count += 1;
  
  }
  setTimeout(function(){
    $component.classList.remove("-active");
  },3000)
  
  }