function verifyPassword() {
  var pw = document.getElementById("pswd").value;
  //check empty password field
  if (pw == "sollentuna"){
    //document.getElementById("message").innerHTML = "**Correct password!";
    //return false;
    window.location.assign("index.html");
    return false;

  }

  else {
    document.getElementById("message").innerHTML = "***Wrong password!";
    return false;
  };
}
