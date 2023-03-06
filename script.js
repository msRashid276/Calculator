// Display number in textbox

function displaynumber(num){
    result.value+=num
}


// clear text box

function clearbox() {
    result.value="";
}


// evaluation

function evaluation() {
    // number=result.value
    // output=eval(number)
    // result.value=output
    result.value=eval(result.value)
}

// clear one by one

function clearone() {
    curr_exp=result.value
    result.value=curr_exp.slice(0,-1)
}