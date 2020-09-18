const signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password")


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    
    .then((result)=>{
        console.log(result)
    })
    
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
      });
}

