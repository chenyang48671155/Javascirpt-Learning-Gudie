var d=new Date();
var time=d.getHours();
if (time<12){
    document.write("Good morning");   //当时间获取的"小时数"小于12时候输出Good morning
}
else if (time>=12&&time<18){
    document.write("Good afternoon"); 	//当获取的时间的"小时数"大于12和小于18满足条件时候输出Good afternoon
}
else{
    document.write("Good night");   //  当以上条件都不满足时候输出Good ninght
}
