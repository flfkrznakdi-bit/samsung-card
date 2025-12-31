
var swiper1 = new Swiper(".daye", {
    cssMode:true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: true,
    loop: true,
});

var swiper2 = new Swiper(".daye1", {
    slidesPerView: 7,
    slidesPerGroup:7,
    spaceBetween: 16,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swnext",
        prevEl: ".swprev",
    },
});

var swiper3 = new Swiper(".daye0", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 300)
    })

    $('.stop').click(function () {
        $('.stop').toggleClass('start')
        if ($(this).hasClass('start') == true) {
            swiper1.autoplay.stop()
        } else {
            swiper1.autoplay.start()
        }
    })
})
