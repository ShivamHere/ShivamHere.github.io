// subHeading

var TxtRotate = function(ele, toRotate, period) {
    this.toRotate = toRotate;
    this.ele = ele;
    this.loopNum = 0;
    this.period = parseInt(period, 10);
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.ele.innerHTML = this.txt;
    var that = this;
    var delta = 250 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 3;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};

var element = document.getElementsByClassName('typewrite');
var toRotate = element[0].getAttribute('data-rotate');
var period = element[0].getAttribute('data-period');
if (toRotate) new TxtRotate(element[0], JSON.parse(toRotate), period);

// Navigation Bar

window.addEventListener("hashchange", function() {
    window.scrollTo(window.scrollX, window.scrollY - 50);
});

var navItems = document.querySelectorAll(".nav-link");
var navX = document.querySelector("nav div")
for(var i=0; i<navItems.length; i++){
    navItems[i].addEventListener("click", function(){
        navX.classList.remove("show");
    });
}

// Car

$car = $(".car");
$surface = $(".surface");
$carImg = $(".car img");
var i = 0;
$car.click(function() {
    switch (i) {
        case 0:                 //Will stop moving and suspension will also stop.
            $($surface).toggleClass("move");
            $($car).toggleClass("suspension");
            break;
        case 1:                 //Headlight will be turned off.
            $($carImg).attr("src", "img/Img_05.png");
            break;
        case 2:                 //Headlight will be turned on.
            $($carImg).attr("src", "img/Img_06.png");
            break;
        case 3:                 //Will start moving and suspension also start.
            $($surface).toggleClass("move");
            $($car).toggleClass("suspension");
            break;
    }
    i = (++i) % 4;
});

// Move to top

var toTop = document.querySelector(".up-icon");
toTop.addEventListener("click", function(){
    var scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, -90 );
        }
        else clearInterval(scrollInterval);
    },20);
});
