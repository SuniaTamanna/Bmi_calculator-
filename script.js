function calculateBMI(){

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let result = document.getElementById("result");

    if(height==="" || weight==="" || height<=0 || weight<=0){
        result.innerHTML="Please enter valid values!";
        result.style.color="red";
        return;
    }

    let bmi = weight / ((height/100)*(height/100));
    bmi = bmi.toFixed(1);

    let status="";

    if(bmi<18.5){
        status="Underweight";
    }else if(bmi<25){
        status="Normal Weight";
    }else if(bmi<30){
        status="Overweight";
    }else{
        status="Obese";
    }

    result.style.color="#222";
    result.innerHTML=
    `BMI: <b>${bmi}</b><br>${status}`;
} 