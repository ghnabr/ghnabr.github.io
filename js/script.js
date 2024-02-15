document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("nav a");
    // click a scroll ke destination id
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            links.forEach(function (navLink) {
                navLink.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const convertBtn = document.getElementById("convertBtn");
    const reverseBtn = document.getElementById("reverseBtn");
    const resetBtn = document.getElementById("resetBtn");

    // convert celsius-fahrenheit
    function convertToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    // convert fahrenheit-celsius
    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // display hasil convertan
    convertBtn.addEventListener("click", function () {
        if (!celsiusInput.disabled) {
            const celsiusValue = parseFloat(celsiusInput.value);
            if (!isNaN(celsiusValue)) {
                const fahrenheitValue = convertToFahrenheit(celsiusValue);
                fahrenheitInput.value = fahrenheitValue.toFixed(2);
            }
        } else {
            const fahrenheitValue = parseFloat(fahrenheitInput.value);
            if (!isNaN(fahrenheitValue)) {
                const celsiusValue = convertToCelsius(fahrenheitValue);
                celsiusInput.value = celsiusValue.toFixed(2);
            }
        }
    });

    // reverse convertion
    reverseBtn.addEventListener("click", function () {
        const celsiusDisabled = celsiusInput.disabled;
        celsiusInput.disabled = !celsiusDisabled;
        fahrenheitInput.disabled = celsiusDisabled;
    
        const celsiusPlaceholder = celsiusInput.placeholder;
        const fahrenheitPlaceholder = fahrenheitInput.placeholder;
        celsiusInput.placeholder = fahrenheitPlaceholder;
        fahrenheitInput.placeholder = celsiusPlaceholder;
        const tempValue = celsiusInput.value;
        celsiusInput.value = fahrenheitInput.value;
        fahrenheitInput.value = tempValue;
    });

    // reset fields input
    resetBtn.addEventListener("click", function () {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    });
});