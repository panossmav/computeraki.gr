function calculateVAT(){
    const calculations = document.getElementsByName("calculations");
    let price = document.getElementById("price-input").value;
    price = Math.round(price*100)/100;
    let vat = document.getElementById("vat-input").value;
    vat = Math.round(vat);
    let res = null;
    const vat_price = price*(vat/100);
    if (calculations[0].checked){
        res=price-vat_price;
    } else if (calculations[1].checked){
        res=price+vat_price;
    }else{
        res='Σφάλμα!'
    }
    document.getElementById("result").textContent=`Νέα τιμή: ${res}€.`
}