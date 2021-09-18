function validateForm(){
        var fname = document.getElementById("fname").value.trim();
        var lname = document.getElementById("lname").value.trim();
        var phoneno = document.getElementById("phoneno").value.trim();
        var email = document.getElementById("email").value.trim();
        var pass = document.getElementById("pass").value.trim();
        var confirmpass = document.getElementById("confirmpass").value.trim();
        var newsletter = document.getElementById("newsletter");
        var sport = document.getElementById("sport").value.trim();
        var language=document.getElementsByName("language");
        var selectedLanguage="";
        for(var i=0;i<language.length;i++){
            if(language[i].checked==true)
                selectedLanguage+=language[i].value+" ";
        }

        if(fname==""){
            alert("First Name field cannot be empty");
            return false;
        }
        if(lname==""){
            alert("Last Name field cannot be empty");
            return false;
        }
        if(phoneno==""){
            alert("Phone Number field cannot be empty");
            return false;
        }        
        if(phoneno.length!=10){
            alert("Phone Number should be of 10 digits only");
            return false;
        }
        for(var i=0;i<phoneno.length;i++){
            if(phoneno.charCodeAt(i)<48 || phoneno.charCodeAt(i)>57){
                alert("Phone Number can only contains digits: ");
                return false;
            }
        }
        if(email==""){
            alert("Email field cannot be empty");
            return false;
        }
        var re=/\S+@\S+\.\S+/;
        if(!re.test(email)){
            alert("Please enter a valid email");
            return false;
        }
        if(pass==""){
            alert("Password field cannot be empty");
            return false;
        }
        if(pass.length<8){
            alert("Minimum Password length is 8 characters");
            return false;
        }
        if(confirmpass==""){
            alert("Confirm Password field cannot be empty");
            return false;
        }
        if(pass!=confirmpass){
            alert("Both Passwords are not matching");
            return false;
        }
        if(sport==""){
            alert("Please Select Your Favourite Sport");
            return false;
        }
        if(selectedLanguage==""){
            alert("Please Select Your Favourite Programming Language");
            return false;
        }  

        var nl;
        if(newsletter.checked)
            nl="Yes";
        else
            nl="No";

        alert("Registration Successful! Here are your details:\nFirst Name: "+fname
        +"\nLast Name: "+lname+
        "\nPhone No.: "+phoneno
        +"\nEmail: "+email
        +"\nPassword: "+pass
        +"\nConfirmed Password: "+confirmpass
        +"\nSubscribed to Newsletter : "+nl+
        "\nSport: "+sport+"\nLanguage: "+selectedLanguage);
}