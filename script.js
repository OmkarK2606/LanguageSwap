const header = document.getElementById('header');
const description = document.getElementById('description');
const languageBtn = document.getElementById('languageBtn');

let languageIndex = 0;
const languages = [
    {
        name: 'English',
        header: 'Hello, World!',
        description: 'Welcome to our website.',
        buttonText: 'Switch to Spanish',
    },
    {
        name: 'Spanish',
        header: '¡Hola, Mundo!',
        description: 'Bienvenido a nuestro sitio web.',
        buttonText: 'Switch to Hindi',
    },
    {
        name: 'Hindi',
        header: 'नमस्ते, दुनिया!',
        description: 'हमारी वेबसाइट पर आपका स्वागत है।',
        buttonText: 'Switch to English',
    },
    {
        name: 'German',
        header: 'Hallo, Welt!',
        description: 'Willkommen auf unserer Webseite.',
        buttonText: 'Switch to English',
    },
];

languageBtn.addEventListener('click', () => {
    languageIndex = (languageIndex + 1) % languages.length;
    const currentLanguage = languages[languageIndex];
    
    header.textContent = currentLanguage.header;
    description.textContent = currentLanguage.description;
    languageBtn.textContent = currentLanguage.buttonText;
});
