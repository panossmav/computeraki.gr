function sbtclick(){
    let price = document.getElementById("final_price_input").value;
    price = Math.round(price * 100) / 100;
    let vend_charges = ((5.1/100)*price)+0.99;
    vend_charges = Math.round(vend_charges*100)/100;
    let vat = vend_charges * 1.24;
    vat = Math.round(vat*100)/100;
    let earnings = price - (vend_charges + vat);
    earnings = Math.round(earnings*100) /100;
    document.getElementById("start_price").textContent=`Αρχική Τιμή: ${price}€.`;
    document.getElementById("vendora_cut").textContent=`Προμήθεια Vendora ${vend_charges}€.`;
    document.getElementById("vat").textContent=`ΦΠΑ: ${vat}€.`;
    document.getElementById("leftover").textContent=`Καθαρά έσοδα: ${earnings}€.`;
    
    if (price < 5.00){
        document.getElementById("error").textContent=`Προσοχή! Ελάχιστή ανάληψη είναι τα 5.00€.`
    } else{
        document.getElementById("error").textContent=``
    }


}