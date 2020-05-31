
var count=0;
var rootRef=firebase.database().ref().child("users");


var rootref1=firebase.database().ref().child("Status");

rootref1.on("child_added",snap => {

var email=snap.child("email").val();


var status=snap.child("status").val();


var p=parseInt(status);


if(p==1)
{

rootRef.on("child_added",snap =>{



var name=snap.child("name").val();
var email1=snap.child("email").val();
var number=snap.child("number").val();
var adderess=snap.child("adderess").val();


if(email==email1)
{
	$("#table_body").append("<tr><td>"+name+"</td><td>"+number+"</td><td>"+email+"</td><td>"+adderess+"</td></tr>");
	count=count+1;
	
	
}
});
window.alert(count);


}



});


