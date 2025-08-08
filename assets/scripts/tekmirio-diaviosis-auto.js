function CalculateSpendings(){
    let cc = document.getElementById("cc").value;
    cc = Math.round(cc);
    let year = document.getElementById("date").value;
    year = Math.round(year);
    const current_year = new Date().getFullYear();
    let total_cost = null;
    if (cc<=1200){
        total_cost = 4000;
    } else if(cc<=1350){
        total_cost = 5000;
    } else if(cc<=1500){
        total_cost = 5500;
    } else if(cc<=1600){
        total_cost= 6000;
    } else if(cc<=1800){
        total_cost = 7000;
    } else if(cc<=2000){
        total_cost = 8500;
    } else if(cc<=2500){
        total_cost = 11500;
    }else{
        const remaining_cc = Math.round((cc-2500)/100);
        total_cost = 11500+remaining_cc;

    }
    const age= current_year - year;
    if (age<=5){
        total_cost = total_cost;
    } else if(age<=10){
        total_cost = total_cost*0.7;
    } else if(age<=15){
        total_cost = total_cost*0.5;
    } else{
        total_cost = total_cost*0.25;
    }

    total_cost = Math.round(total_cost*100)/100
    document.getElementById("res").textContent=`Τεκμήριο διαβίωσης αυτοκινήτου: ${total_cost}€.`
}