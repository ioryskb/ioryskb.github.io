    function onClickMenu(){
        document.getElementById("menu").classList.toggle("change");
        document.getElementById("sideNav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
    }


    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 1000,
        speedAsDuration: true,
    });