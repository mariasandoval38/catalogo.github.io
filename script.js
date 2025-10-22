const bolsas = [
    {
        imagen: 'Channel.jpeg',
        titulo: 'Chanel Clasico-Black',
        descripcion: 'Bolso Clasico large con piel de ternera granulada y metal dorado',
        precio: '$255,480 MXN',
        link: 'https://www.chanel.com'
    },
    {
        imagen: 'Coach.jpeg',
        titulo: 'COACH Mini Klare Crossbody-Black',
        descripcion: 'COACH mini color negro con correa de cadena y una gran cantidad de bolsillos multifuncionales',
        precio: '$4,980 MXN',
        link: 'https://www.coach.com'
    },
    {
        imagen: 'Katespade.jpeg',
        titulo: 'Kate Spade New York-Black',
        descripcion: 'Kate Spade New York Carson Bolso Bandolera Negro Forro Saffiano',
        precio: '$2,553 MXN',
        link: 'https://www.katespade.com'
    },
    {
        imagen: 'Dior.jpeg',
        titulo: 'Dior Saddle con bandolera',
        descripcion: 'Bolso negro de piel de becerro graneada negra e incluye una solapa Saddle con un cierre en D y CD de metal dorado envejecido a ambos lados del asa superior.',
        precio: '$53.581,42 MXN ',
        link: 'https://www.dior.com'
    }
];

function crearCatalogo() {
    const catalogo = document.getElementById('catalogo');

    bolsas.forEach(bs => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${bs.imagen}" alt="${bs.titulo}">
            <h2>${bs.titulo}</h2>
            <p>${bs.descripcion}</p>
            <p class="price">${bs.precio}</p>
            <a href="${bs.link}" target="_blank">
                <button>Comprar</button>
            </a>
        `;

        catalogo.appendChild(card);
    });
}

// Llamar a la función para crear el catálogo
crearCatalogo();
