function authenticate(username,password){

    if(username=="ravi" && password == "Kiran"){
        return true;
    }
    else
    {
        return false;
    }
    

}
var result=authenticate("ravi","Kiran");
console.log(result);