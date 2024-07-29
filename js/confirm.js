function loadDataAndCalculatePrice() {
	totalPrice = 0;
	var confirm_name = document.getElementById("confirm_name")
	var confirm_email = document.getElementById("confirm_email")
	var confirm_phonenumber = document.getElementById("confirm_phonenumber")
	var confirm_age = document.getElementById("confirm_age")
	var confirm_access = document.getElementById("confirm_access")
	var confirm_item = document.getElementById("confirm_item")
	var payment = document.getElementById("confirm_payment")
	var total = document.getElementById("confirm_total")
	var discount_items = document.getElementById("discount_items")
	var discount_age = document.getElementById("discount_age")
	var incress_paypal = document.getElementById("incress_paypal")

	confirm_name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
	confirm_email.textContent = sessionStorage.email;
	confirm_phonenumber.textContent = sessionStorage.phonenumber;
	confirm_age.textContent = sessionStorage.age;
	confirm_access.textContent = sessionStorage.access;

	var yourpick = ""
	var count = 0
	if (sessionStorage.lavender == "true" ) {
		totalPrice += 50;
			yourpick += "lavender, ";
			count += 1;
	}
	if (sessionStorage.tulip == "true" ) {
		totalPrice += 40;
			yourpick += "tulip, ";
			count += 1;
	}
	if (sessionStorage.callaLilly == "true" ) {
		totalPrice += 40;
			yourpick += "callalilly, ";
			count += 1;
	}

	var	discountMessageItems = ""
	var	discountMessageAge = ""
	var	incressMessagePaypal = ""

	if (count >= 3) {
		totalPrice = totalPrice * 80/100;
		discountMessageItems = "Giảm giá 20% cho đơn hàng từ 3 sản phẩm trở lên<3"
	}

	if (sessionStorage.age <= 18) {
		totalPrice = totalPrice * 90/100;
		discountMessageAge = "Giảm giá 10% cho các bạn dưới 18 tuổi<3"
	}

	if (sessionStorage.payment == "paypal") {
		totalPrice = totalPrice * 110/100;
		incressMessagePaypal = "Giá trị đơn hàng bị tăng lên 10% do thanh toán bằng Paypal"
	}
	yourpick = yourpick.substring(0, yourpick.length - 2)
	confirm_item.textContent = yourpick;
	payment.textContent = sessionStorage.payment;
	total.textContent = totalPrice;
	discount_items.textContent = discountMessageItems;
	discount_age.textContent = discountMessageAge;
	incress_paypal.textContent = incressMessagePaypal;

}

function cancelButton() {
	window.location = "register.html";
}

function init() {
	loadDataAndCalculatePrice();
	var cancel = document.getElementById("cancel_button");
	cancel.onclick = cancelButton;
}

window.onload = init;