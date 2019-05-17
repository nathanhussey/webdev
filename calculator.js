let displayNum = document.querySelector(".num");
let wholeCal = document.querySelector('.whole-cal');
let operators = document.querySelector('.operators');
let input1;
let input2;
let calculation;
function removeZero(){
	if (displayNum.innerText === "0") {
		displayNum.innerText = " ";
	};
};

function numInput1(){
	wholeCal.addEventListener('click', function(event){
		if (event.target.className === "num digit") {
			removeZero();
			displayNum.innerText += event.target.innerText;
		}

		else if (event.target.className === "num"){
			operations(event);
		}


		event.stopPropagation();
	});
};

function operations(event) {
	if (event.target.innerText === "/") {
		input1 = displayNum.innerText;
		displayNum.innerText = "";
		displayNumber()

	}

	else if (event.target.innerText === "*") {
		input1 = displayNum.innerText;
		displayNum.innerText = "";
		displayNumber()
	}

	else if (event.target.innerText === "+") {
		input1 = displayNum.innerText;
		displayNum.innerText = "";
		displayNumber()
	}

	else if (event.target.innerText === "-") {
		input1 = displayNum.innerText;
		displayNum.innerText = "";
		displayNumber()
	}
	else if (event.target.innerText === "=") {
		if (input2.innerText === 'undefined'){

		}
		else {
			input1 = displayNum.innerText;
			
		}
		
	};
}
function displayNumber(){
	console.log(input1)
	wholeCal.addEventListener('click', function(event){
		if (event.target.className === "num digit") {
			input2 = displayNum.innerText;
			displayNumber();

			}
		else if(event.target.className === "num") {
			console.log(input1)
			calculated();

		}
		event.stopPropagation();

	});
}


function calculated(){
	console.log(input1)
	console.log(input2)
	if (event.target.innerText === "/"){
		calculation = parseInt(input1)/parseInt(input2);
		displayNum.innerText = calculation;
		
	}
	else if (event.target.innerText === "*"){
		calculation = parseInt(input1)*parseInt(input2)
		displayNum.innerText = calculation
		

	}

	else if (event.target.innerText === "-"){
		calculation = parseInt(input1)-parseInt(input2)
		displayNum.innerText = calculation
		
		
	}

	else if (event.target.innerText === "+"){
		calculation = parseInt(input1)+parseInt(input2);
		displayNum.innerText = calculation;
		
	}

	else if (event.target.innerText === "="){
		displayNum.innerText = calculation
		
	}
};
numInput1();
















