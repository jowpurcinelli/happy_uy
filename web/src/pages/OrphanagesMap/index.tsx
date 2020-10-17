import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';
import'leaflet/dist/leaflet.css';
import './styles.css';
import api from '../../services/api';


interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}



function OrphanagesMap( ) {
    const [ orphanages, setOrphanages ] = useState<Orphanage[ ]>([ ]);
    console.log(orphanages)

    useEffect(() =>  {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    }, [ ] )
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
                
            {orphanages.map(orphanage => {
                return(
                    <Marker 
                       key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}>
                            <Popup
                                closeButton= {false} minWidth={240} maxWidth={240} className="popup-map">
                                    <Link to={`/orphanages/${orphanage.id}`}>
                                        <FiArrowRight size={20} color="#FFF" />
                                    </Link>
                                        {orphanage.name}
                                </Popup>
                        </Marker>
                )
            })}


                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus  size={32} color="#FFF" />
            </Link>


        </div>
    )
}

export default OrphanagesMap;