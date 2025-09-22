/* ===================== Part 2: JS Functions & Scope ===================== */

/* Global variable */
let animationActive = false;

/* Function to toggle box animation */
function toggleBoxAnimation() {
    const box = document.getElementById('box');
    animationActive = !animationActive; // update global scope

    if (animationActive) {
        box.classList.add('animate'); // trigger CSS animation
    } else {
        box.classList.remove('animate');
    }

    return animationActive; // return value demonstrates function output
}

/* Function with parameters & return value: simple addition */
function addNumbers(a, b) {
    const sum = a + b; // local scope
    return sum; // return value
}

/* ===================== Part 3: Event Listeners ===================== */

document.getElementById('animateBtn').addEventListener('click', () => {
    const status = toggleBoxAnimation();
    console.log('Animation active?', status);
});

document.getElementById('calcBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = addNumbers(num1, num2);
        document.getElementById('result').textContent = `Result: ${result}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
    }
});
