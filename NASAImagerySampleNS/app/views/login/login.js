var frameModule = require("ui/frame");
var firebase = require("nativescript-plugin-firebase");

var page, foto;

var emailField, passwordField;

exports.pageLoaded = function(args) {
    page = args.object;
    foto = page.getViewById('foto');
    emailField = page.getViewById('email');
    passwordField = page.getViewById('password');
};

exports.login = function () {
    firebase.login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
            email: emailField.text,
            password: passwordField.text
        }
    }).then(
        function (result) {
            JSON.stringify(result);
            var actualPage = frameModule.topmost();
            actualPage.navigate('views/home/home');
        },
        function (errorMessage) {
            console.log(errorMessage);
        }
    );
};

exports.gotoRegistryPage = function() {
    var actualPage = frameModule.topmost();
    actualPage.navigate('views/registrate/registrate');
};