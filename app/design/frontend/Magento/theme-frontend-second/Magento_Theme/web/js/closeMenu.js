define(() => (config, element) => {
    "use strict";

    document.addEventListener("click", test);
    function test(event) {
        const htmlCheck = document.getElementsByClassName("menuDisplayed")[0];
        if (htmlCheck) {
            if (!event.target.closest(".header-icons-container")) {
                if (!event.target.closest(".menuDisplayed")) {
                    htmlCheck.classList.remove("menuDisplayed");
                }
            }
        }
    }
});
