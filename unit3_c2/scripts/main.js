
let arr = JSON.parse(localStorage.getItem("user")) ||  [];

function products(name,email,address,amount){

    this.name = name
    this.email = email
    this.address = address
    this.amount = amount
}


function productFunction(event){
   event.preventDefault();

   let form = document.querySelector("form");

   let name = form.name.value;
   let email = form.email.value;
   let address = form.address.value;
   let amount = form.amount.value;

   let prod = new products(name,email,address,amount);

   arr.push(prod);

   console.log(arr)

   localStorage.setItem("user", JSON.stringify(arr))

   window.location.href = "voucher.html"
}