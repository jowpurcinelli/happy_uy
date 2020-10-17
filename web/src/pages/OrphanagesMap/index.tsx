import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';
import'leaflet/dist/leaflet.css';
import './styles.css';

function OrphanagesMap( ) {
    return (
        <div id="map-page">
            <aside>
                <header>
                    <img src={ mapMarker } alt="mapMarker"/>
                    <h2> Elijas un orfanato en el mapa </h2>
                    <p> Los chiquelines te están esperando! </p>
                </header>
                <footer>
                    <strong> Montevideo </strong>
                    <span> Uruguay </span>
                </footer>
            </aside>
            <Map
                center={[-34.896938,-56.1533621]}
                zoom={13.5}
                style={{width: '100%', height: '100%'}}>
                
                <Marker 
                    icon={mapIcon}
                    position={[-34.896938,-56.1533621]}
                >
                    <Popup
                    closeButton= {false} minWidth={240} maxWidth={240} className="popup-map"                    
                    >
                        <Link to="/orfanatos/1">
                            <FiArrowRight size={20} color="#FFF" />

                        </Link>
                        Aldeas infantiles
                    </Popup>

                </Marker>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            </Map>

            <Link to="/orfanatos/crear" className="create-orphanage">
                <FiPlus  size={32} color="#FFF" />
            </Link>


        </div>
    )
}

export default OrphanagesMap;