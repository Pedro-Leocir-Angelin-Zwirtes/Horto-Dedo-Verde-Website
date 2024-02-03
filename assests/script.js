function menuShow() {

    console.log("teste");

    let menuMobile = document.querySelector('.nav-container-navbar');
    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.remove('show');
    } else {
        menuMobile.classList.add('show');
    }
}