
















function checkNumberType(){

    const helloGeeks = prompt("ведите число");

    if(!isNaN(helloGeeks)){
        const num = parseFloat(helloGeeks);

        if(num % 2 === 0) {
            alert('четное')
        }else{
            alert("нечетное")
        }
        if(num > 0) {
            alert('положительное')
        }else if(num <0 ){
            alert("отрицательное")
        }else{
            alert("ноль")
        }
    }

    ш

};



checkNumberType()



















