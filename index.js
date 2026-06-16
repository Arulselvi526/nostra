const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");

let counter = 0;

document.getElementById("next").addEventListener("click", () => {

    counter++;

    if(counter >= slides.length){
        counter = 0;
    }

    slider.style.transform = `translateX(-${counter * 100}%)`;

});

document.getElementById("prev").addEventListener("click", () => {

    counter--;

    if(counter < 0){
        counter = slides.length - 1;
    }

    slider.style.transform = `translateX(-${counter * 100}%)`;

});

// Auto Slide Every 3 Seconds

setInterval(() => {

    counter++;

    if(counter >= slides.length){
        counter = 0;
    }

    slider.style.transform = `translateX(-${counter * 100}%)`;

},3000);

//brand card click event listener

const brands = document.querySelectorAll(".brand-card");

brands.forEach((brand)=>{

    brand.addEventListener("click",()=>{

        alert(
            brand.querySelector("h2").textContent +
            " Brand Selected"
        );

    });

});

//service card hover effect
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "#f3f4f6";
    });

    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "#f3f4f6";
    });

});

//collection button click event listener
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Product Added to Collection");
    });
});





// Subscribe Button
const btn = document.getElementById("subscribeBtn");

btn.addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if(email === ""){
        message.innerHTML = "Please enter your email";
        message.classList.remove("text-green-600");
        message.classList.add("text-red-600");
    }
    else{
        message.innerHTML = "Thanks for subscribing!";
        message.classList.remove("text-red-600");
        message.classList.add("text-green-600");
    }

});

