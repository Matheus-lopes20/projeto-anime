const themes = [
    {
        background: 'https://example.com/anime-background.jpg',
        cards: [
            { img: 'https://example.com/naruto.jpg', title: 'Naruto', desc: 'Uma jornada ninja cheia de aventuras e desafios.' },
            { img: 'https://example.com/one-piece.jpg', title: 'One Piece', desc: 'Em busca do maior tesouro, o One Piece!' },
            { img: 'https://example.com/attack-on-titan.jpg', title: 'Attack on Titan', desc: 'Humanidade lutando contra titãs gigantes.' }
        ]
    },
    {
        background: 'https://example.com/another-anime-background.jpg',
        cards: [
            { img: 'https://example.com/dragon-ball.jpg', title: 'Dragon Ball', desc: 'A busca pelas esferas do dragão.' },
            { img: 'https://example.com/bleach.jpg', title: 'Bleach', desc: 'A história de um shinigami substituto.' },
            { img: 'https://example.com/demon-slayer.jpg', title: 'Demon Slayer', desc: 'Caçadores de demônios em ação.' }
        ]
    }
];

let currentThemeIndex = 0;

document.getElementById('change-theme').addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];

    // Alterar o fundo
    document.body.style.backgroundImage = `url('${theme.background}')`;

    // Alterar os cards
    const animeContainer = document.getElementById('anime-container');
    animeContainer.innerHTML = '';
    theme.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'anime-card';
        cardElement.innerHTML = `
            <img src="${card.img}" alt="${card.title}">
            <h2>${card.title}</h2>
            <p>${card.desc}</p>
        `;
        animeContainer.appendChild(cardElement);
    });
});