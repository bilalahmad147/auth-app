const signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password")


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

        .then(() => {
            console.log("User Successfully Registred")
        })

        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("User not registered")
        });
}

const loginUsingFb = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.email)
    }).catch(function (error) {
        console.log(error.message)
    });
}
