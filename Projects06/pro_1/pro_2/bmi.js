const form = document.querySelector("form")
// if we extract value here then we get empty vlaues

form.addEventListener("submit", function (e){
    e.preventDefault();
    const height  = parseInt(document.querySelector("#height").value)
    const weight  = parseInt(document.querySelector("#weight").value)
    const result  = document.querySelector("#results")


    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Enter a valid height value not ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Enter a valid height value not ${weight}`;
    }else{
        const bmi = (weight/((height * height)/10000)).toFixed(2)
        // result.innerHTML = `<span> ${bmi} </span>`;
        
    if(bmi > 24.9){
        result.innerHTML = `<span> ${bmi} <br> you are overweight </span>`;
    }else if (bmi < 18.6){
        result.innerHTML = `<span> ${bmi} <br> you are underweight </span>`;
    }else{
        result.innerHTML = `<span> ${bmi} <br> you are normal </span>`;
    }
    }      
})