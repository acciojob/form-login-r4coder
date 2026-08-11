
function getFormvalue() {
    //Write your code here
    let form=document.getElementById("form1");

	form.addEventListener("submit",function(event)){
		event.preventDefault();

		alert(
            form.elements["fname"].value + " " +form.elements["lname"].value;
		)
    }

}
