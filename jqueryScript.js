function validateFormByAge(ageElem) {
	if ($(ageElem).val() >= 1 && $(ageElem).val() <= 100) {
		$(ageElem).css('border', '1px solid lightblue').css('color', '#254e77');
		return true;
	}
	return false;
}
function incorrectData(elem){
	$(elem).css('border', '1px solid red').focus().val('Incorrect!').css('color', 'red');
}
function sendDataByGetMethod() {
	let userData = {
		lName : $('#userLastNameGet').val(),
		fName : $('#userFirstNameGet').val(),
		age : $('#userAgeGet').val(),
		address : $('#userAddressGet').val()
	};
	$.ajax({
		contentType : 'application/json',
		url : '/formGet?lName=' + userData.lName
			+ '&fName=' + userData.fName + '&age=' + userData.age
			+ '&address=' + userData.address,
		success : function(data) {
			console.log('success');
			console.log(JSON.stringify(data));
		}
	});
}
function sendDataByPostMethod() {
	$.ajax({
		type : 'POST',
		data : JSON.stringify({
			lName : $('#userLastNamePost').val(),
			fName : $('#userFirstNamePost').val(),
			age : $('#userAgePost').val(),
			address : $('#userAddressPost').val()
		}),
		contentType : 'application/json',
		url : '/formPost',
		success : function(data) {
			console.log('success');
			console.log(JSON.stringify(data));
		}
	});
}

$('#sendButton1').bind('click', () => validateFormByAge(userAgeGet)? sendDataByGetMethod() : incorrectData(userAgeGet));
$('#sendButton2').bind('click', () => validateFormByAge(userAgePost)? sendDataByPostMethod() : incorrectData(userAgePost));



