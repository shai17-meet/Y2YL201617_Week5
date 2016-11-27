///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES
var tempurature= 98.6;
tempurature+=5;
tempurature*=3;
tempurature-=20;
alert(tempurature);
///2. DATA STRUCTURES
var days_of_the_week=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
days_of_the_week[0] = "domingo";
days_of_the_week[1] = "lunes";
days_of_the_week[2] = "martes";
days_of_the_week[3] = "miercoles";
days_of_the_week[4] = "Jueves";
days_of_the_week[5] = "viernes";
days_of_the_week[6] = "sabado";
///3. FUNCTIONS & CONDITIONAL STATEMENTS
var days_of_the_week=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
function DoIHaveToGoToSchoolToday(index){
if (index<6){
alert("yes, today is "+days_of_the_week[index])
}
if(index==6){
alert("no, today is "+days_of_the_week[index])
}
}

///4.  LOOPS

var price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52]
for(var i=0; i<12; i++){
var j=price_of_Gasoline[i]*40
console.log(j)
}
