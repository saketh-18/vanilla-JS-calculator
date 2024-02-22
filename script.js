let numbers = document.querySelectorAll('[data-operand]');
let str = document.getElementById('equation');
let period = document.querySelector('[data-period]');
let clear = document.getElementById('clear');
let operators = document.querySelectorAll('[data-operator]');
let slice = document.getElementById('delete');
let equal = document.getElementById('equal');


// console.log(clear)
// console.log(period)
// console.log(operators)

//evaluatin expressions
equal.addEventListener('click' , () => {
    str.innerHTML = eval(str.innerHTML.toString());
})

//deleting one element
slice.addEventListener('click' , () => {
    str.innerHTML = str.innerHTML.toString().slice(0 , -1);
})

//entering operator
operators.forEach((operator) => {
    operator.addEventListener('click' , (e) => {
        if((str.innerHTML.toString().includes("+") || str.innerHTML.toString().includes("-")) || (str.innerHTML.toString().includes("/") || str.innerHTML.toString().includes("*"))){
            str.innerHTML = str.innerHTML;
        }
        else if(str.innerHTML.toString() == "") {
            str.innerHTML = str.innerHTML;
        }
        else {
            str.innerHTML = str.innerHTML.toString() + e.target.innerHTML;
        }
    })
})


//clearing input
clear.addEventListener('click' , () => {
    str.innerHTML = "";
})

//entering period
period.addEventListener('click' , (e) => {
    if(str.innerHTML.toString().includes('.')){
        str.innerHTML = str.innerHTML;
    }
    else {
        str.innerHTML = str.innerHTML.toString() + e.target.innerHTML.toString();
    }
})

//entering numbers
numbers.forEach((num) => {
    num.addEventListener('click' , (e) => {
        str.innerHTML = str.innerHTML.toString() + e.target.innerHTML; 
    })
})
