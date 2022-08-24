window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
    const btn = document.getElementById("convertButton");
    btn.addEventListener("click",convertButtonClicked);
    const celsInput = document.getElementById("cInput");
    const fahrInput = document.getElementById("fInput");

    celsInput.addEventListener("input",function (){clearTextbox(fahrInput);});
    fahrInput.addEventListener("input",function (){clearTextbox(celsInput);});

}
function clearTextbox(textInput) {
    textInput.value = "";
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9/5 +32;
}

function convertFtoC(degreesFahrenheit) {
    return (degreesFahrenheit-32) * 5/9;
}
function convertButtonClicked() {
    const celsInput = document.getElementById("cInput");
    const fahrInput = document.getElementById("fInput");
    const weatherImg = document.getElementById("weatherImage");
    const errMsg = document.getElementById("errorMessage");
    errMsg.innerHTML = "";
    if(celsInput.value.length>0){
        const celsius = parseFloat(celsInput.value);
        if(!isNaN(celsius)) {
            fahrInput.value = convertCtoF(celsius);
        }
        else{
            errMsg.innerHTML = celsInput.value + " is not a number";
        }
    }
    else if (fahrInput.value.length>0){
        const fahrenheit = parseFloat(fahrInput.value);
        if (!isNaN(fahrenheit)){
            celsInput.value = convertFtoC(fahrenheit);
        }
        else{
            errMsg.innerHTML = fahrInput.value + " is not a number";
        }
    }
    const fahr = parseFloat(fahrInput.value);
    if(!isNaN(fahr)){
        if(fahr<32.0){
            weatherImg.src = "cold.png";
            weatherImg.alt = "Cold";
        }
        else if(fahr>50.0){
            weatherImg.src = "warm.png";
            weatherImg.alt = "Warm";
        }
        else{
            weatherImg.src = "cool.png";
            weatherImg.alt = "Cool";
        }
    }

}
