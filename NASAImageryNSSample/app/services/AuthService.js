"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.logged = false;
    }
    AuthService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        firebase.logout()
            .then(function () {
            _this.router.navigate(["/login"], { clearHistory: true });
        })
            .catch(function (err) {
            Toast.makeText("An error occurred while trying to logout: " + err, "long").show();
        });
    };
    AuthService.prototype.registrate = function (user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        });
    };
    Object.defineProperty(AuthService.prototype, "isLogged", {
        get: function () {
            return this.logged;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBdXRoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyx1REFBMEQ7QUFFMUQsNkRBQXNEO0FBQ3RELDBDQUE0QztBQUk1QztJQUdJLHFCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUZwQyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBR2hDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2xCLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFBQSxpQkFTQztRQVBHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7YUFDWixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsNENBQTRDLEdBQUcsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNCQUFJLGlDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQXBDUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSW1CLHVDQUFnQjtPQUhuQyxXQUFXLENBcUN2QjtJQUFELGtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbC9Vc2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGxvZ2dlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4odXNlcjogVXNlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuXHJcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHRyeWluZyB0byBsb2dvdXQ6IFwiICsgZXJyLCBcImxvbmdcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RyYXRlKHVzZXI6IFVzZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTG9nZ2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZDtcclxuICAgIH1cclxufVxyXG4iXX0=