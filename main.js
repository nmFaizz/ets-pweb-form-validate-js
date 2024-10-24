document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()

    const name = document.getElementById("nama")
    const email = document.getElementById("email")
    const phoneNumber = document.getElementById("no-telepon")
    const posCode = document.getElementById("kodepos");
    const alamat = document.getElementById("alamat")

    const errorName = document.getElementById("namaError");
    const errorEmail = document.getElementById("emailError");
    const errorPhone = document.getElementById("noError");
    const errorPosCode = document.getElementById("kodeposError");
    const errorAddress = document.getElementById("alamatError")

    errorName.style.display = "none";
    errorEmail.style.display = "none";
    errorPhone.style.display = "none";
    errorPosCode.style.display = "none";
    errorAddress.style.display = "none";


    if (!validateName(name.value)) {
        errorName.style.display = "block";
        errorName.innerText = "Nama tidak boleh kosong dan harus berupa huruf";
    }

    if (!validateEmail(email.value)) {
        errorEmail.style.display = "block";
        errorEmail.innerText = "Email tidak valid";
    }

    if (!validatePhone(phoneNumber.value)) {
        errorPhone.style.display = "block";
        errorPhone.innerText = "Nomor telepon tidak valid. Harus diawali +62 dan 10 karakter";
    }

    if (!validatePostalCode(posCode.value)) {
        errorPosCode.style.display = "block";
        errorPosCode.innerText = "Kode pos harus terdiri dari 5 digit";
    }

    if (!validateAddress(alamat.value)) {
        errorAddress.style.display = "block"
        errorAddress.innerText = "Alamat tidak valid"
    }

});

const validateEmail = (email) => {
    const emailRgx = /\S+@\S+\.\S+/;
    return emailRgx.test(email) && email.length > 0;
}

const validateName = (name) => {
    const nameRgx = /^[a-zA-Z\s]*$/;
    return nameRgx.test(name) && name.length > 0;
}

const validatePhone = (phoneNumber) => {
    const phoneRgx = /^\+62\d{10,}$/; 
    return phoneRgx.test(phoneNumber) && phoneNumber.length > 0;
};

const validatePostalCode = (postalCode) => {
    const postalCodeRgx = /^\d{5}$/; 
    return postalCodeRgx.test(postalCode) && postalCode.length > 0;
};

const validateAddress = (address) => {
    const addrRgx = /^(?=.*\d)([A-Za-z0-9\s.,/,-]+(?:\s+[A-Za-z0-9.,/,-]+)*)\s+(\d+)\s*,?\s*([A-Za-z\s]+(?:\s+[A-Za-z\s]+)*)?$/
    return addrRgx.test(address) && address.length > 0
}
