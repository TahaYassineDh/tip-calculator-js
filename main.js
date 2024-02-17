let billInput = document.querySelector("#bill-total");
let tipInput = document.querySelector("#tip");
let numberOfPeople = document.querySelector("#num").innerHTML;
let perPersonTotal = document.querySelector("#totalp").innerHTML;

const calculateBill = () => {
    let bill = parseFloat(billInput.value);
    let tip = parseFloat(tipInput.value) / 100 ;
    let total = bill * (1 + tip);
    document.querySelector("#totalp").innerHTML = total / parseInt(numberOfPeople);
}

const increasePeople = () => {
    console.log(numberOfPeople)
    numberOfPeople++; 
    document.querySelector("#num").innerHTML = numberOfPeople;
    calculateBill();
}

const decreasePeople = () => {
    if(numberOfPeople>1) {
        numberOfPeople--; 
        document.querySelector("#num").innerHTML = numberOfPeople;
        calculateBill();
    }

}