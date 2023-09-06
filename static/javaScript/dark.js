// MODO OSCURO ACTIVO
document.addEventListener("DOMContentLoaded", function() {
    var darkActivado = localStorage.getItem("darkMode") === "activado";
    
    var itemBody = document.body;
    itemBody.classList.toggle("dark-body", darkActivado);

    var itemPerfil = document.getElementsByClassName("perfil-contenedor");
    for (var i = 0; i < itemPerfil.length; i++) {
        itemPerfil[i].classList.toggle("dark-perfil-contenedor", darkActivado);
        }

    var itemTop = document.getElementsByClassName("topline");
    for (var i = 0; i < itemTop.length; i++) {
        itemTop[i].classList.toggle("dark-topline", darkActivado);
        }

    /* Menu */
    var itemMenu = document.getElementsByClassName("menu-contenedor");
    for (var i = 0; i < itemMenu.length; i++) {
        itemMenu[i].classList.toggle("dark-menu-contenedor", darkActivado);
        }
    var itemBtnMenu = document.getElementsByClassName("btn-menu");
    for (var i = 0; i < itemBtnMenu.length; i++) {
        itemBtnMenu[i].classList.toggle("btn-dark-menu", darkActivado);
        }
    var itemActive = document.getElementsByClassName("active");
    for (var i = 0; i < itemActive.length; i++) {
        itemActive[i].classList.toggle("dark-active", darkActivado);
        }
    var itemBtnCuenta = document.getElementsByClassName("btn-cuenta");
    for (var i = 0; i < itemBtnCuenta.length; i++) {
        itemBtnCuenta[i].classList.toggle("btn-dark-cuenta", darkActivado);
        }
    var itemBtnDark = document.getElementsByClassName("btn-dark");
    for (var i = 0; i < itemBtnDark.length; i++) {
        itemBtnDark[i].classList.toggle("btn-dark-dark", darkActivado);
        }
    var itemBtnContent = document.getElementsByClassName("btn-content");
    for (var i = 0; i < itemBtnContent.length; i++) {
        itemBtnContent[i].classList.toggle("btn-dark-content", darkActivado);
        }
    /* Menu FIN */

    /* Buscador */
    var searchTerm = document.getElementsByClassName("searchTerm");
    for (var i = 0; i < searchTerm.length; i++) {
        searchTerm[i].classList.toggle("dark-searchTerm", darkActivado);
        }
    var searchButton = document.getElementsByClassName("searchButton");
    for (var i = 0; i < searchButton.length; i++) {
        searchButton[i].classList.toggle("dark-searchButton", darkActivado);
        }
    /* Buscardo FIN */

    /* Buscador perfil */
    var searchTermPerfil = document.getElementsByClassName("searchTerm-perfil");
    for (var i = 0; i < searchTermPerfil.length; i++) {
        searchTermPerfil[i].classList.toggle("dark-searchTerm-perfil", darkActivado);
        }
    var searchButtonPerfil = document.getElementsByClassName("searchButton-perfil");
    for (var i = 0; i < searchButtonPerfil.length; i++) {
        searchButtonPerfil[i].classList.toggle("dark-searchButton-perfil", darkActivado);
        }
    /* Buscardo perfil FIN */

    /* Filtro */
    var itemFiltro = document.getElementsByClassName("contenedor-filtro");
    for (var i = 0; i < itemFiltro.length; i++) {
        itemFiltro[i].classList.toggle("dark-contenedor-filtro", darkActivado);
        }
    /* Filtro Fin */

    /* Card */
    var itemCard = document.getElementsByClassName("card");
    for (var i = 0; i < itemCard.length; i++) {
        itemCard[i].classList.toggle("dark-card", darkActivado);
        }
    
    var itemCardTitle = document.getElementsByClassName("card-title");
    for (var i = 0; i < itemCardTitle.length; i++) {
        itemCardTitle[i].classList.toggle("dark-card-title", darkActivado);
        }
    /* Card FIN */

    /* Footer */
    var itemFooter = document.getElementsByClassName("footer");
    for (var i = 0; i < itemFooter.length; i++) {
        itemFooter[i].classList.toggle("dark-footer", darkActivado);
        }
    /* Footer FIN */

});


// MODO OSCURO INACTIVO
function dark() {

    var darkActivado = localStorage.getItem("darkMode") === "activado";

    var itemBody = document.body;
    itemBody.classList.toggle("dark-body", !darkActivado);

    var itemPerfil = document.getElementsByClassName("perfil-contenedor");
    for (var i = 0; i < itemPerfil.length; i++) {
        itemPerfil[i].classList.toggle("dark-perfil-contenedor", !darkActivado);
        }

    var itemTop = document.getElementsByClassName("topline");
    for (var i = 0; i < itemTop.length; i++) {
        itemTop[i].classList.toggle("dark-topline", !darkActivado);
        }

    /* Menu */
    var itemMenu = document.getElementsByClassName("menu-contenedor");
    for (var i = 0; i < itemMenu.length; i++) {
        itemMenu[i].classList.toggle("dark-menu-contenedor", !darkActivado);
        }
    var itemBtnMenu = document.getElementsByClassName("btn-menu");
    for (var i = 0; i < itemBtnMenu.length; i++) {
        itemBtnMenu[i].classList.toggle("btn-dark-menu", !darkActivado);
        }
    var itemActive = document.getElementsByClassName("active");
    for (var i = 0; i < itemActive.length; i++) {
        itemActive[i].classList.toggle("dark-active", !darkActivado);
        }
    var itemBtnCuenta = document.getElementsByClassName("btn-cuenta");
    for (var i = 0; i < itemBtnCuenta.length; i++) {
        itemBtnCuenta[i].classList.toggle("btn-dark-cuenta", !darkActivado);
        }
    var itemBtnDark = document.getElementsByClassName("btn-dark");
    for (var i = 0; i < itemBtnDark.length; i++) {
        itemBtnDark[i].classList.toggle("btn-dark-dark", !darkActivado);
        }
    var itemBtnContent = document.getElementsByClassName("btn-content");
    for (var i = 0; i < itemBtnContent.length; i++) {
        itemBtnContent[i].classList.toggle("btn-dark-content", !darkActivado);
        }
    /* Menu FIN */
    
    /* Buscador */
    var searchTerm = document.getElementsByClassName("searchTerm");
    for (var i = 0; i < searchTerm.length; i++) {
        searchTerm[i].classList.toggle("dark-searchTerm", !darkActivado);
        }
    var searchButton = document.getElementsByClassName("searchButton");
    for (var i = 0; i < searchButton.length; i++) {
        searchButton[i].classList.toggle("dark-searchButton", !darkActivado);
        }
    /* Buscardo FIN */

    /* Buscador perfil */
    var searchTermPerfil = document.getElementsByClassName("searchTerm-perfil");
    for (var i = 0; i < searchTermPerfil.length; i++) {
        searchTermPerfil[i].classList.toggle("dark-searchTerm-perfil", !darkActivado);
        }
    var searchButtonPerfil = document.getElementsByClassName("searchButton-perfil");
    for (var i = 0; i < searchButtonPerfil.length; i++) {
        searchButtonPerfil[i].classList.toggle("dark-searchButton-perfil", !darkActivado);
        }
    /* Buscardo perfil FIN */

    /* Filtro */
    var itemFiltro = document.getElementsByClassName("contenedor-filtro");
    for (var i = 0; i < itemFiltro.length; i++) {
        itemFiltro[i].classList.toggle("dark-contenedor-filtro", !darkActivado);
        }
    /* Filtro Fin */

    /* Card */
    var itemCard = document.getElementsByClassName("card");
    for (var i = 0; i < itemCard.length; i++) {
        itemCard[i].classList.toggle("dark-card", !darkActivado);
        }
    
    var itemCardTitle = document.getElementsByClassName("card-title");
    for (var i = 0; i < itemCardTitle.length; i++) {
        itemCardTitle[i].classList.toggle("dark-card-title", !darkActivado);
        }
    /* Card FIN */

    /* Footer */
    var itemFooter = document.getElementsByClassName("footer");
    for (var i = 0; i < itemFooter.length; i++) {
        itemFooter[i].classList.toggle("dark-footer", !darkActivado);
        }
    /* Footer FIN */

    localStorage.setItem("darkMode", darkActivado ? "desactivado" : "activado");
}

/* var itemUbicacion = document.getElementById("ubicacion");
    itemUbicacion.toggle("dark-id");

    var itemTalla = document.getElementById("talla");
    itemTalla.classList.toggle("dark-id");

    var itemCondicion = document.getElementById("condicion");
    itemCondicion.classList.toggle("dark-id"); */
   