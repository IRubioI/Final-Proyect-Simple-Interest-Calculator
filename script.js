function compute(){
/*This function calculate the interest of the investment and show to the user the values of  the diferent variables*/
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        /*This ckeck if the amount is negative and alert the user*/
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    }else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = "\<br\>If you deposit <span>"+principal+",</span>\<br\>at an interest rate of <span>"+rate+"%,</span>\<br\>You will receive an amount of <span>"+interest+",</span>\<br\>in the year <span>"+year+"</span>";
    document.getElementById("result").innerHTML=result;
    }
    
}
/*This function update the spam tag for the input type range*/
function updateRate(){

    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerHTML=rateval;
}
        