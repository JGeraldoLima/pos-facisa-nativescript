"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
element_registry_1.registerElement("MapView", function () { return nativescript_google_maps_sdk_1.MapView; });
var HomeComponent = (function () {
    function HomeComponent() {
        this.currentLatitude = -7.2227793;
        this.currentLongitude = -35.9150371;
        this.zoom = 15;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
        this.isLoading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.checkLocationServicesStatus();
    };
    HomeComponent.prototype.checkLocationServicesStatus = function () {
        var _this = this;
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest()
                .then(function () {
                console.log("PERMISSION GRANTED");
                _this.getCurrentPosition();
            })
                .catch(function () {
                console.log("PERMISSION DENIED");
            });
        }
        else {
            this.getCurrentPosition();
        }
    };
    HomeComponent.prototype.getCurrentPosition = function () {
        var _this = this;
        this.isLoading = true;
        nativescript_geolocation_1.getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 10,
            maximumAge: 5000,
            timeout: 20000
        }).then(function (loc) {
            if (loc) {
                console.log("Current location is: " + loc);
                _this.setMarker(loc.latitude, loc.longitude, "Current position", "You are here");
            }
            _this.isLoading = false;
        }, function (e) {
            console.log("Error: " + e.message);
            _this.isLoading = false;
        });
    };
    HomeComponent.prototype.setMarker = function (latitude, longitude, title, description) {
        this.currentLatitude = latitude;
        this.currentLongitude = longitude;
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(latitude, longitude);
        marker.title = title;
        marker.snippet = description;
        // marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    HomeComponent.prototype.onMapReady = function (event) {
        console.log("Map Ready");
        this.mapView = event.object;
    };
    HomeComponent.prototype.onCoordinateTapped = function (args) {
        this.setMarker(args.position.latitude, args.position.longitude, "You tapped here!", "");
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    HomeComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    HomeComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    HomeComponent.prototype.onPickerLoaded = function (args) {
        var today = new Date();
        var datePicker = args.object;
        datePicker.year = today.getFullYear();
        datePicker.month = today.getMonth();
        datePicker.day = today.getDay();
    };
    HomeComponent.prototype.onDateChanged = function (args) {
        console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCwwRUFBc0U7QUFDdEUscUVBR2tDO0FBQ2xDLDZFQUF1RTtBQUN2RSw2REFHd0M7QUFDeEMsa0VBQThFO0FBRzlFLGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxzQ0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0FBTzFDO0lBTEE7UUFRSSxvQkFBZSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQzdCLHFCQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDO1FBQy9CLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBSzNCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFrRy9CLENBQUM7SUE5RkcsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELG1EQUEyQixHQUEzQjtRQUFBLGlCQWFDO1FBWkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQ0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsZ0RBQXFCLEVBQUU7aUJBQ2xCLElBQUksQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsNkNBQWtCLENBQUM7WUFDZixlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsRUFBRTtZQUNsQixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNSLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDcEYsQ0FBQztZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVc7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHFDQUFNLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHlDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVM7Y0FDeEMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2NBQ3RDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXpDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBN0dvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBRHBELGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7T0FDVyxhQUFhLENBK0d6QjtJQUFELG9CQUFDO0NBQUEsQUEvR0QsSUErR0M7QUEvR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgaXNFbmFibGVkXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7TWFwVmlldywgTWFya2VyLCBQb3NpdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIjtcbmltcG9ydCB7XG4gICAgRHJhd2VyVHJhbnNpdGlvbkJhc2UsXG4gICAgU2xpZGVJbk9uVG9wVHJhbnNpdGlvblxufSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IE1hcFZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIGN1cnJlbnRMYXRpdHVkZSA9IC03LjIyMjc3OTM7XG4gICAgY3VycmVudExvbmdpdHVkZSA9IC0zNS45MTUwMzcxO1xuICAgIHpvb20gPSAxNTtcbiAgICBiZWFyaW5nID0gMDtcbiAgICB0aWx0ID0gMDtcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcbiAgICBtYXBWaWV3OiBNYXBWaWV3O1xuXG4gICAgbGFzdENhbWVyYTogc3RyaW5nO1xuXG4gICAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICB0aGlzLmNoZWNrTG9jYXRpb25TZXJ2aWNlc1N0YXR1cygpO1xuICAgIH1cblxuICAgIGNoZWNrTG9jYXRpb25TZXJ2aWNlc1N0YXR1cygpIHtcbiAgICAgICAgaWYgKCFpc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSTUlTU0lPTiBHUkFOVEVEXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJNSVNTSU9OIERFTklFRFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMyxcbiAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAxMCxcbiAgICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxuICAgICAgICB9KS50aGVuKChsb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgbG9jYXRpb24gaXM6IFwiICsgbG9jKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1hcmtlcihsb2MubGF0aXR1ZGUsIGxvYy5sb25naXR1ZGUsIFwiQ3VycmVudCBwb3NpdGlvblwiLCBcIllvdSBhcmUgaGVyZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRNYXJrZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExhdGl0dWRlID0gbGF0aXR1ZGU7XG4gICAgICAgIHRoaXMuY3VycmVudExvbmdpdHVkZSA9IGxvbmdpdHVkZTtcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICAgIG1hcmtlci50aXRsZSA9IHRpdGxlO1xuICAgICAgICBtYXJrZXIuc25pcHBldCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBtYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IDF9O1xuICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBvbk1hcFJlYWR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwIFJlYWR5XCIpO1xuXG4gICAgICAgIHRoaXMubWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcbiAgICB9XG5cbiAgICBvbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xuICAgICAgICB0aGlzLnNldE1hcmtlcihhcmdzLnBvc2l0aW9uLmxhdGl0dWRlLCBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSwgXCJZb3UgdGFwcGVkIGhlcmUhXCIsIFwiXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uTWFya2VyRXZlbnQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgICAgICsgXCInIHRyaWdnZXJlZCBvbjogXCIgKyBhcmdzLm1hcmtlci50aXRsZVxuICAgICAgICAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG4gICAgICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcbiAgICB9XG5cbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcblxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSB0b2RheS5nZXREYXkoKTtcbiAgICB9XG5cbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIGNoYW5nZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbiAgICB9XG59XG4iXX0=