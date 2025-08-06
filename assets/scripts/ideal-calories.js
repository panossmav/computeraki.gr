function find_calories(){
    const genders = document.getElementsByName("gender");
    let selected_gender = null;
    let error = false;
    if (genders[0].checked){
        selected_gender= genders[0].value;

    } else if(genders[1].checked){
        selected_gender = genders[1].value;
    } else{
        error = true;
    }
    let total_cal = 0;

    let age = document.getElementById("age-input").value;
    age = Math.round(age);
    let weight = document.getElementById("weight-input").value;
    weight = Math.round(weight * 100) / 100;
    let height = document.getElementById("height-input").value;
    height = Math.round(height)
    if (error == false){
        if (selected_gender == "Male"){
            total_cal = (66+13.7*weight+5*height-6.5*age)*1.2;   
        } else{
            total_cal = (655+9.6*weight+1.8*height-4.7*age)*1.2;
        }
        total_cal = Math.round(total_cal)
        document.getElementById('error').textContent=''
        document.getElementById('result').textContent=`Ιδανικές ημερίσιες θερμίδες: ${total_cal}`
        
    }
    else{
        document.getElementById('result').textContent=''
        document.getElementById('error').textContent='Επιλέξτε φύλλο';
    }
}