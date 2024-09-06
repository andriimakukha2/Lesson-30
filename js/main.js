function isValidEmail(email) {
    // Регулярний вираз для перевірки валідності електронної адреси
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Перевірка рядка на відповідність регулярному виразу
    return emailPattern.test(email);
}

// #2

function isValidUrl(url) {
    // Регулярний вираз для перевірки валідності URL
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;

    // Перевірка рядка на відповідність регулярному виразу
    return urlPattern.test(url);
}

export { isValidEmail, isValidUrl }
