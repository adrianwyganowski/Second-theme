define(() => (config, element) => {
    "use strict";

    const htmlTarget = document.getElementsByClassName(config.target)[0];
    const innerHtml = element.innerHTML;
    const innerHtmlTrimed = innerHtml.trim
        ? innerHtml.trim()
        : innerHtml.replace(/^\s+/, "");

    if (innerHtmlTrimed == "") {
        htmlTarget.style.display = "none";
    }
});
