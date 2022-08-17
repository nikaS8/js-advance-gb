const text = "One:'Hi Mary.'    Two:'Oh, hi.' One:'How are you doing?' Two:'I'm doing alright. How about you?'"
const regexp = /'/gm;
const regexp1 = /(\W)'/gm;
let text1 = text.replace(regexp1, '$1"');
console.log(text1);


function rightAnswer(text) {
	let fail = document.getElementById(`fail${text}`);
	if (fail) {
		fail.parentNode.removeChild(fail);
	}
}

function showFail(text) {
	let lastChild = document.getElementById('form').lastChild;
	if(lastChild.id !== `fail${text}`) {
		let form = document.getElementById('form');
		form.insertAdjacentHTML("beforeend", `<div id="fail${text}">Wrong ${text} input!</div>`);
	}
}

function checkFailure(node, regex, failureText) {
	if(regex.test(node.value)) {
		node.style.border = "black solid 1px";
		rightAnswer(failureText);
		return ;
	} else {
		node.style.border = "red solid 3px";
		showFail(failureText)
		return false;
	}
}

function checkName() {
	let inputName = document.getElementById('name');
	const regex = /^[a-zA-Z]+$/;
	checkFailure(inputName, regex, 'letters');
}

function checkNumber() {
	let inputNumber = document.getElementById('phone');
	const regex = /\+7\(\d{3}\)\d{3}-\d{4}/;
	checkFailure(inputNumber, regex, 'numbers');
}

function checkEmail() {
	let inputEmail = document.getElementById('email');
	const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	checkFailure(inputEmail, regex, 'email');
}
