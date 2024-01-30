document.addEventListener('DOMContentLoaded', function () {
    // Masquez toutes les lunes sauf une au chargement initial
    var lunes = document.querySelectorAll('[class^="lune"]');
    var initialIndex = Math.floor(Math.random() * lunes.length);

    lunes.forEach(function (lune, index) {
        if (index === initialIndex) {
            lune.style.display = 'block';
        } else {
            lune.style.display = 'none';
        }
    });

    document.addEventListener('visibilitychange', function () {
        if (!document.hidden) {
            // L'utilisateur est revenu sur l'onglet, changez la lune de manière aléatoire
            var randomIndex = Math.floor(Math.random() * lunes.length);

            lunes.forEach(function (lune, index) {
                if (index === randomIndex) {
                    lune.style.display = 'block';
                } else {
                    lune.style.display = 'none';
                }
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.grid');
    
    // Ajoutez un événement pour suivre la position de la souris
    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Ajustez ces valeurs pour définir la taille de la grille
        const gridSize = 40;
        const gridOffset = gridSize / 2;

        // Affichez la grille et ajustez sa position
        grid.style.display = 'block';
        grid.style.transform = `translate(${Math.floor(mouseX / gridSize) * gridSize - gridOffset}px, ${Math.floor(mouseY / gridSize) * gridSize - gridOffset}px)`;
    });

    // Ajoutez un événement pour cacher la grille lorsque la souris quitte la fenêtre
    document.addEventListener('mouseout', function () {
        grid.style.display = 'none';
    });
});

