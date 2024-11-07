// script.js

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h2, h3");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const nextElement = header.nextElementSibling;
            if (nextElement) {
                nextElement.style.display = nextElement.style.display === "none" ? "block" : "none";
            }
        });
    });
});
