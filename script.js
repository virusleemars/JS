/*
	Простой калькулятор
	Вводятся два числа и оператор +-/*
*/

const OPERATOR_TRUE = '+-/*';

// Функция ввода числа
function inputNumber(text) {
	let number;
	do { 
		number = prompt('введите ' + text, '');
	} while (isNaN(number) || (number == null) || (number == '') );
	return number;
}

// Функция проверки корректности оператора
function isOperator(text) {
	return ( (text.length == 1) && (OPERATOR_TRUE.indexOf(text) >= 0) ) 
}

// Функция ввода оператора
function inputOperator(text) {
	let oper;
	do { 
		oper = prompt('введите ' + text, '');
		oper = oper.trim();
	} while ( (!isOperator(oper)) || (oper == null) || (oper == '') );
	return oper;
}


let number1 = inputNumber('1 число');
let number2 = inputNumber('2 число');
let operator = inputOperator('оператор [+-/*]');

switch(operator) {
	case '+':
		alert(+number1 + +number2);
		break;
	
	case '-':
		alert(+number1 - +number2);
		break;
	
	case '/':
		if (+number2 != 0)
			alert(+number1 / +number2);
		else
			alert('Деление на 0 !!!');
		break;
	
	case '*':
		alert(+number1 * +number2);
		break;	
	
	default:
		alert('ERROR ?!');
}

