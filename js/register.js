function validate() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var phonenumber = document.getElementById("phonenumber").value;
	var age = document.getElementById("age").value;

	sessionStorage.firstname = firstname;
	sessionStorage.lastname = lastname;
	sessionStorage.email = email;
	sessionStorage.phonenumber = phonenumber;
	sessionStorage.age = age;

	var accessArray = document.getElementById("radio_access").getElementsByTagName("input");
	for (var i=0; i < accessArray.length; i++) {
		if (accessArray[i].checked == true) {
				sessionStorage.access = accessArray[i].value;
			}
	}

	var lavender = document.getElementById("lavender").checked;
	var tulip = document.getElementById("tulip").checked;
	var callaLilly = document.getElementById("calla_lilly").checked;

	sessionStorage.lavender = lavender;
	sessionStorage.tulip = tulip;
	sessionStorage.callaLilly = callaLilly;

	var payment = document.getElementById("payment")
	sessionStorage.payment = payment.value

	var error_message = ""
	//R1
	if (firstname.match("^[A-Z a-z á à ả ã ạ ă ắ ằ ẳ ẵ ặ â ấ ầ ẩ ẫ ậ ú ù ủ ũ ụ ư ứ ừ ử ữ ự ó ò ỏ õ ọ é è ẻ ẽ ẹ ê ế ề ể ễ ệ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ í ì ỉ ĩ ị ý ỳ ỷ ỹ ỵ đ]{1,30}$") == null) {
		error_message += "Họ của bạn không thể chứa số hay kí tự đặc biệt <3<br>";
	}
	if (lastname.match("^[A-Z a-z á à ả ã ạ ă ắ ằ ẳ ẵ ặ â ấ ầ ẩ ẫ ậ ú ù ủ ũ ụ ư ứ ừ ử ữ ự ó ò ỏ õ ọ é è ẻ ẽ ẹ ê ế ề ể ễ ệ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ í ì ỉ ĩ ị ý ỳ ỷ ỹ ỵ đ]{1,30}$") == null) {
		error_message += "Tên của bạn không thể chứa số hay kí tự đặc biệt <3<br>";
	}
	//R2
	if (email.match("^[a-zA-Z0-9]*@[a-zA-Z0-9]*[\\.][a-zA-Z0-9]*$") == null) {
		error_message += "Email không hợp lệ mất rùi;((<br>";
	}
	//R3
	if (phonenumber.match("^((\\+84|0|84)[0-9]{9,10})$") == null) {
		error_message += "Số điện thoại khlông tồn tại<br>";
	}
	//R4
	if (age.match("^((([0-9])|([0-9][0-9])|(1[0-4][0-9]))|(150))$") == null) {
		error_message += "Độ tuổi không được quá 150<br>";
	}

	if (error_message == "") {
		return true
	} else {
		document.getElementById("error").innerHTML = error_message;
		return false
	}
}

function prefillData() {
	if (sessionStorage.firstname != null) {
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lastname").value = sessionStorage.lastname;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("phonenumber").value = sessionStorage.phonenumber;
		document.getElementById("age").value = sessionStorage.age;
		switch (sessionStorage.access) {
			case "facebook":
				document.getElementById("facebook").checked = true;
				break;
			case "instagram":
				document.getElementById("instagram").checked = true;
				break;
			case "pinterrest":
				document.getElementById("pinterrest").checked = true;
				break;
		}
		if (sessionStorage.lavender == "true"){
			document.getElementById("lavender").checked = true;
		}
		if (sessionStorage.tulip == "true"){
			document.getElementById("tulip").checked = true;
		}
		if (sessionStorage.callaLilly == "true"){
			document.getElementById("calla_lilly").checked = true;
		}
		document.getElementById("payment").value = sessionStorage.payment; 
	}

}

function init() {
	var regForm = document.getElementById("register_form");
	regForm.onsubmit = validate;
	prefillData()
}

window.onload = init;