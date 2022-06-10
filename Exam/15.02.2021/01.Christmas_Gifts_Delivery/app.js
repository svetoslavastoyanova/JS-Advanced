function solution() {
    let addButton = document.querySelector('.container .card button');
    addButton.addEventListener('click', onAddGift)

    let giftInput = document.querySelector('.container .card input[type="text"]');
    let [giftsUl, sentGifts, discardedGifts] = document.querySelectorAll('.container .card ul');


    function onAddGift(event){
        let liGift = document.createElement('li');
        liGift.classList.add('gift');
        liGift.textContent = giftInput.value;

        let sendButton = document.createElement('button');
        sendButton.classList.add('sendButton');
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', onSend);

        let discardButton = document.createElement('button');
        discardButton.classList.add('discardButton');
        discardButton.textContent = 'Discard';
        discardButton.addEventListener('click', onDiscard);

        liGift.appendChild(sendButton);
        liGift.appendChild(discardButton);

        let giftsList = Array.from(giftsUl.children);
        giftsList.push(liGift);
        giftsList
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => giftsUl.appendChild(li));

        giftInput.value = '';
    };

    function onSend(e){
        const sendLiElement = e.target.parentElement;
        sendLiElement.removeChild(sendLiElement.lastChild);
        sendLiElement.removeChild(sendLiElement.lastChild);
        sentGifts.appendChild(sendLiElement);
    };

    function onDiscard(e){
        const discardedElement = e.target.parentElement;
        discardedElement.removeChild(discardedElement.lastChild);
        discardedElement.removeChild(discardedElement.lastChild);
        discardedGifts.appendChild(discardedElement);
    };

}