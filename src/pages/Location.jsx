import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon } from 'react-leaflet';
import { IconButton } from '~/components/Button';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { IMAGE_1 } from '~/assets';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const polygonCoords = [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
];

const Location = () => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Get user's current location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentPosition({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error('Error getting location:', error);
                    alert('Unable to retrieve location. Please enable location access.');
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    }, []);

    // Search for a location
    const searchLocation = async () => {
        if (!searchQuery) return;
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`);
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon, display_name } = data[0];
                setMarkers([{ lat: parseFloat(lat), lng: parseFloat(lon), name: display_name }]);
            } else {
                alert('Location not found!');
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    return (
        <div>
            {/* Search Bar */}
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a place..."
                    style={{ padding: '5px', width: '250px' }}
                />
                <button onClick={searchLocation} style={{ marginLeft: '5px', padding: '5px' }}>
                    Search
                </button>
            </div>

            {/* Map Container */}
            {currentPosition && (
                <MapContainer center={[currentPosition.lat, currentPosition.lng]} zoom={16} style={{ height: '500px', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {/* Current Location Marker */}
                    <Marker position={[currentPosition.lat, currentPosition.lng]} icon={customIcon}>
                        <Popup>
                            {/* <img src={IMAGE_1} alt="" />
                             */}

                            <IconButton>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-image"
                                >
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <circle cx="9" cy="9" r="2" />
                                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                </svg>
                            </IconButton>
                        </Popup>
                    </Marker>

                    {/* Searched Location Markers */}
                    {markers.map((marker, index) => (
                        <Marker key={index} position={[marker.lat, marker.lng]} icon={customIcon}>
                            <Popup>{marker.name}</Popup>
                        </Marker>
                    ))}

                    <Marker position={[51.505, -0.09]} icon={customIcon}>
                        <Popup>📍 Custom Marker Here!</Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
};

export default Location;
