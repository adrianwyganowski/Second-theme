define(() => (config, element) => {
    "use strict";
    element.addEventListener("click", displayMenuElement);

    function displayMenuElement() {
        const htmlTarget = document.getElementsByClassName(config.target)[0];
        const htmlCheck = document.getElementsByClassName("menuDisplayed")[0];

        if (!htmlCheck) {
            htmlTarget.classList.toggle("menuDisplayed");
        } else if (htmlTarget === htmlCheck) {
            htmlTarget.classList.toggle("menuDisplayed");
        } else if (htmlTarget !== htmlCheck) {
            htmlCheck.classList.toggle("menuDisplayed");
            htmlTarget.classList.toggle("menuDisplayed");
        }
    }
});
