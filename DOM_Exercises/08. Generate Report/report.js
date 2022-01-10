function generateReport() {
    const col = Array.from(document.querySelectorAll('tbody tr'));
    const row = Array.from(document.querySelectorAll('tr th'));
    const output = document.querySelector('textarea[id="output"]');
    const button = document.querySelector('button');

    const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
        


    console.log(checked);

}