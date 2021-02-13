const cards = document.querySelectorAll('.card');
const onCardClick = async (e) => {
    const card = e.curentTarget;
    const cardClone =  card.cloneNode(true);
    const {top, left, width, height} = card.getBoundingClientRect();
    cardClone.style.position = 'fixed';
    cardClone.style.top = top + 'px';
    cardClone.style.left = left + 'px';
    cardClone.style.width = width + 'px';
    cardClone.style.height = height + 'px';

    card.style.opacity = 0;
    card.parentNode.appendChild(cardClone);
    requestAnimationFrame(() => {
        Element.style.transition = 'width 350ms ease-in-out,height 350ms ease-in-out,left 350ms ease-in-out,top 350ms ease-in-out';
        Element.style.top  = 0;
        Element.tyle.left = 0;
        Element.style.width = '100vw';
        Element.style.height = '100vh';

    

    });

};
cards.forEach(card => card.addEventListener('click',onCardClick));
!
