var student_list_array=[];
function submit(){
var first_student=document.getElementById("name_student_1").value;
var second_student=document.getElementById("name_student_2").value;
var third_student=document.getElementById("name_student_3").value;
var fourth_student=document.getElementById("name_student_4").value;
student_list_array.push(first_student);
student_list_array.push(second_student);
student_list_array.push(third_student);
student_list_array.push(fourth_student);
console.log(student_list_array);
document.getElementById("button_submit").style.display="none";
document.getElementById("button_sort").style.display="inline-block";
document.getElementById("div_display").innerHTML=student_list_array;
}
function sort(){
    student_list_array.sort();
    console.log(student_list_array);
    document.getElementById("div_display").innerHTML=student_list_array;
}