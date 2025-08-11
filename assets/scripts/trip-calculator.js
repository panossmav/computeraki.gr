function CalculateTrip(){
    const km = Math.round(document.getElementById("km_input").value);
    const fuel_price = Math.round(document.getElementById("fuel_price_input").value *1000) / 1000;
    const avg_cons = Number(document.getElementById("avg_consumption_input").value);

    const l_km = avg_cons/100;
    const t_l = l_km*km;
    let price = t_l * fuel_price;
    price=Math.round(price)
    document.getElementById("res").textContent=`Κόστος: ≈${price}€.`;

}