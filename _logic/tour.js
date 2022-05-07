class Tour {
     constructor(title = 'default', price = 0) {
          this.title = title;
          this.price = price;
     }
}

let toursArray;

if (localStorage.getItem('tours') != null || localStorage.getItem('tours') != undefined) {
     toursArray = JSON.parse(localStorage.getItem('tours'));
} else {
     toursArray = [];
}

let tourPrice = document.querySelectorAll('.tour-price');

for (let i = 0; i < tourPrice.length; ++i) {
     tourPrice[i].textContent = `$${(Math.round(Math.random() * 1000) % 25).toFixed(2)}`;
}

let tourCards = document.querySelectorAll('.price-action');

for (let i = 0; i < tourCards.length; ++i) {
     tourCards[i].lastElementChild.addEventListener('click', function(e){
          let title = tourCards[i].previousElementSibling.textContent;
          let price = parseInt(tourCards[i].firstElementChild.textContent.slice(1));

          let tourObject = new Tour(title, price);

          if (localStorage.getItem('tours') != null || localStorage.getItem('tours') != undefined) {
               toursArray = JSON.parse(localStorage.getItem('tours'));
          } else {
               toursArray = [];
          }
          
          toursArray.push(tourObject);

          totalAmount += price;
          cartAmount.innerText = `$${totalAmount.toFixed(2)}`;

          localStorage.setItem('tours', JSON.stringify(toursArray));
     })
}