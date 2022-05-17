function solve() {
    let nameInput = document.querySelector('input[name="lecture-name"]');
    let dateInput = document.querySelector('input[name="lecture-date"]');
    let moduleInput = document.querySelector('select[name="lecture-module"]');
    let button = document.querySelector('.form-control button');

    button.addEventListener('click', onAdd);

    function onAdd(event){
        event.preventDefault();

        let name = nameInput.value;
        let date = dateInput.value;
        let module = moduleInput.value;

        if (lecture === '' || date === '' || module === 'Select module') {
            return;
        }

        
    };

};