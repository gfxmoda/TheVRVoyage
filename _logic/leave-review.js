// Timer
let hours = 2, minutes = 0, seconds = 0;
document.querySelector('.tour-timer').textContent = `0${hours} : ${(minutes >= 0 && minutes < 10) ? "0": ""}${minutes} : ${(seconds >= 0 && seconds < 10) ? "0": ""}${seconds}`;
let timer = async () => {
     for (let h = hours, m = minutes, s = seconds; h >= 0;) {
          await new Promise(resolve => setTimeout( resolve, 1000));
          if (s === 0) {
               if (m === 0) {
                    --h;
                    m = 59;
               } else {
                    --m;
               }
               s = 59;
          } else {
               --s;
          }
          document.querySelector('.tour-timer').textContent = `0${h} : ${(m >= 0 && m < 10) ? "0": ""}${m} : ${(s >= 0 && s < 10) ? "0": ""}${s}`;
          if (h === 0 && m === 0 && s === 0) {
               break;
          }
     }
     document.querySelector('.tour-timer').textContent = `Time is up`;
}

timer();


// Reviews
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

     // getReviewDate() {
     //      const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          
     //      let reviewMonth = yearMonths[this.date.getMonth()];
          
     //      let reviewDay = this.date.getDate();
     //      let reviewYear = this.date.getFullYear();
          
     //      return `${reviewMonth} ${reviewDay}, ${reviewYear}`;
     // }
}

let reviewersArray;

let mainTourRating = document.querySelector('.banner .tour-rating').children;

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

let reviewerRatingStars = document.querySelector('.reviewer-rating .tour-rating').children;


for (let i = 0; i < reviewerRatingStars.length; ++i) {
     reviewerRatingStars[i].addEventListener('mouseover', function(){

          for (let j = 0; j < reviewerRatingStars.length; ++j) {
               reviewerRatingStars[j].classList = "fa fa-star";
          }

          for (let k = i; k >= 0; --k) {
               reviewerRatingStars[k].classList.add("checked");
          }

     });
}

let reviewForm = document.querySelector('#review-form');
let currentReviewerName = document.querySelector('#reviewer-name');

currentReviewerName.addEventListener('keydown', function(e){
     currentReviewerName.value = e.target.value;
});

let reviewerMessage = document.querySelector('#message');

reviewerMessage.addEventListener('keydown', function(e){
     reviewerMessage.value = e.target.value;
});

let getCurrentRating = function() {
     let currentRating = 0;

     for (let i = 0; i < reviewerRatingStars.length; ++i) {
          if (reviewerRatingStars[i].classList.contains('checked')) {
               ++currentRating;
          }
     }

     return currentRating;
}

let reviewFormConfirmButton = document.querySelector('#review-form-confirm');

function storData() {
     if (currentReviewerName.value.length !== 0 && reviewerMessage.value.length !== 0) {
          
          let reviewerObject = new Review(currentReviewerName.value, new Date(), getCurrentRating(), reviewerMessage.value);
          console.log(reviewerObject);
          
          // if (localStorage['reviews'] != null || localStorage['reviews'] != undefined) {
          //      reviewersArray = JSON.parse(localStorage['reviews']);
          // } else {
          //      reviewersArray = [];
          // }

          // reviewersArray.push(reviewerObject);
          // localStorage.setItem('reviews', `${JSON.stringify(reviewersArray)}`);
     }
}


reviewFormConfirmButton.addEventListener('click', function(e){
     if (currentReviewerName.value.length !== 0 && reviewerMessage.value.length !== 0) {
          
          let reviewerObject = new Review(currentReviewerName.value, new Date(), getCurrentRating(), reviewerMessage.value);
          reviewerObject.getReviewDate = reviewerObject.getReviewDate();
          
          if (localStorage['reviews'] != null || localStorage['reviews'] != undefined) {
               reviewersArray = JSON.parse(localStorage['reviews']);
          } else {
               reviewersArray = [];
          }

          reviewersArray.push(reviewerObject);
          localStorage.setItem('reviews', `${JSON.stringify(reviewersArray)}`);
     }
});


setMainTourRatingStars();