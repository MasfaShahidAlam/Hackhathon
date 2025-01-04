const firebaseConfig = {
  apiKey: "AIzaSyBq4HkaiRFZu4__JwdDz20S44qA-SnzCCQ",
  authDomain: "contactform-d6e36.firebaseapp.com",
  databaseURL: "https://contactform-d6e36-default-rtdb.firebaseio.com",
  projectId: "contactform-d6e36",
  storageBucket: "contactform-d6e36.firebasestorage.app",
  messagingSenderId: "730798739472",
  appId: "1:730798739472:web:8353804ade70a10798ba95"
};

// initialize firebase

firebase.initializeApp(firebaseConfig);

// refrence your database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name')
  var emailid = getElementVal('emailid')
  var msgContent = getElementVal('msgContent')
  
  saveMessages(name, emailid, msgContent)

//  enable alert
document.querySelector('.alert').style.display = "block";

// remove the alert
setTimeout(() =>{
  document.querySelector('.alert').style.display = "none";
}, 3000)

document.getElementById("contactForm").reset();

}
const saveMessages =(name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name : name ,
    emailid : emailid ,
    msgContent : msgContent,
  });
}

const getElementVal = (id) =>{
  return document.getElementById(id).value;
}
function toggleNavbar() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }


new Swiper('.swiper', {
loop: true,

 
  pagination: {
    el: '.swiper-pagination',
  },

 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

 // Initialize Swiper
 new Swiper('.swiper', {
  loop: true,
 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

// Cart functionality
// let cart = [];
// let total = 0;

// function addToCart(product, price) {
//   cart.push({ product, price });
//   total += price;
//   updateCart();
// }

// function updateCart() {
//   const cartList = document.getElementById('cart');
//   cartList.innerHTML = '';

//   cart.forEach(item => {
//       const listItem = document.createElement('li');
//       listItem.textContent = `${item.product} - $${item.price}`;
//       cartList.appendChild(listItem);
//   });

//   document.getElementById('total').textContent = total;
// }





