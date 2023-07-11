const formAppointment = document.getElementById("form-appointment");
const formNewsletter = document.getElementById("form-newsletter");

const validateAppointmentForm = () => {

	const lastName = document.getElementById("txtNom");
	const firstName = document.getElementById("txtPrenom");
	const customerEmail = document.getElementById("email");
	const phoneNumber = document.getElementById("numTel");
	const animalName = document.getElementById("txtAnimal");
	const date = document.getElementById("dateRdv");
	const time = document.getElementById("selHeure");

	const lastNameValue = lastName.value.trim();
	const firstNameValue = firstName.value.trim();
	const customerEmailValue = customerEmail.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();
	const animalNameValue = animalName.value.trim();
	const dateValue = date.value.trim();
	const timeValue = time.value.trim();

	let noError = true;

	if (lastNameValue === "") {
		setError(lastName, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(lastName);
	}

	if (firstNameValue === "") {
		setError(firstName, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(firstName);
	}

	if (customerEmailValue === "") {
		setError(customerEmail, "Ce champ est requis.");
		noError = false;
	} else if (!isValidEmail(customerEmailValue)) {
		setError(customerEmail, "Adresse courriel invalide.");
		noError = false;
	} else {
		setSuccess(customerEmail);
	}

	if (phoneNumberValue === "") {
		setError(phoneNumber, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(phoneNumber);
	}

	if (animalNameValue === "") {
		setError(animalName, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(animalName);
	}

	if (dateValue === "") {
		setError(date, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(date);
	}

	if (timeValue === "") {
		setError(time, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(time);
	}

	return noError;
};

const validateNewsletterForm = () => {
	
	const email = document.getElementById("courriel");

	const emailValue = email.value.trim();

	let noError = true;

	if (emailValue === "") {
		setError(email, "Une adresse courriel est requise.");
		noError = false;
	} else if (!isValidEmail(emailValue)) {
		setError(email, "Adresse courriel invalide.");
		noError = false;
	} else {
		setSuccess(email);
	}

	return noError;
};

const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errorMessage");

	errorDisplay.innerText = message;
	inputControl.classList.add("error");
	inputControl.classList.remove("success");
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errorMessage");

	errorDisplay.innerText = "";
	inputControl.classList.remove("error");
	inputControl.classList.add("success");
};
