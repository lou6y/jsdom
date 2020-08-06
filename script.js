let totality = 1578;
function add(){
    let old = document.getElementById("number1").innerHTML;
    old = old*1 + 1;
    document.getElementById("number1").innerHTML=old;
    let price = document.getElementById("price1").innerHTML;
    let number = document.getElementById("number1").innerHTML;
    let total = price * number;
    totality += 120;
    console.log(totality);
    document.getElementById("price5").innerHTML=totality+"dt";
    total += " dt";
    document.getElementById("total1").innerHTML=total;
}

function sub(){
    let old = document.getElementById("number1").innerHTML;
    if(old>0){
    old = old - 1;
    }else
    old = 0;
    document.getElementById("number1").innerHTML=old;
    let price = document.getElementById("price1").innerHTML;
    let number = document.getElementById("number1").innerHTML;
    let total = price * number;
    totality -= 120;
    document.getElementById("price5").innerHTML=totality+"dt";
    total += " dt";
    document.getElementById("total1").innerHTML=total;
}

function add2(){
    let old = document.getElementById("number2").innerHTML;
    old = old*1 + 1;
    document.getElementById("number2").innerHTML=old;
    let price = document.getElementById("price2").innerHTML;
    let number = document.getElementById("number2").innerHTML;
    let total = price * number;
    totality += 1299;
    document.getElementById("price5").innerHTML=totality+"dt";
    total += " dt";
    document.getElementById("total2").innerHTML=total;
}

function sub2(){
    let old = document.getElementById("number2").innerHTML;
    if(old>0){
    old = old - 1;
    }else
    old = 0;   
     document.getElementById("number2").innerHTML=old;
    let price = document.getElementById("price2").innerHTML;
    let number = document.getElementById("number2").innerHTML;
    let total = price * number;
    totality -= 1299;
    document.getElementById("price5").innerHTML=totality+"dt";
    total += " dt";
    document.getElementById("total2").innerHTML=total;
}

function add3(){
    let old = document.getElementById("number3").innerHTML;
    old = old*1 + 1;
    document.getElementById("number3").innerHTML=old;
    let price = document.getElementById("price3").innerHTML;
    let number = document.getElementById("number3").innerHTML;
    let total = price * number;
    totality += 159;
    document.getElementById("price5").innerHTML=totality+"dt";
    total += " dt";
    document.getElementById("total3").innerHTML=total;
}

function sub3(){
    let old = document.getElementById("number3").innerHTML;
    if(old>0){
    old = old - 1;
    }else
    old = 0;
    document.getElementById("number3").innerHTML=old;
    let price = document.getElementById("price3").innerHTML;
    let number = document.getElementById("number3").innerHTML;
    let total = price * number;
    totality -= 159;
    document.getElementById("price5").innerHTML=totality+"dt";
    total += " dt";
    document.getElementById("total3").innerHTML=total;
}

var num = 1;

function redHeart(){
    if ( num===1){
    document.getElementById("heart1").innerHTML="❤";
    document.getElementById("heart1").style.fontSize="26px";
    document.getElementById("heart1").style.color="red";
    num = 0;
}
    else
{
    document.getElementById("heart1").innerHTML="♡";
    document.getElementById("heart1").style.fontSize="30px";
    document.getElementById("heart1").style.color="black";
    num = 1;
}

}

let num2 = 1;

function redHeart2(){
    if ( num2===1){
    document.getElementById("heart2").innerHTML="❤";
    document.getElementById("heart2").style.fontSize="26px";
    document.getElementById("heart2").style.color="red";
    num2 = 0;
    }
    else
    {
    document.getElementById("heart2").innerHTML="♡";
    document.getElementById("heart2").style.fontSize="30px";
    document.getElementById("heart2").style.color="black";
    num2 = 1;
    }

}

let num3 = 1;
function redHeart3(){
    if ( num3===1){
    document.getElementById("heart3").innerHTML="❤";
    document.getElementById("heart3").style.fontSize="26px";
    document.getElementById("heart3").style.color="red";
    num3 = 0;
    }
        else
    {
    document.getElementById("heart3").innerHTML="♡";
    document.getElementById("heart3").style.fontSize="30px";
    document.getElementById("heart3").style.color="black";
    num3 = 1;
    }

}

function remove1(){
    document.getElementById("item1").style.display="none";
    document.getElementById("number-it").innerHTML-= 1;
    document.getElementById("number-final").innerHTML-= 1;
    document.getElementById("total1").innerHTML=0;

}

function remove2(){
    document.getElementById("item2").style.display="none";
    document.getElementById("number-it").innerHTML-= 1;
    document.getElementById("number-final").innerHTML-= 1;

}

function remove3(){
    document.getElementById("item3").style.display="none";
    document.getElementById("number-it").innerHTML-= 1;
    document.getElementById("number-final").innerHTML-= 1;

}


function finalPrice(){
    let finalPrice = totality*1 + document.getElementById("shipping").value*1;
    document.getElementById("final-price").innerHTML = finalPrice +"dt"
}