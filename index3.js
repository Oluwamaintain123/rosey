const accordion = document.getElementsByClassName("core");

    for(let i = 0; i < body1.length; i++) {
        accordion[i].addEventListener("click", function(){
            this.classList.toggle("active");
        })
    }