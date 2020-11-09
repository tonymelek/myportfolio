$('#helping-menu').click(() => {
    $('#main-menu').toggleClass('d-none')
})
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}


$(document).scroll(() => {
    if ($('#go-portfolio')[0]) {
        if (elementInViewport($('#go-portfolio')[0])) {
            $('#go-portfolio').addClass('animate__fadeInUp')
        }
    }
    if ($('.social')) {
        for (item of $('.social')) {
            if (elementInViewport(item)) {
                $('.social').addClass('animate__zoomIn')
            }
        }
    }
})
