define(() => (config, element) => {
    "use strict";

    element.addEventListener("click", displayFilter);

    function displayFilter() {
        this.classList.toggle("filters-displayed");
    }
});
