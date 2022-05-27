function  validation(event)
{
    event.preventDefault()
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="aphs" && password=="ict201")
    {
        window.location.replace("Mainpage.html")
    }
    else {
        alert("Incorrect username or password");
        return;
    }
}