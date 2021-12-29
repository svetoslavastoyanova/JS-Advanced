function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let listLi = document.querySelectorAll('table td');
      let searFieldEl = document.getElementById('searchField').value;

      for (let i = 1; i < listLi.length; i++) {
         current = listLi[i];
         currentText = listLi[i].textContent;
         current.parentElement.classList.remove('select');
         }

      for (let i = 1; i < listLi.length; i++) {
         current = listLi[i];
         currentText = listLi[i].textContent;
         if (currentText.includes(searFieldEl)){
            current.parentElement.classList.add('select');
         }
      }
   }  
}