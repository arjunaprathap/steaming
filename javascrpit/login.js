function validateForm(){
    var email=document.forms["myform"]["email"];
    var x=email.value;
    var atposition=x.indexOf('@');
    var dotposition=x.lastIndexOf('.');
    var password=document.forms["myform"]["password"]





    if(atposition<1||dotposition<atposition+2||dotposition+2>=x.length)
    {
        alert('Please Enter a valid Email')
        email.focus();
        return false
    }
    if(password.value==""){
        alert('Enter your Password')
        password.focus();
        return false;
    }
    if(password.value<8){
        alert('Required min 8 characters')
        password.focus();
        return false;
    }
        

    
    




}