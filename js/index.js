// Header Link
$(document).ready(function () {
    $('.header__bottom a').each(function () {
        if (this.href == location.href) $(this).addClass('active');
    });
});

// Create Header
var headerText =
    ` <div class="header__top">
            <div class="container">
                <div class="header__body">
                    <div class="header__logo">
                        <a href="./index.html">
                            <img src="./img/logo.png" alt="logo">
                        </a>
                    </div>
                    <div class="header__contact">
                        <ul>
                            <li>
                                <i class="fas fa-phone"></i>
                                <a href="tel:+38067363 2002">+380 (67) 363 2002</a>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:rivne-baza@ukr.net">rivne-baza@ukr.net</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <div class="header__body">
                    <div class="header__burger">
                        <span></span>
                    </div>
                    <nav class="header__menu">
                        <ul class="header__list">
                            <li><a href="./index.html">Головна</a></li>
                            <li><a href="./about.html">Про нас</a></li>
                            <li><a href="./location.html">Як нас знайти</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="header__burger__menu">
            <div class="container">
                <ul class="header__burger__list">
                    <li><span>Каталог</span></li>
                <!--<li><a href="">Bosch</a></li>
                    <li><a href="">DeWalt</a></li>
                    <li><a href="">Makita</a></li>
                    <li><a href="">Metabo</a></li>
                    <li><a href="">Stanley</a></li>-->
                    <li><a href="./stihl.html">Stihl</a></li>
                <!--<li><a href="">Titan</a></li>-->
                </ul>
            </div>
        </div>`;

function setHeader() {
    var header = document.createElement("header");
    header.innerHTML = headerText;
    var body = document.querySelector('body')
    body.insertAdjacentElement('afterbegin', header);
}
setHeader();

// Create Footer
var footerText =
    `<div class="footer__top">
    <!-- Section-partner -->
    <section class="section__partner">
        <div class="container">
            <div class="partner-carousel-wrap">
                <div class="partner-carousel owl-carousel">
                    <div class="single-partner">
                        <img src="./img/brand/makita.png" alt="makita">
                    </div>
                    <div class="single-partner">
                        <img src="./img/brand/metabo.png" alt="metabo">
                    </div>
                    <div class="single-partner">
                        <img src="./img/brand/dewalt.png" alt="dewalt">
                    </div>
                    <div class="single-partner">
                        <img src="./img/brand/stihl.png" alt="stihl">
                    </div>
                    <div class="single-partner">
                        <img src="./img/brand/bosch.png" alt="bosch">
                    </div>
                    <div class="single-partner">
                        <img src="./img/brand/stanley.png" alt="stanley">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End Section-partner -->

    <section class="info">
        <div class="container">
            <div class="wrapper__info">
                <ul class="shop">
                    <li>© 2019-2021 Магазин "База інструментів"</li>
                </ul>
                <ul class="social">
                    <li><span>Ми в соціальних мережах : </span></li>
                    <li>
                        <a href="https://www.instagram.com/baza_instrumentiv/">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100046299372452">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

</div>`;

function setFooter() {
    var footer = document.createElement("footer");
    footer.innerHTML = footerText;
    var main = document.querySelector('main')    
    main.insertAdjacentElement('afterend', footer);
}
setFooter();




// Burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger__menu,.header__burger').toggleClass('active');
    });
});


// Header Burger List
let li_header = document.querySelectorAll(".header__burger__list li");
let a_header = document.querySelectorAll(".header__burger__list li a");
for (let i = 1; i < li_header.length; i++) {
    li_header[i].addEventListener('mouseenter', function () {
        li_header[i].classList.add("hover")
        a_header[i - 1].classList.add("hover")
    })
};
for (let i = 1; i < li_header.length; i++) {
    li_header[i].addEventListener('mouseleave', function () {
        li_header[i].classList.remove("hover")
        a_header[i - 1].classList.remove("hover")
    })
};


//  Partner-carousel
$(".partner-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 5,
        },
    },
});

//  Main-slide-carousel
$(".section-slide-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
    },
});


