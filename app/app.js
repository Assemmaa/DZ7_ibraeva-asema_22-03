function sum(a, c) {
    return a + c;
}


function minus(a, c) {
    return a - c;
}

function multiply(a, c) {
    return a * c;
}


function division(a, c) {
    return a / c;
}

const operation = {
    sum: '+',
    minus: '-',
    multiply: '*',
    division: '/',
}

function calculate({a, c, operation}) {
    let result;


    switch (operation) {

        case operation.sum:
            result = sum(a, c);
            break;



        case operation.minus:
            result = minus(a, c);
            break;


        case operation.multiply:
            result = multiply(a, c);
            break;


        case operation.division:
            result = division(a, c);
            break;

    }

    return result;
}
const inputANode = document.querySelector('.js-input-a');
const inputCNode = document.querySelector('.js-input-c');
const selectNode = document.querySelector('.js-select-operation')
const btnResultNode = document.querySelector('.js-input-result');
const outputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function (){
    const a = Number(inputANode.value);
    const c = Number(inputCNode.value);
    const operation = selectNode.value;

    const  result = calculate({
        a,
        c,
        operation

    });
    console.log(result);
    outputNode.innerHTML
});
