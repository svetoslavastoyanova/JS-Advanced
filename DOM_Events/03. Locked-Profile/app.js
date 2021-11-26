function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => button
        .addEventListener('click', onClick));

        function onClick(ev) {
            const moreInformation = ev.target.parentNode.getElementsByTagName('div')[0];
            const lockStatus = ev.target.parentNode.querySelector('input[type="radio"]:checked').value;
    
            if (lockStatus === 'unlock') {
                if (ev.target.textContent === 'Show more') {
                    moreInformation.style.display = 'inline-block';
                    ev.target.textContent = 'Hide it';
                } else if (ev.target.textContent === 'Hide it') {
                    moreInformation.style.display = 'none';
                    ev.target.textContent = 'Show more';
                }
            }
        }
    }