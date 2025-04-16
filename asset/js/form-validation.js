$(document).ready(function() {
    function showError(element, errorMsg) {
        $(element).addClass("input-error");
        $("#" + element.id + "Error").text(errorMsg).show();
    }
    
    function hideError(element) {
        $(element).removeClass("input-error");
        $("#" + element.id + "Error").hide();
    }

    function countWords(text) {
        return text.split(/\s+/).filter(function(word) {
            return word.length > 0;
        }).length;
    }

    // Validasi Nama
    $("#name").on("input", function() {
        const name = $(this).val().trim();
        if (name.length > 50) {
            showError(this, "Nama tidak boleh lebih dari 50 karakter!");
        } else {
            hideError(this);
        }
    });

    // Validasi Email
    $("#email").on("input", function() {
        const email = $(this).val().trim();
        if (email !== "") {
            const emailRegex = /@gmail\.com$/;
            if (!emailRegex.test(email)) {
                showError(this, "Email harus menggunakan @gmail.com!");
            } else {
                hideError(this);
            }
        } else {
            hideError(this);
        }
    });

     // Validasi Input Nomor
    $("#phone").on("input", function() {
        let inputVal = $(this).val();
        let numericVal = inputVal.replace(/\D/g, '');
        
        if (inputVal !== numericVal) {
            $(this).val(numericVal);
        }
        
        const phone = $(this).val().trim();
        if (phone !== "") {
            if (phone.length < 10) {
                showError(this, "Nomor telepon minimal 10 digit!");
            } else if (phone.length > 15) {
                showError(this, "Nomor telepon maksimal 15 digit!");
            } else {
                hideError(this);
            }
        } else {
            hideError(this);
        }
    });

    // Validasi Pesan
    $("#message").on("input", function() {
        const message = $(this).val().trim();
        if (message !== "") {
            const wordCount = countWords(message);
            
            if (wordCount > 100) {
                showError(this, "Pesan tidak boleh lebih dari 100 kata! (Saat ini: " + wordCount + " kata)");
            } else {
                hideError(this);
            }
        } else {
            hideError(this);
        }
    });

    // Form
    $("#contactForm").submit(function(event) {
        event.preventDefault();
        
        let isValid = true;
        let errorMessage = "";

        $(".contact_input").removeClass("input-error");
        $(".error-message").hide();

        // Validasi semua saat submit
        const fields = [
            {
                id: "name",
                value: $("#name").val().trim(),
                validations: [
                    { condition: value => value === "", message: "Nama wajib diisi!" },
                    { condition: value => value.length > 50, message: "Nama tidak boleh lebih dari 50 karakter!" }
                ]
            },
            {
                id: "email",
                value: $("#email").val().trim(),
                validations: [
                    { condition: value => value === "", message: "Email wajib diisi!" },
                    { condition: value => value !== "" && !/@gmail\.com$/.test(value), message: "Email harus menggunakan @gmail.com!" }
                ]
            },
            {
                id: "phone",
                value: $("#phone").val().trim(),
                validations: [
                    { condition: value => value === "", message: "Nomor telepon wajib diisi!" },
                    { condition: value => value !== "" && !/^\d+$/.test(value), message: "Nomor telepon hanya boleh berisi angka!" },
                    { condition: value => value !== "" && (value.length < 10 || value.length > 15), message: "Nomor telepon harus terdiri dari 10-15 digit!" }
                ]
            },
            {
                id: "message",
                value: $("#message").val().trim(),
                validations: [
                    { condition: value => value === "", message: "Pesan wajib diisi!" },
                    { condition: value => value !== "" && countWords(value) > 100, message: "Pesan tidak boleh lebih dari 100 kata!" }
                ]
            }
        ];

        // Validasi untuk setiap field
        for (const field of fields) {
            for (const validation of field.validations) {
                if (validation.condition(field.value)) {
                    if (isValid) {
                        errorMessage = validation.message;
                        isValid = false;
                    }
                    $("#" + field.id).addClass("input-error");
                    $("#" + field.id + "Error").text(validation.message).show();
                    break;
                }
            }
        }

        if (!isValid) {
            alert(errorMessage);
            return false;
        }
        
        alert("Formulir berhasil dikirim!");
        this.reset();
        $(".error-message").hide();
        return true;
    });

    $(".contact_input").on("input", function() {
        $(this).removeClass("input-error");
    });
});