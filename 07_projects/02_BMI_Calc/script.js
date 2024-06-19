// take out value from inputs - event 
// button - click event 

// when a form is submitted it is submitted through GET or POST 
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent the default action for now.

    // we want two input values - height and weight using id. We want to extract values 
    // only when we submit the value. Otherwise it will record empty values on refreshing
    const height = parseInt(document.querySelector('#height').value); 
    const weight = parseInt(document.querySelector('#weight').value); 
    const results = document.querySelector('#results'); 

    if(height == '' || height<0 || isNaN(height)){ 
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight == '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.6){
            results.innerHTML = `<span>${bmi} <br> underweight </span>`;
        }
        else if(bmi < 24.9){
            results.innerHTML = `<span>${bmi} <br> normal range </span>`;
        }
        else{
            results.innerHTML = `<span>${bmi} <br> overweight </span>`;
        }
    }
})