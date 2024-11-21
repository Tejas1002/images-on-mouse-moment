document.addEventListener("mousemove", function(details){
    document.querySelectorAll(".img").forEach((elem) => {
        const position = elem.getAttribute("value");
        const x =(window.innerWidth - details.clientX * position)/100;
        const y =(window.innerHeight - details.clientY * position)/100;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
})