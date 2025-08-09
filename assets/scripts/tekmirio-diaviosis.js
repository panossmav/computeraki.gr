
function Calculate(){
    const first_home = CalculateFirstHome()
    const second_homes = CalculateSecondaryHomes()
    const vehicles = CalculateVehicles()
    let private_schools = document.getElementById("private-school-input").value;
    if (private_schools == null){
        private_schools = 0;
    }
    //Final function pending calculations
    
}
function CalculateFirstHome(){
    let area = document.getElementById("main-property-size").value;
    area = Math.round(area);
    let final_price = 0;
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

function CalculateSecondaryHomes(){
    let secondary_homes_price = 0;
    const properties = document.getElementsByName("sec_homes_sqf");
    for (let i = 0;i < properties.length;i++) {
        let property_price = 0;
        let x = Number(properties[i].value);
        if (x<=80){
            property_price = 40*x;
        }else if (x<=120) {
            property_price = 65*x;
        }else if (x<=200) {
            property_price = 110*x;
        }else if (x<=300){
            property_price = 200*x;
        }else {
            property_price = 400*x;
        }
        property_price = property_price * 0.5;
        secondary_homes_price+=property_price;
    }
    return secondary_homes_price;
}

function CalculateVehicles(){
    let cc_list = document.getElementsByName("car-cc");
    let year_list = document.getElementsByName("car-year");
    const current_year = new Date().getFullYear();
    let total_cost_all = 0;
    for (let i = 0;i < cc_list.length;i++){
        let cc = Number(cc_list[i].value);
        let year = Number(year_list[i].value);
        let total_cost = 0;
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

        total_cost = Math.round(total_cost*100)/100;
        total_cost_all+=total_cost;
    }
    return total_cost_all;
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

