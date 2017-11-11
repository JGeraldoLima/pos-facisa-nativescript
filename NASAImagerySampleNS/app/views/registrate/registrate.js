var frameModule = require("ui/frame");
var firebase = require("nativescript-plugin-firebase");

var page;

var emailField, passwordField;

exports.pageLoaded = function (args) {
    page = args.object;

    emailField = page.getViewById('email');
    passwordField = page.getViewById('password');
};


exports.createAnAccount = function () {
    firebase.createUser({
        email: emailField.text,
        password: passwordField.text
    }).then(
        function (result) {
            console.log(JSON.stringify({
                title: "User created",
                message: "userid: " + result.key
            }));
            var actualPage = frameModule.topmost();
            actualPage.navigate('views/login/login');
        },
        function (errorMessage) {
            console.log(JSON.stringify({
                title: "No user created",
                message: errorMessage
            }));
        }
    );
};

