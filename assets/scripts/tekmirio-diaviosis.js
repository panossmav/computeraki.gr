
function Calculate(){
    const first_home = CalculateFirstHome()
    //Final function pending calculations
    
}
function CalculateFirstHome(){
    let area = document.getElementById("main-property-size").value;
    area = Math.round(area);
    let final_price = null;
    if (area<=80){
        final_price = 40*area;
    } else if (area<=120){
        final_price = 65*area;
    } else if (area<=200){
        final_price = 110*area;
    } else if(area<=300){
        final_price = 200*area;
    } else {
        final_price = 400*area;
    }
    final_price = Math.round(final_price*100)/100
    return final_price;
}
function CreateSecondaryHome(){
    document.getElementById("optional-secondary-properties").textContent='';
    let new_home = document.createElement("div");
    new_home.id = 'new_home';

    let new_home_text = document.createElement("p");
    new_home_text.textContent = 'Εμβαδόν (τ.μ.): ';
    new_home.appendChild(new_home_text);

    let new_home_input = document.createElement("input");
    new_home_input.type = 'number';
    new_home_input.name = 'sec_homes_sqf'; 
    new_home.appendChild(new_home_input);

    
    let container = document.getElementById("sec_homes");
    container.appendChild(new_home);
}

function CreateVehicle(){
    document.getElementById("optional-vehicle").textContent='';
    let new_vehicle = document.createElement("div");
    new_vehicle.id = 'vehicle';

    let new_vehicle_cc = document.createElement("div")
    new_vehicle_cc.id='vehicle_cc_div';

    let cc_text = document.createElement("p");
    cc_text.textContent='Κυβισμός (cc): ';
    new_vehicle_cc.appendChild(cc_text);

    let cc_input = document.createElement("input");
    cc_input.type='number';
    cc_input.name='car-cc';
    new_vehicle_cc.appendChild(cc_input);

    let new_vehicle_year = document.createElement("div");
    new_vehicle_year.id='vehicle_year_div'

    let year_text = document.createElement("p");
    year_text.textContent='Έτος κυκλοφορίας: ';
    new_vehicle_year.appendChild(year_text);

    let year_input  = document.createElement("input");
    year_input.type="number";
    year_input.max="2025";
    year_input.min="1900";
    year_input.name="car-year";
    new_vehicle_year.appendChild(year_input);

    new_vehicle.appendChild(new_vehicle_cc);
    new_vehicle.appendChild(new_vehicle_year);
    
    let container = document.getElementById("added_vehicles");
    container.appendChild(new_vehicle);
}

