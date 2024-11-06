// Получаем элементы
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main-content");
const musicButtonContainer = document.getElementById("music-button-container");
const musicButton = document.getElementById("music-button");
const musicIcon = document.getElementById("music-icon"); // Иконка музыки
const backgroundAudio = document.getElementById("background-audio");

// Переменная для отслеживания состояния музыки
let isPlaying = true;

// Обработчик для клика по оверлею
overlay.addEventListener("click", function() {
    // Скрыть оверлей
    overlay.style.display = "none";

    // Показать основной контент и кнопку музыки
    mainContent.style.display = "block";
    musicButtonContainer.style.display = "block";  // Показываем контейнер с кнопкой

    // Воспроизвести музыку, если она не проигрывается
    backgroundAudio.volume = 0.2;  // Устанавливаем громкость
    backgroundAudio.play();  // Запускаем музыку

    // Меняем иконку на иконку включенной музыки
    musicIcon.setAttribute("src", "img/volume.svg");
});

// Обработчик клика по кнопке музыки
musicButton.addEventListener("click", function() {
    if (isPlaying) {
        backgroundAudio.pause();  // Ставим музыку на паузу
        musicIcon.setAttribute("src", "img/volume_off.svg");  // Меняем иконку на "выключено"
    } else {
        backgroundAudio.play();  // Запускаем музыку
        musicIcon.setAttribute("src", "img/volume.svg");  // Меняем иконку на "включено"
    }

    // Меняем состояние на противоположное
    isPlaying = !isPlaying;
});