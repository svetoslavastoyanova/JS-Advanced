window.addEventListener('load', solve);

function solve() {
    let productInput = document.getElementById('type-product')
    let descriptionInput = document.getElementById('description');
    let nameInput = document.getElementById('client-name');
    let phoneInput = document.getElementById('client-phone');

    let btnSubmit = document.querySelector('button[type="submit"]');
    let btnClear = document.querySelector('.clear-btn');

    btnSubmit.addEventListener('click', onReceive);

    function onReceive(event){
        event.preventDefault();
        let product = "Computer";
    
        if(productInput.value == "Computer") {
        product = "Computer";
        } else {
        product = "Phone";
        }

        let description = descriptionInput.value;
        let name = nameInput.value;
        let phone = phoneInput.value;

        if (description === '' || name === '' || phone === ''){
            return;
        }

        descriptionInput.value = '';
        nameInput.value = '';
        phoneInput.value = '';

        let receivedOrders = document.getElementById('received-orders');
        let saveBtn  = e('button', { className: 'start-btn'}, 'Start repair');
        let finishBtn = e('button', { className: 'finish-btn'}, 'Finish repair');
        finishBtn.setAttribute("disabled", true)
        //saveBtn.setAttribute("disabled", false)

        let div = e('div', { className: 'container'},
                    e('h2', {}, `Product type for repair: ${product}`),
                    e('h3', {}, `Client information: ${name}, ${phone}`),
                    e('h4', {}, `Description of the problem: ${description}`),
                    saveBtn,
                    finishBtn
            );
        
        receivedOrders.appendChild(div);
        saveBtn.addEventListener('click', () => {
            
            saveBtn.disabled = true;
            finishBtn.disabled = false;

        });

        finishBtn.addEventListener('click', () =>{
            let completedOrders = document.getElementById('completed-orders');
            completedOrders.appendChild(div);
            saveBtn.remove();
            finishBtn.remove();
        })

        btnClear.addEventListener('click', () => {
            div.remove()
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

};