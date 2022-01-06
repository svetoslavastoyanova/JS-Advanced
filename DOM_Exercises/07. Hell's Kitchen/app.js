function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs textarea');
   let bestRestaurantP = document.querySelector('#bestRestaurant p');
   let workersP = document.querySelector('#workers p');
   function onClick () {
      let arr = JSON.parse(input.value);
      let restaurants = {};

      for (let i = 0; i < arr.length; i++){
         let [restaurantName, workersArr] = arr[i].split(' - ');
         let [worker, salary] = workersArr.split(',');
      }
      
   }
}