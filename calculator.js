var equalsHit = false;
function appendToResult(value){
    const result = document.getElementById('result');
    if(equalsHit){
        result.value = '';
        equalsHit = false;
    }
    result.value += value;
}

function calculateResult(){
    const result = document.getElementById('result'); 
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
    equalsHit = true;
}

function clearResult(){
    const result = document.getElementById('result');
    result.value = '';
    equalsHit = false;
}