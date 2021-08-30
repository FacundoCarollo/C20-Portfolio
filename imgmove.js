const card = document.querySelector('.aux');

card.addEventListener('mousemove', (event) => {
    let xAxis = (event.pageX - window.innerWidth / 2) / 100; //Con este ultimo digito (75) y el de abajo, se determina la bruzco del movimiento, mientras mas alto es el numero, mas impercepcitble es.
    let yAxis = (window.innerHeight / 2 - event.pageY) / 100;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener('mouseout', () => {
    card.style.transition = 'all 0.9s ease'; //el tiempo mide que tan repentina es la vuelta de la imagen a su posicion orignal, cuando sacamos el cursor.
    setTimeout(function (e) {
        card.style.transition = 'none';
    }, 400);
    addTranslateZToElements([card]);
});

function addTranslateZToElements(elements) {
    elements.forEach(
        (element) => (element.style.transform = 'translateZ(150px)')
    );
}

