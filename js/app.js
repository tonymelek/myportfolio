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
const goPortfolio = document.querySelector('#go-portfolio')
if (elementInViewport(goPortfolio)) {
    $('#go-portfolio').addClass('animate__fadeInUp')
}