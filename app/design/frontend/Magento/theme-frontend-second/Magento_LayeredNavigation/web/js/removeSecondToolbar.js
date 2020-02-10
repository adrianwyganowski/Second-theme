// Magento after moving the toolbar plays it back to its old place so the directory page has 2 toolbars  
// More info https://alanstorm.com/why-you-cant-remove-the-productlisttoolbar/  


define(() => () => {
    'use strict'

    const secondToolbar = document.getElementsByClassName("toolbar-products")[1];
    secondToolbar.style.display="none";
    
  });