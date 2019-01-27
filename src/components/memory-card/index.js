
const $heade = document.querySelector('head');
const $style= document.createElement('style');
 
$style.textContent = `
.memory-card {
  width: 155px;
  height: 155px;
  background-color: #f25a70;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;
  cursor: pointer;
}

.memory-card > .icon {
  width: 100px;
  height: 100px;
}

.memory-card.-front {
  width: 155px;
  height: 155px;
  background: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  position: relative;
}

.memory-card.-front::before {
  width: 97px;
  height: 94px;
  background-color: #d4d4d4;
  border-radius: 50%;
  content: "";
  position: absolute;
}

.memory-card.-front .icon {
  width: 100px;
  height: 100px;
  position: absolute;
  transform: translateY(-10px);
}



`;

$heade.insertBefore($style,null);




const createMemoryCard =  ({src, alt, nameClass})  => `
    <article class="memory-card ${nameClass}">
            <img 
                src="${src}" 
                alt="${alt}"
                class="icon"
                onClick="hardleClick()"
                >
        </article> 
      `;



const hardleClick = () => console.log("AE");
