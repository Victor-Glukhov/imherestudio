console.log('File main.js ready!')

// Модальное окно - Меню - Показать/Скрыть
document.addEventListener("DOMContentLoaded", function() {
    let btnHeaderMenu = document.getElementById("header__btn-menu");
    let modalMenu = document.getElementById("general__modal-menu");
    let btnCloseModalMenu = document.getElementById("menu__modal-btn-close");
    // Кнопка Вход В Модальном Меню
    let btnEnter = document.getElementById("general__modal-btn-login"); 
    // Модальное - Авторизация
    let modalAuthorization = document.getElementById("general__modal-authorization"); 
    let btnCloseModalAuthorization = document.getElementById("general__btn-authorization-close");
    let btnLinkGetRegistration = document.getElementById("authorization__link-get-registration"); 
    // Модальное - Регистрация
    let modalRegistration = document.getElementById("general__modal-registration");
    let btnCloseModalRegistration = document.getElementById("general__btn-registration-close");
    // Модальное - Сотрудничество 
    let btnGetCooperation = document.getElementById("cooperation__btn-get-cooperation"); 
    let modalCooperation = document.getElementById("cooperation__modal");
    // Модальное - Сотрудничество - отправить заявку
    let btnCooperationFormSubmit = document.getElementById("cooperation__form-bid-btn-submit");
    let btnCloseModalCooperation = document.getElementById("cooperation__modal-btn-close");
    // Модальное - Сотрудничество - заявка успешно отправлена
    let modalCooperationInfo = document.getElementById("cooperation__modal-info");
    let btnCloseModalCooperationInfo = document.getElementById("cooperation__modal-btn-info-close");

    // Обработка событий
    // Нажатие на Меню и открытие Модального меню
    btnHeaderMenu.addEventListener("click", function() {
        modalMenu.classList.toggle("hidden");       
    });
    btnCloseModalMenu.addEventListener("click", function() {
        modalMenu.classList.toggle("hidden");       
    });
    // Нажатие на Войти в Модальном меню
    btnEnter.addEventListener("click", function() {
        modalMenu.classList.toggle("hidden");  
        modalAuthorization.classList.toggle("hidden");
    });
    // Нажатие на Закрыть в окне Авторизвции
    btnCloseModalAuthorization.addEventListener("click", function() {
        modalAuthorization.classList.toggle("hidden");
    });
    // Нажатие на Нет аккаунта? в окне Авторизвции
    btnLinkGetRegistration.addEventListener("click", function() {
        modalAuthorization.classList.toggle("hidden");
        modalRegistration.classList.toggle("hidden");
    });
    // Нажатие на Закрыть в окне Регистрация
    btnCloseModalRegistration.addEventListener("click", function() {
        modalRegistration.classList.toggle("hidden");
    });
    
    // Раздел Сотрудничество - Нажатие на - Оставить заявку
    btnGetCooperation.addEventListener("click", function() {
        modalCooperation.classList.toggle("hidden");
    });
    // Модальное - Сотрудничество отправить заполненную заявку
    btnCooperationFormSubmit.addEventListener("click", function(e) {
        e.preventDefault();
        modalCooperation.classList.toggle("hidden");
        modalCooperationInfo.classList.toggle("hidden");
    });
    // Модальное - Сотрудничество - закрыть окно
    btnCloseModalCooperation.addEventListener("click", function(e) {
        modalCooperation.classList.toggle("hidden");
    });
    // Модальное - Сотрудничество - Инфо(Заявка успешно отправлена)
    btnCloseModalCooperationInfo.addEventListener("click", function(e) {
        modalCooperationInfo.classList.toggle("hidden");
    });
});

