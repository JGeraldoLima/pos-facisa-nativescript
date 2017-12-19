import {Component, OnInit, ViewChild} from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
import {
    enableLocationRequest, getCurrentLocation,
    isEnabled
} from "nativescript-geolocation";
import {MapView, Marker, Position} from "nativescript-google-maps-sdk";
import {
    DrawerTransitionBase,
    SlideInOnTopTransition
} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";
import {DatePicker} from "tns-core-modules/ui/date-picker";

registerElement("MapView", () => MapView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    currentLatitude = -7.2227793;
    currentLongitude = -35.9150371;
    zoom = 15;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: string;

    isLoading: boolean = false;

    private _sideDrawerTransition: DrawerTransitionBase;

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.checkLocationServicesStatus();
    }

    checkLocationServicesStatus() {
        if (!isEnabled()) {
            enableLocationRequest()
                .then(() => {
                    console.log("PERMISSION GRANTED");
                    this.getCurrentPosition();
                })
                .catch(() => {
                    console.log("PERMISSION DENIED");
                });
        } else {
            this.getCurrentPosition();
        }
    }

    getCurrentPosition() {
        this.isLoading = true;
        getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 10,
            maximumAge: 5000,
            timeout: 20000
        }).then((loc) => {
            if (loc) {
                console.log("Current location is: " + loc);
                this.setMarker(loc.latitude, loc.longitude, "Current position", "You are here");
            }
            this.isLoading = false;
        }, (e) => {
            console.log("Error: " + e.message);
            this.isLoading = false;
        });
    }

    setMarker(latitude, longitude, title, description) {
        this.currentLatitude = latitude;
        this.currentLongitude = longitude;
        const marker = new Marker();
        marker.position = Position.positionFromLatLng(latitude, longitude);
        marker.title = title;
        marker.snippet = description;
        // marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    onMapReady(event) {
        console.log("Map Ready");

        this.mapView = event.object;
    }

    onCoordinateTapped(args) {
        this.setMarker(args.position.latitude, args.position.longitude, "You tapped here!", "");
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

    onPickerLoaded(args) {
        const today = new Date();
        let datePicker = <DatePicker>args.object;

        datePicker.year = today.getFullYear();
        datePicker.month = today.getMonth();
        datePicker.day = today.getDay();
    }

    onDateChanged(args) {
        console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    }
}
