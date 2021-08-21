const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const bmiOutput = document.getElementById('hasil-bmi');
const statusOutput = document.getElementById('status-bmi');

const calculateBMI = () => {
    const enteredHeight = +heightInput.value / 100;
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);
    bmiOutput.innerHTML = bmi;

    if (bmi >= 30) {
        statusOutput.innerHTML = "Obesitas";
    } else if (bmi >= 25) {
        statusOutput.innerHTML = "Gemuk";
    } else if (bmi >= 18.5) {
        statusOutput.innerHTML = "Normal";
    } else {
        statusOutput.innerHTML = "Kurus";
    }

    console.log(bmi);
};

const resetBMI = () => {
    heightInput.value = "";
    weightInput.value = "";
    bmiOutput.innerHTML = "Hasil BMI";
    statusOutput.innerHTML = "Status";
}

calculateBtn.addEventListener('click', calculateBMI);
resetBtn.addEventListener('click', resetBMI);