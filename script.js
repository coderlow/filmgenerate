// Пример списка фильмов
const movies = [
    "Начало", "Интерстеллар", "Матрица", "Титаник", "Назад в будущее", 
    "Аватар", "Темный рыцарь", "Криминальное чтиво", "Гарри Поттер"
];

const moods = {
    "Веселый": ["Суперсемейка", "Мачо и ботан", "Один дома"],
    "Грустный": ["Спасти рядового Райана", "Титаник", "Зеленая миля"],
    "Напряженный": ["Начало", "Матрица", "Темный рыцарь"]
};

const genres = {
    "Комедия": ["Один дома", "Маска", "Мачо и ботан"],
    "Драма": ["Титаник", "Зеленая миля", "Форрест Гамп"],
    "Фантастика": ["Интерстеллар", "Матрица", "Аватар"]
};

// Функция генерации случайного фильма
function generateRandomMovie() {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    displayResult(randomMovie);
}

// Функция для отображения опций настроения
function toggleMoodOptions() {
    const moodOptions = document.getElementById("mood-options");
    moodOptions.style.display = moodOptions.style.display === "flex" ? "none" : "flex";
}

// Функция для выбора настроения
function selectMood(mood) {
    const randomMovie = moods[mood][Math.floor(Math.random() * moods[mood].length)];
    displayResult(randomMovie);
    document.getElementById("mood-options").style.display = "none"; // Скрыть опции после выбора
}

// Функция для отображения опций жанра
function toggleGenreOptions() {
    const genreOptions = document.getElementById("genre-options");
    genreOptions.style.display = genreOptions.style.display === "flex" ? "none" : "flex";
}

// Функция для выбора жанра
function selectGenre(genre) {
    const randomMovie = genres[genre][Math.floor(Math.random() * genres[genre].length)];
    displayResult(randomMovie);
    document.getElementById("genre-options").style.display = "none"; // Скрыть опции после выбора
}

// Функция отображения результата
function displayResult(movie) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Вам стоит посмотреть: ${movie}`;
}

