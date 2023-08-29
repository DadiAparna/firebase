const firebaseConfig = {
    apiKey: "AIzaSyA9rsIZZNLaZJwaXdW8YJ-AWVxqTNXnhe0",
    authDomain: "login-with-firebase-c1650.firebaseapp.com",
    projectId: "login-with-firebase-c1650",
    storageBucket: "login-with-firebase-c1650.appspot.com",
    messagingSenderId: "76548405674",
    appId: "1:76548405674:web:bb447eac69efd3196493d3"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()



function register() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    favorite_song = document.getElementById('favorite_song').value
    milk_before_cereal = document.getElementById('milk_before_cereal').value 
    
    
    
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta line!!')
        return
    }
    if (validate_field(full_name) == false  || validate_field(favorite_song) == false || validate_field(milk_before_cereal) == false ) {
        alert("one or more fields is Outta line")
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {

            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                email: email,
                full_name: full_name,
                favourite_song : favourite_song,
                last_login: Date.now()

            }

            database_ref.child('users/' + user.uid)


            alert('User Created!')

        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}

function validate_email(email) {

    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    }
    else {
        return false
    }

}

function validate_password(password) {

    if (password < 6) {
        return false
    }
    else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true

    }
}

