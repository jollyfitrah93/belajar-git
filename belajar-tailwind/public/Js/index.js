
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {
      alert("Please fill in all fields");
      return false;
    }

    if (username == "admin" && password == "password123") {
      alert("Login successful");
      return true;
    } else {
      alert("Incorrect username or password");
      return false;
    }
  }