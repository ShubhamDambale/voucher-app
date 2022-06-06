cartData = JSON.parse(localStorage.getItem("purchase")) || [];


let list = document.getElementById("voucher_list")

async function getData(){

    try{
        let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

        let res = await fetch(url);
      
        

        let data = await res.json();

        let maindata = data[0].vouchers

        // data = data.vouchers
console.log(maindata)

        append(maindata)
        // console.log(data)

    }

    catch(err){
        console.log(err)
    }
}

getData()


function append(maindata){

maindata.forEach(function(ele){

    let div1 = document.createElement("div");
    

    let img = document.createElement("img")
    img.src = ele.image;
    console.log(img)

    let names = document.createElement("h4")
    names.innerText = ele.name

    let prices = document.createElement("h4")
    prices.innerText = ele.price

    let btn = document.createElement("button")
    btn.innerText = "Buy voucher"
    btn.setAttribute("id", "buy_voucher")
    btn.addEventListener("click", function(){

        buyNow(el)
    })


    div1.append(img,names,prices,btn)
    
    list.append(div1)

})

}



function buyNow(el){


    cartData.push(el);
     console.log(cartData)
    localStorage.setItem("purchase", JSON.stringify(cartData));

}



