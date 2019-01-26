const createMemoryCard =  ()  => `
    <article class="memory-card"">
        <img 
            src="img/icon-collabcode.svg" 
            alt="Gueio - Mascote da CollabCode"
            class="icon"
             onClick="hardleClick()"
            >
    </article> `;



const createMemoryCardFront = () =>   `
    <article class="memory-card -front">
         <img 
            class="icon" 
            src="img/icon-js.png" 
            alt="Js"
            onClick="hardleClick()"
            >
    </article> `;
    


function hardleClick(){
  console.log('AE');
}
