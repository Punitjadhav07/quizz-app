document.addEventListener("DOMContentLoaded", () => {
    generateOTP();

    // Auto move to next input field after typing
    const inputs = document.querySelectorAll(".otp");
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === "Backspace" && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // Allow pasting full OTP
    inputs.forEach((input, index) => {
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = (e.clipboardData || window.clipboardData).getData('text');
            const pasteValues = pasteData.split('');
            pasteValues.forEach((char, idx) => {
                if (idx < inputs.length) {
                    inputs[idx].value = char;
                }
            });
        });
    });
});

// Generate and save OTP
function generateOTP() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    console.log("Generated OTP:", otp);
    localStorage.setItem("otp", otp);
}

// Validate entered OTP
function verifyOTP() {
    const storedOTP = localStorage.getItem("otp");
    if (!storedOTP) {
        alert("No OTP found. Please request again.");
        return;
    }

    let userOTP = '';
    for (let i = 1; i <= 6; i++) {
        const input = document.querySelector(`#otp${i}`);
        if (!input) {
            alert(`Input field #otp${i} is missing.`);
            return;
        }
        userOTP += input.value.trim();
    }

    if (userOTP === storedOTP) {
        
        window.location.href = "./verification.html"; // Adjust the URL as needed
    } else {
        alert("Incorrect OTP. Please try again!");
    }
}