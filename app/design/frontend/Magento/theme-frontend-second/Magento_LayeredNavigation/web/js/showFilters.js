define(() => (config) => {
    'use strict'
    
    const arrElements = config.filters;
    console.log(arrElements);

    for (let i = 0; i < arrElements.length; i++){
        const element = document.getElementsByClassName(arrElements[i])[0];
        console.log(element);
        if (element !== undefined){
            element.addEventListener("click", displayFilter);
        }
        
    }
    
    function displayFilter(){
        this.classList.toggle("filter-displayed");
    }
    
  });