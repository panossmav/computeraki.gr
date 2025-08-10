function Calculate() {
    const first_home = CalculateFirstHome();
    const second_homes = CalculateSecondaryHomes();
    const vehicles = CalculateVehicles();
    let private_schools = Number(document.getElementById("private-school-input").value) || 0;
    const workers = CalculateWorkers();
    const boats = CalculateBoats();
    const family_selection = document.getElementsByName("family");
    let total_tekm = 0;

    if (family_selection[0].checked) {
        total_tekm = 3000 + first_home + second_homes + vehicles + private_schools + workers + boats;
    } else {
        total_tekm = 5000 + first_home + second_homes + vehicles + private_schools + workers + boats;
    }
    
    const result = document.getElementById("res");
    total_tekm = Math.round(total_tekm);
    result.textContent = `Συνολικό τεκμήριο: ${total_tekm}€.`;  
}

function CalculateFirstHome() {
    let area = Number(document.getElementById("main-property-size").value) || 0;
    area = Math.round(area);
    let final_price = 0;

    if (area <= 80) {
        final_price = 40 * area;
    } else if (area <= 120) {
        final_price = 65 * area;
    } else if (area <= 200) {
        final_price = 110 * area;
    } else if (area <= 300) {
        final_price = 200 * area;
    } else {
        final_price = 400 * area;
    }
    return final_price;
}

function CalculateSecondaryHomes() {
    let secondary_homes_price = 0;
    const properties = document.getElementsByName("sec_homes_sqf");

    for (let i = 0; i < properties.length; i++) {
        let x = Number(properties[i].value) || 0;
        let property_price = 0;

        if (x <= 80) {
            property_price = 40 * x;
        } else if (x <= 120) {
            property_price = 65 * x;
        } else if (x <= 200) {
            property_price = 110 * x;
        } else if (x <= 300) {
            property_price = 200 * x;
        } else {
            property_price = 400 * x;
        }

        property_price *= 0.5;
        secondary_homes_price += property_price;
    }
    return secondary_homes_price;
}

function CalculateVehicles() {
    let cc_list = document.getElementsByName("car-cc");
    let year_list = document.getElementsByName("car-year");
    const current_year = new Date().getFullYear();
    let total_cost_all = 0;

    for (let i = 0; i < cc_list.length; i++) {
        let cc = Number(cc_list[i].value) || 0;
        let year = Number(year_list[i].value) || current_year;
        let total_cost = 0;

        if (cc <= 1200) {
            total_cost = 4000;
        } else if (cc <= 1350) {
            total_cost = 5000;
        } else if (cc <= 1500) {
            total_cost = 5500;
        } else if (cc <= 1600) {
            total_cost = 6000;
        } else if (cc <= 1800) {
            total_cost = 7000;
        } else if (cc <= 2000) {
            total_cost = 8500;
        } else if (cc <= 2500) {
            total_cost = 11500;
        } else {
            const remaining_cc = Math.round((cc - 2500) / 100);
            total_cost = 11500 + remaining_cc;
        }

        const age = current_year - year;
        if (age <= 5) {
            total_cost = total_cost;
        } else if (age <= 10) {
            total_cost *= 0.7;
        } else if (age <= 15) {
            total_cost *= 0.5;
        } else {
            total_cost *= 0.25;
        }
        total_cost_all += total_cost;
    }
    return total_cost_all;
}

function CalculateWorkers() {
    let workers = document.getElementsByName("worker_entry");
    let total_spendings = 0;

    for (let i = 0; i < workers.length; i++) {
        total_spendings += Number(workers[i].value) || 0;
    }
    return total_spendings;
}

function CalculateBoats() {
    let boats = document.getElementsByName("boat-length");
    let boats_types = document.getElementsByName("boat_type");
    let total_cost = 0;

    for (let i = 0; i < boats.length; i++) {
        let boat_length = Number(boats[i].value) || 0;
        let current_cost = 0;

        if (boat_length <= 5) {
            current_cost = 4000;
        } else if (boat_length <= 7) {
            current_cost = 6000;
        } else if (boat_length <= 10) {
            current_cost = 12000;
        } else if (boat_length <= 12) {
            current_cost = 20000;
        } else if (boat_length <= 15) {
            current_cost = 28000;
        } else if (boat_length <= 18) {
            current_cost = 35000;
        } else if (boat_length <= 20) {
            current_cost = 42000;
        } else {
            current_cost = 50000;
        }

        if (boats_types[0] && boats_types[0].checked) {
            current_cost /= 4;
        }
        total_cost += current_cost;
    }
    return total_cost;
}

function CreateSecondaryHome() {
    let new_home = document.createElement("div");
    new_home.classList.add('secondary-home');

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

function CreateVehicle() {
    let new_vehicle = document.createElement("div");
    new_vehicle.classList.add('vehicle');

    let cc_text = document.createElement("p");
    cc_text.textContent = 'Κυβισμός (cc): ';
    new_vehicle.appendChild(cc_text);

    let cc_input = document.createElement("input");
    cc_input.type = 'number';
    cc_input.name = 'car-cc';
    new_vehicle.appendChild(cc_input);

    let year_text = document.createElement("p");
    year_text.textContent = 'Έτος κυκλοφορίας: ';
    new_vehicle.appendChild(year_text);

    let year_input = document.createElement("input");
    year_input.type = "number";
    year_input.max = "2025";
    year_input.min = "1900";
    year_input.name = "car-year";
    new_vehicle.appendChild(year_input);

    let container = document.getElementById("added_vehicles");
    container.appendChild(new_vehicle);
}

function CreateWorker() {
    let new_worker = document.createElement('div');

    let new_worker_text = document.createElement("p");
    new_worker_text.textContent = 'Μεικτός ετήσιος μισθός εργαζόμενου:';
    new_worker.appendChild(new_worker_text);

    let new_worker_entry = document.createElement("input");
    new_worker_entry.name = "worker_entry";
    new_worker_entry.type = "number";
    new_worker.appendChild(new_worker_entry);

    let placement = document.getElementById("added_workers");
    placement.appendChild(new_worker);
}

function CreateBoat() {
    let new_boat = document.createElement("div");

    let new_boat_label = document.createElement("p");
    new_boat_label.textContent = 'Εισάγετε μήκος σκάφους (μ.): ';
    new_boat.appendChild(new_boat_label);

    let new_boat_input = document.createElement("input");
    new_boat_input.name = 'boat-length';
    new_boat.appendChild(new_boat_input);

    let boat_type_input_1l = document.createElement("p");
    boat_type_input_1l.textContent = 'Ιστιοπλοϊκό';
    new_boat.appendChild(boat_type_input_1l);

    let boat_type_input_1e = document.createElement("input");
    boat_type_input_1e.type = 'radio';
    boat_type_input_1e.name = 'boat_type';
    new_boat.appendChild(boat_type_input_1e);

    let boat_type_input_2l = document.createElement("p");
    boat_type_input_2l.textContent = 'Μηχανοκίνητο';
    new_boat.appendChild(boat_type_input_2l);

    let boat_type_input_2e = document.createElement("input");
    boat_type_input_2e.type = 'radio';
    boat_type_input_2e.name = 'boat_type';
    boat_type_input_2e.checked = true;
    new_boat.appendChild(boat_type_input_2e);

    let placement = document.getElementById("added_boats");
    placement.appendChild(new_boat);
}
