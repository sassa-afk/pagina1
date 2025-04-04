document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".margin1");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elemento.classList.add("animar");
            }
        });
    });

    observer.observe(elemento);
});



document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".margin2");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elemento.classList.add("animar");
            }
        });
    });

    observer.observe(elemento);
});






function esconder(id) {
    var elemento = document.getElementById(id);
    
    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    
    var slideIndex = 1;
    var slides = document.getElementsByClassName("mySlides");

    if (slides.length > 0) {
        slides[0].style.display = "block";  
    }

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        if (slides.length === 0) return;  
        
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

     setInterval(function () {
        plusDivs(1);
    }, 25000);

    window.plusDivs = plusDivs; 

});
