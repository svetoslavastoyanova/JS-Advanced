window.addEventListener('load', solve);

function solve() {
    let genreField = document.getElementById('genre');
    let songField = document.getElementById('name');
    let authorField = document.getElementById('author');
    let dateField = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    let totalLikes = 0;

    addBtn.addEventListener('click', onAdd);

    function onAdd(event){
        event.preventDefault();
        let genre = genreField.value;
        let song = songField.value;
        let author = authorField.value;
        let date = dateField.value;

        if (genre === '' || song === '' || author === '' || date === ''){
            return;
        }

        genreField.value = '';
        songField.value = '';
        authorField.value = '';
        dateField.value = '';

        let allHitsDiv = document.querySelector('.all-hits-container');
        let saveBtn  = e('button', { className: 'save-btn'}, 'Save song');
        let likeBtn = e('button', { className: 'like-btn'}, 'Like song');
        let deleteBtn = e('button', { className: 'delete-btn'}, 'Delete');

        let div = e('div', { className: 'hits-info'},
                    e('img', { src: './static/img/img.png'} ),
                    e('h2', {}, `Genre: ${genre}`),
                    e('h2', {}, `Name: ${song}`),
                    e('h2', {}, `Author: ${author}`),
                    e('h3', {}, `Date: ${date}`),
                    saveBtn,
                    likeBtn,
                    deleteBtn
            );
        allHitsDiv.appendChild(div);

        likeBtn.addEventListener('click', () => {
            totalLikes += 1;
            likeBtn.disabled = true;
            let likes = document.querySelector('.likes p');
            likes.textContent = `Total Likes: ${totalLikes}`


        })

        saveBtn.addEventListener('click', () => {
            let savedContainer = document.querySelector('.saved-container');
            savedContainer.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        })

        deleteBtn.addEventListener('click', () => {
            div.remove();
        })
    };

    function e(type, attributes, ...content) {
        const result = document.createElement(type);
    
        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }
    
        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
    
        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });
    
        return result;
    };
}