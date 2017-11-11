var applicationModule = require("application");
var firebase = require("nativescript-plugin-firebase");

firebase.init({
    onAuthStateChanged: function(data) {
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    }
}).then(
    function (instance) {
        console.log("firebase.init done");
    },
    function (error) {
        console.log("firebase.init error: " + error);
    }
);

applicationModule.start({ moduleName: "views/login/login" });
