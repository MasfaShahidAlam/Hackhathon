// const firebaseConfig = {
//     apiKey: "AIzaSyDfDdT28e4AQOFxqJ3SzDEyz3OzYJWwXD4",
//     authDomain: "hackhathon-cb8a2.firebaseapp.com",
//     databaseURL: "https://hackhathon-cb8a2-default-rtdb.firebaseio.com",
//     projectId: "hackhathon-cb8a2",
//     storageBucket: "hackhathon-cb8a2.firebasestorage.app",
//     messagingSenderId: "1022003199188",
//     appId: "1:1022003199188:web:59b794275d2029f5390f41"
//   };


//   firebase.initializeApp(firebaseConfig);
//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();

 
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     const privacyPolicy = document.getElementById("privacyPolicy").checked;

//     console.log(name, email, message, privacyPolicy); 

//     if (!privacyPolicy) {
//       alert("You must agree to the privacy policy!");
//       return;
//     }

   
//     try {
//       await db.collection("contacts").add({
//         name,
//         email,
//         message,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//       });
//       alert("Message sent successfully!");
//       form.reset(); 
//     } catch (error) {
//       console.error("Error sending message: ", error);
//       alert("An error occurred. Please try again.");
//     }
// });




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





