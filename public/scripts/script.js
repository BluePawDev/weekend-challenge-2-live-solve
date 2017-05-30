console.log('js/jq sourced');

$(onReady);

function onReady() {
	$('.submit').on('click', function(event) {
		event.preventDefault();
		var firstNum = $('.inputOne').val();
		var secondNum = $('.inputTwo').val();
		var operator = $('.operator').val();
		console.log(firstNum, secondNum, operator);


		// capturing values in object


		// sending data to server
		calculate(firstNum, secondNum, operator);


	});
}

function calculate(firstValue, secondValue, operation) {
	var objToSend = {
		x: firstValue,
		y: secondValue,
		type: operation
	}

	$.ajax({
		type: 'POST',
		url: '/calculate',
		data: objToSend,
		success: function(response) {
			console.log(response);
		}
	})
}
