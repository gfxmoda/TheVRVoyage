let header = `
<div class="header">
     <div class="container main-menu-container">
          <div class="logo">
               <a href="index.html"><img src="_media/vrv-logo-white-horizontal.png" alt=""></a>
          </div>
          <div class="navigation">
               <div class="auto-hide-main-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul class="main-menu-2">
                         <li class="main-menu-item"><a href="index.html">Home</a></li>
                         <li class="main-menu-item">
                              About
                              <ul class="about-sub-menu">
                                   <li class="main-menu-item"><a href="our-story.html">Our Story</a></li>
                                   <li class="main-menu-item"><a href="how-it-works.html">How It Works</a></li>
                              </ul>
                         </li>
                         <li class="main-menu-item"><a href="join.html">Join</a></li>
                         <li class="main-menu-item"><a href="blog.html">Blog</a></li>
                         <li class="main-menu-item">
                              Tours
                              <ul class="tours-sub-menu">
                                   <li class="main-menu-item"><a href="by-interest.html">By Interest</a></li>
                                   <li class="main-menu-item"><a href="by-destination.html">By Destination</a></li>
                              </ul>
                         </li>
                         <li class="main-menu-item"><a href="contact.html">Contact</a></li>
                         <li class="main-menu-item"><a href="login.html">Login</a></li>
                    </ul>
               </div>
               <ul class="main-menu">
                    <li class="main-menu-item"><a href="index.html">Home</a></li>
                    <li class="main-menu-item">
                         <a href="about.html">About</a>
                         <ul class="about-sub-menu">
                              <li class="main-menu-item"><a href="our-story.html">Our Story</a></li>
                              <li class="main-menu-item"><a href="how-it-works.html">How It Works</a></li>
                         </ul>
                    </li>
                    <li class="main-menu-item"><a href="join.html">Join</a></li>
                    <li class="main-menu-item"><a href="blog.html">Blog</a></li>
                    <li class="main-menu-item">
                         <a href="tours.html">Tours</a>
                         <ul class="tours-sub-menu">
                              <li class="main-menu-item"><a href="by-interest.html">By Interest</a></li>
                              <li class="main-menu-item"><a href="by-destination.html">By Destination</a></li>
                         </ul>
                    </li>
                    <li class="main-menu-item"><a href="contact.html">Contact</a></li>
                    <li class="main-menu-item"><a href="login.html">Login</a></li>
               </ul>
               <div class="user">
                    <a href="cart.html">
                         <div class="cart-button">
                              <img src="_media/cart-icon.png" alt="cart">
                              <span class="amount"> <span class="currency">&dollar;</span></span>
                         </div>
                    </a>
                    <div class="search-button">
                         <input class="search-area" type="search" name="" id="">
                         <img src="_media/search-icon.png" alt="search">
                    </div>     
               </div>
          </div>
     </div>
</div>
`;

document.write(header);

let cartAmount = document.querySelector('.currency');
let totalAmount = 0;

if (localStorage.getItem('tours') != null || localStorage.getItem('tours') != undefined) {
     toursArray = JSON.parse(localStorage.getItem('tours'));

     for (let i = 0; i < toursArray.length; ++i) {
          totalAmount += toursArray[i].price;
     }

     cartAmount.innerText = `$${totalAmount.toFixed(2)}`;
} else {
     toursArray = [];
     cartAmount.innerText = `$${(0).toFixed(2)}`;
}