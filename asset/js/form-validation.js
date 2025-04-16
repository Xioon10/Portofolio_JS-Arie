$(document).ready(function() {
    // Validasi input telepon langsung
    $("#phone").on("input", function() {
        let inputVal = $(this).val();
        let numericVal = inputVal.replace(/\D/g, '');
        
        if (inputVal !== numericVal) {
            $(this).val(numericVal);
        }
    });

    // Form
    $("#contactForm").submit(function(event) {
        let isValid = true;
        let errorMessage = "";

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
        const message = $("#message").val().trim();

        // Reset
        $(".contact_input").css("box-shadow", "");

        // Nama
        if (name === "") {
            isValid = false;
            errorMessage = "Nama wajib diisi!";
            $("#name").css("box-shadow", "0 0 0 2px #ff6b6b");
        } else if (name.length > 50) {
            isValid = false;
            errorMessage = "Nama tidak boleh lebih dari 50 karakter!";
            $("#name").css("box-shadow", "0 0 0 2px #ff6b6b");
        }

        // Email
        if (email === "") {
            if (isValid) {
                isValid = false;
                errorMessage = "Email wajib diisi!";
                $("#email").css("box-shadow", "0 0 0 2px #ff6b6b");
            }
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (isValid) {
                    isValid = false;
                    errorMessage = "Format email tidak valid!";
                    $("#email").css("box-shadow", "0 0 0 2px #ff6b6b");
                }
            }
        }

        // Phone
        if (phone === "") {
            if (isValid) {
                isValid = false;
                errorMessage = "Nomor telepon wajib diisi!";
                $("#phone").css("box-shadow", "0 0 0 2px #ff6b6b");
            }
        } else {
            const phoneRegex = /^\d+$/;
            if (!phoneRegex.test(phone)) {
                if (isValid) {
                    isValid = false;
                    errorMessage = "Nomor telepon hanya boleh berisi angka!";
                    $("#phone").css("box-shadow", "0 0 0 2px #ff6b6b");
                }
            } else if (phone.length < 10 || phone.length > 15) {
                if (isValid) {
                    isValid = false;
                    errorMessage = "Nomor telepon harus terdiri dari 10-15 digit!";
                    $("#phone").css("box-shadow", "0 0 0 2px #ff6b6b");
                }
            }
        }

        // Pesan
        if (message === "") {
            if (isValid) {
                isValid = false;
                errorMessage = "Pesan wajib diisi!";
                $("#message").css("box-shadow", "0 0 0 2px #ff6b6b");
            }
        }

        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
            return false;
        }
        alert("Formulir berhasil dikirim!");
        return true;
    });

    $(".contact_input").on("input", function() {
        $(this).css("box-shadow", "");
    });
});
