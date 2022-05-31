window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let addBtn = document.getElementById('add');
    
    let total = 0;

    addBtn.addEventListener('click', onAdd);

    function onAdd(event){
        event.preventDefault();

        let model = modelInput.value;
        let year = yearInput.value;
        let description = descriptionInput.value;
        let price = priceInput.value;

        if (model === '' || description === '' ||
            Number.isNaN(Number(year)) || year < 1 ||
            Number.isNaN(Number(price)) || price < 1) {
            return;
        }

        price = Number(price)
        let tBody = document.getElementById('furniture-list');
        let moreLestBtn = e('button', { className: 'moreBtn' }, 'More Info');
        let buyBtn = e('button', { className: 'buyBtn' }, 'Buy it');

        let trInfo = e('tr', { className: 'info' },
                            e('td', {}, model),
                            e('td', {}, price.toFixed(2)),
                            e('td', {}, moreLestBtn, buyBtn));
        let trHideInfo = e('tr', { className: 'hide' },
                                e('td', {}, `Year: ${year}`),
                                e('td', { colSpan: '3' }, `Description: ${description}`));
        
        tBody.appendChild(trInfo);
        tBody.appendChild(trHideInfo);

        moreLestBtn.addEventListener('click', onShow);
        buyBtn.addEventListener('click', onBuy);



    function onShow(event){
        if (moreLestBtn.textContent == 'More Info'){
            moreLestBtn.textContent = 'Less Info';
            trHideInfo.style = 'display: contents';
        } else {
            moreLestBtn.textContent = 'More Info';
            trHideInfo.style = 'display: none';
        }
    };

    function onBuy(event){
        let totalTd = document.querySelector('.total-price');
        total += price;
        totalTd.textContent = total.toFixed(2);
        trInfo.remove();
        trHideInfo.remove();
    };

}


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
