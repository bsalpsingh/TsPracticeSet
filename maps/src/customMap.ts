// insturctions to the classes that are going to be arg to add marker method

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

// * a single value can have multiple different types
// * eg.  classes can also act as a type and also fulfill some interface
export class CustomMap {
 private googleMaps: google.maps.Map;
  // ? class can act as values and also type defn ...as class give structure to obects

  constructor(divId: string) {
    this.googleMaps = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 1, lng: 1 },
    });
  }

  addMarker(mappable: Mappable): void {
    //   antipattern with class types
    const marker = new google.maps.Marker({
      map: this.googleMaps,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMaps, marker);
    });
  }
}
