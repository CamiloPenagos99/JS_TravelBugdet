
//variables globales

var budget  = 0;
var expense = 0;
var balance = 0;
//Obtenet objeto formulario
const formCalc = document.getElementById("formCalc");


/**
 * calculate the traveler's expenses
 * @param e event 
 * @returns total expense
 */
 const calculateExpense = function (e){
    e.preventDefault();
    let destiny = document.getElementById("InputDestiny").value;
    let budgetVal = document.getElementById("InputBudget").value;
    let accommodation = document.getElementById("InputAccommodation").value;
    let transport = document.getElementById("InputTransport").value;
    let food = document.getElementById("InputFood").value;
    let tours = document.getElementById("InputTours").value;
    let shopping = document.getElementById("InputShopping").value;
    let other = document.getElementById("InputOthers").value;
    
    //console.log("expenses:", destiny, budget, accommodation,transport,food,tours,shopping,other);

    budget=budgetVal;

    expenses =  parseInt(accommodation) + parseInt(transport) + parseInt(food) + parseInt(tours) + parseInt(shopping) + parseInt(other); //sumar los gastos

    balance = parseInt(budget) - parseInt(expenses); //calcular el saldo

    printResult(); //pintar los resultados en la web
};

//Pintar el resultado en la web ui, pinta las variables globales de la calculadora
function printResult(){
    let budgetUi = document.getElementById("spanBudget");
    budgetUi.innerText=budget;
    let expenseUi = document.getElementById("spanExpense");
    expenseUi.innerText=expenses;
    let balanceUi = document.getElementById("spanBalance");
    balanceUi.innerText=balance;

    console.log("pintar");
}


//Añadir listener para submit del formulario
formCalc.addEventListener("submit", calculateExpense);


