
//variables globales
var budget  = 0;
var expense = 0;
var balance = 0;
var valuesForm ={};


//Obtenet objeto formulario
const formCalc = document.getElementById("formCalc");

//Obtener todos los valores del formulario
//Esta funcion retorna los valores del formulario como ub objeto
//luego se usa el principio de desutructuracion
const getDataFomr = ()=>{
let destiny = document.getElementById("InputDestiny").value;
let budgetVal = document.getElementById("InputBudget").value;
let accommodation = document.getElementById("InputAccommodation").value;
let transport = document.getElementById("InputTransport").value;
let food = document.getElementById("InputFood").value;
let tours = document.getElementById("InputTours").value;
let shopping = document.getElementById("InputShopping").value;
let other = document.getElementById("InputOthers").value;

valuesForm = {destiny,budgetVal,accommodation,transport,food,tours,shopping,other}
return valuesForm;
};

/**
 * calculate the traveler's expenses
 * @param e event 
 * @returns total expense
 * usa desustructuracion
 */
 const calculateExpense = function (e){
    e.preventDefault();
    
    
    const {destiny, budgetVal, accommodation,transport,food,tours,shopping,other}=getDataFomr();

    budget=budgetVal;

    expenses =  parseInt(accommodation) + parseInt(transport) + parseInt(food) + parseInt(tours) + parseInt(shopping) + parseInt(other); //sumar los gastos

    balance = parseInt(budget) - parseInt(expenses); //calcular el saldo

    printResult(); //pintar los resultados en la web
};

//limpiar el formulario, vaciar los campos
function resetForm(){
    formCalc.reset();
    document.getElementById("InputDestiny").value="";
}

//Pintar el resultado en la web ui, pinta las variables globales de la calculadora
function printResult(){
    let budgetUi = document.getElementById("spanBudget");
    budgetUi.innerText="$" + budget;
    let expenseUi = document.getElementById("spanExpense");
    expenseUi.innerText= "$" + expenses;
    let balanceUi = document.getElementById("spanBalance");
    balanceUi.innerText= "$" + balance;

    resetForm();
}


//Añadir listener para submit del formulario
formCalc.addEventListener("submit", calculateExpense);


