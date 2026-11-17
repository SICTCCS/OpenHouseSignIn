# Tutorial
This folder is to show you how to set up a new map. Knowledge of OpenStreetMap and Leaflet.js is probably recommended.
## Setting up the map
1. Go to the Open Street Map [webpage](umap.openstreetmap.fr)
    This is solely to get a grasp of the coordinates for each polygon.

2. Zoom to find the location of the site for your map

3. Right click a point for your map to be centered on, then copy the string of numbers by clicking it
    We center the map so it doesn't automatically display the entire world when the user opens it

4. Create an HTML file named index.html and a CSS file named style.css (recommended names)

5. Add HTML boilerplate (!DOCTYPE html...etc)
    Also link the style.css file
    (add code to your CSS that will confine an iframe to the 'index.html')

6. (IMPORTANT!) link Leaflet.js stylesheet and import it with a script tag within the head element
        <br>
        `
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>
        `

7. Create a div with the id="map"
        <br>
        `
        <div id="map"></div>
        `

8. Set up the map using a script tag, this is where the map will be housed
        <br>
        `
          <script>
            var map = L.map('map', {
                zoomControl: false,
                attributionControl: true
            }).setView([x,y], 18); // use the coords that you right clicked on uMap in place of x and y
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 22,     // recommended max and min
                minZoom: 19,
                attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | SICTC CS Class'            // crediting people is pretty cool
            }).addTo(map); // adds everything previously stated to the map
            map.setMaxBounds(map.getBounds().pad(0.15));
            </script>
        `

This sets up the base of the map, now lets move on to creating polygons/classrooms like in the main deployment of the project

## Making "rooms"
These were hard-coded in unfortunately, if you can find a better way then do that

In the same script tag, append a var named "_Coords" and set it equal to each coordinate representing a point in the shape of the polygon
        <br>
        `
        <script>
            //....append to the bottom of the already existing script tag
            //Define coordinates [lat,lng]
            var shape1Coords = [
                [topleftX,topleftY],        //go back to uMap and right click points and copy them and paste them
                [toprightX,topRightY],      // into the correct bracket, to make more complex shapes add more
                [bottomrightX,bottomRightY],//  sides
                [bottomleftX,bottomleftY]
            ];
            //then create the polygon
            var shape1Class = L.polygon(shape1Coords, {
                color: 'deepSpaceblue', // can be any color, this is the outline
                fillColor: '#243D57', // same thing, this is the filling color
                fillOpacity: 0.5    // up to you
            }).addTo(map); // adds our customized shape to the map
         </script>
        `
## Adding user geolocation
- Create a user icon, with the url being an image in the same directory as the index.html
        <br>
        `
        <script>
            //append this and the following sections to your script tag
            //etc...
            // defining custom icon parameters for user marker
            const userIcon = L.icon({
                iconUrl: "drawMaps/UserIcon.png", // image for the user on the map (like an arrow or a red dot)
                iconSize: [38,38]
            })
            </script>
        `

- Create the location marker and location circle
        <br>
        `
        <script>
        </script>
        `

- Finalize the marker

