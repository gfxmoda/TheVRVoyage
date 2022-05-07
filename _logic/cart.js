document.querySelector('.subtotal-amount').textContent = cartAmount.textContent;
document.querySelector('.total-amount').textContent = cartAmount.textContent;

if (localStorage.getItem('tours') != null || localStorage.getItem('tours') != undefined) {
     for (let i = 0; i < toursArray.length; ++i) {

          let productPrice = document.createElement('div');
          productPrice.textContent = `$${(toursArray[i].price < 10) ? "0" : ""}${toursArray[i].price.toFixed(2)}`;
          productPrice.className = 'product-price black-card';
          
          let productTitle = document.createElement('div');
          productTitle.textContent = `${toursArray[i].title}`;
          productTitle.className = 'product-title black-card';
          
          let productRow = document.createElement('div');
          productRow.className = 'product-row';
          
          productRow.appendChild(productTitle);
          productRow.appendChild(productPrice);

          if ((document.URL).includes('cart')) {
               let deletProduct = document.createElement('input');
               deletProduct.className = 'delete';
               deletProduct.type = 'button';
               deletProduct.value = 'X';
               deletProduct.textContent = 'X';
               
               productPrice.appendChild(deletProduct);
          
               deletProduct.addEventListener('click', function(e){
                    e.target.parentElement.parentElement.remove();
                    delete toursArray[i];

                    let tempToursArray = [];
                    if (toursArray.length > 0) {
                         for (let i = 0; i < toursArray.length; ++i) {
                              if (toursArray[i] != null) {
                                   tempToursArray.push(toursArray[i]);
                              }
                         }
                    }

                    toursArray = tempToursArray;
                    localStorage.setItem('tours', JSON.stringify(toursArray));

                    toursArray = JSON.parse(localStorage.getItem('tours'));
     
                    let totalAmount = 0;
                    for (let j = 0; j < toursArray.length; ++j) {
                         totalAmount += toursArray[j].price;
                    }
               
                    cartAmount.innerText = `$${totalAmount.toFixed(2)}`;          

                    document.querySelector('.subtotal-amount').textContent = cartAmount.textContent;
                    document.querySelector('.total-amount').textContent = cartAmount.textContent;
               });
     
               let cartForm = document.querySelector('.cart form');
               cartForm.insertAdjacentElement('afterbegin', productRow);
          }

          if ((document.URL).includes('checkout')) {
               let checkoutForm = document.querySelector('.checkout form .order');
               checkoutForm.insertAdjacentElement('afterbegin', productRow);
          }
     }
}

if ((document.URL).includes('cart')) {
     let couponCode = document.querySelector('#coupon-code');
     let couponCodeValue;
     
     couponCode.addEventListener('keyup', function(e){
          couponCodeValue = e.target.value;
     })
     
     let discountApplyBtn = document.querySelector('.discount-row .black-card');
     
     discountApplyBtn.addEventListener('click', function(e){
          if (couponCodeValue == "VRV-2021") {
               alert(`Discount applied!`);
               totalAmount = (totalAmount * 0.75);
                    cartAmount.innerText = `$${totalAmount.toFixed(2)}`;          
                    document.querySelector('.total-amount').textContent = cartAmount.textContent;
          } else {
               alert(`Please enter a valid coupon code`);
          }
     });
     
     let partnerCode = document.querySelector('#partner-code');
     let partnerCodeValue;
     
     partnerCode.addEventListener('keyup', function(e){
          partnerCodeValue = e.target.value;
     })
     
     let partnerApplyBtn = document.querySelector('.partner-row .black-card');
     
     partnerApplyBtn.addEventListener('click', function(e){
          if (partnerCodeValue == "PTR-VRV") {
               alert(`Welcome partner!`);
               totalAmount = 0;
                    cartAmount.innerText = `$${totalAmount.toFixed(2)}`;          
                    document.querySelector('.total-amount').textContent = cartAmount.textContent;
          } else {
               alert(`Please enter a valid partner code`);
          }
     });
}