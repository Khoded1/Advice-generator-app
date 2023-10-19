'use strict';
const adviceNum = document.querySelector('.advice_num');
const adviceQuote = document.querySelector('.advice_quote');

const getAdvice = function () {
	fetch(`https://api.adviceslip.com/advice`)
		.then(function (advices) {
			return advices.json();
		})
		.then(function (advices) {
			adviceNum.innerHTML = `<h2>#${advices.slip.id}</h2>`;
			adviceQuote.innerHTML = `<p>${advices.slip.advice}</p>`;
			// console.log(advices);
		});
};
getAdvice();
// getAdvice('getAdvice');
