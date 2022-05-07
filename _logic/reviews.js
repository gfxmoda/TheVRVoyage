class Review {
     constructor(reviewerName, date, rating, textCopy) {
          this.reviewerName = reviewerName;
          this.date = new Date(date);
          if (rating >= 0 && rating <= 5) {
               this.rating = rating;
          } else if (rating < 0) {
               this.rating = 0;
          } else {
               this.rating = 5;
          };
          this.textCopy = textCopy;
          this.getReviewDate = function() {
               const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          
               let reviewMonth = yearMonths[this.date.getMonth()];
               let reviewDay = this.date.getDate();
               let reviewYear = this.date.getFullYear();
               
               return `${reviewMonth} ${reviewDay}, ${reviewYear}`;
          }
     }
}

let reviewersArray;
let mainTourRating = document.querySelector('.banner .tour-rating').children;

if (localStorage['reviews'] != null || localStorage['reviews'] != undefined) {
     reviewersArray = JSON.parse(localStorage['reviews']);
} else {
     reviewersArray = [];
     
     let noRating = document.createElement('div');
     noRating.innerText = `................ No ratings yet ................`;

     for (let i = 0; i < mainTourRating.length; ++i) {
          mainTourRating[i].style.display = 'none';
     }

     let noRatingContainer = document.querySelector('.tour-rating');
     noRatingContainer.appendChild(noRating);
}

let setMainTourRatingStars = function() {
     for (let i = 0; i < 5; ++i) {
          mainTourRating[i].classList.value = "fa fa-star";
     }

     let starsCount = 0;
     
     for (let i = 0; i < reviewersArray.length; ++i) {
          starsCount += parseInt(reviewersArray[i].rating);
     }

     let reviewersCount = reviewersArray.length;
     let averageRating = Math.ceil(starsCount / reviewersCount);

     for (let i = 0; i < averageRating; ++i) {
          mainTourRating[i].classList.add("checked");
     }
}

let currentReviewerName = document.querySelector('#reviewer-name').innerText;
let currentReviewDate = document.querySelector('#review-date').innerText;
let currentTourRating = document.querySelector('#tour-rating').children;
let currentTextCopy = document.querySelector('#review-text-copy').innerText;
let goBackButton = document.querySelector('#go-back');
let goForwardButton = document.querySelector('#go-forward');
let reviewsCount = 0;

let setRatingStars = function() {
     for (let i = 0; i < 5; ++i) {
          document.querySelector('#tour-rating').children[i].classList.value = "fa fa-star";
     }

     for (let i = 0; i < reviewersArray[reviewsCount].rating; ++i) {
          document.querySelector('#tour-rating').children[i].classList.value = document.getElementById('tour-rating').children[i].classList.value.concat(" checked");
     }
}

if (localStorage.getItem('reviews') != null || localStorage.getItem('reviews') != undefined) {
     reviewersArray = JSON.parse(localStorage.getItem('reviews'));
     document.querySelector('#reviewer-name').innerText = reviewersArray[0].reviewerName;
     document.querySelector('#review-date').innerText = reviewersArray[0].getReviewDate;
     for (let i = 0; i < currentTourRating.length; ++i) {
          currentTourRating[i].className = "fa fa-star";
     }

     document.querySelector('#review-text-copy').innerText = reviewersArray[0].textCopy;
     setRatingStars();
} else {
     reviewersArray = [];
     document.querySelector('.reviews').style.display = 'none';
}

let toggleRight = function() {
     if (reviewsCount === reviewersArray.length - 1) {
          reviewsCount = 0;
     } else {
          ++reviewsCount;
     }

     document.querySelector('#reviewer-name').innerText = reviewersArray[reviewsCount].reviewerName;
     setRatingStars();
     document.querySelector('#review-text-copy').innerText = reviewersArray[reviewsCount].textCopy;
}

let toggleLeft = function() {
     if (reviewsCount === 0) {
          reviewsCount = reviewersArray.length - 1;
     } else {
          --reviewsCount;
     }

     document.querySelector('#reviewer-name').innerText = reviewersArray[reviewsCount].reviewerName;
     setRatingStars();
     document.querySelector('#review-text-copy').innerText = reviewersArray[reviewsCount].textCopy;
}

setMainTourRatingStars();