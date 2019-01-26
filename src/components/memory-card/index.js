const createMemoryCard = (src,nameClass,alt) => {
  return `
    <article class="memory-card ${nameClass}">
            <img 
                src="${src}" 
                alt="${alt}"
                class="icon"
                onClick="hardleClick()"
                >
        </article> 
        `;
};

const hardleClick = () => console.log("AE");
