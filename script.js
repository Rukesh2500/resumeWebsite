function valid()
	{
		var RE_NAME=/^[A-Za-z]+(\s)+[A-Za-z]+$/;
		var RE_EMAIL = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
		var RE_CONTACT=/^(\d){10,11}$/;
		var RE_MSG=/^(\w)+$/;
		var name=document.getElementById("nm").value;
		if(name=="")
		{
			alert("Name cannot be blank ");
			return false;
		}
		if(!RE_NAME.test(name))
		{
		alert("name hasto be a combination of fnme and lname");
		return false;
		}
		var email=document.getElementById("em").value;
		if(email=="")
		{
			alert("Email cannot be blank ");
			return false;
		}
		if(!RE_EMAIL.test(email))
		{
			alert("Email should have proper validation");
			return false;
		}
		var cont=document.getElementById("ct").value;
		if(cont=="")
		{
			alert("Contact cannot be blank ");
			return false;
		}
		if(!RE_CONTACT.test(cont))
		{
			alert("Contact has to be a digit between 10 to 11");
			return false;
		}
		var msg=document.getElementById("msg").value;
		if(msg=="")
		{
			alert("Message cannot be blank ");
			return false;
		}
		if(!RE_MSG.test(msg))
		{
			alert("Message has to be alphanumeric");
			return false;
		
		
		}
	}