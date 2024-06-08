document.getElementById('simple-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    console.log(`Input 1: ${input1}, Input 2: ${input2}, Input 3: ${input3}`);
});

