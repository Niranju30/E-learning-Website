function auth()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="admin@gmail.com"&&password=="admin123"){
        window.location.assign("video.html");
        alert("Login Successful");
    }
    else{
        alert("Invalid Authentication");
    return;    }
}