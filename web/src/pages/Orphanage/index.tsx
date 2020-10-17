import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from "../../services/api";

import './styles.css';
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import Sidebar from "../../components/SideBar";
import mapIcon from '../../utils/mapIcon';

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;

  }>;
}

interface  OrphanageParams {
  id: string;
}

export default function Orphanage( ) {
  const params = useParams<OrphanageParams>( );
  const [ orphanage, setOrphanage ] = useState<Orphanage>( );
  const [ activeImageIndex, setActiveImageIndex ] = useState( 0 );

   useEffect( ( ) =>  {
      api.get(`orphanages/${params.id}`).then(response => {
          setOrphanage(response.data);
      });
  }, [params.id ] );

  if (!orphanage) {
    return <p> Cargando...</p> //temporary
    
  }

  return (
    <div id="page-orphanage">
     <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            {orphanage.images.map( (image, index) => {
              return( 
                <button 
                  key={image.id} 
                  className={activeImageIndex === index ? 'active' : ' '}
                  type="button"
                  onClick={( ) => {
                    setActiveImageIndex( index );
                  }}
                >
                    <img src={image.url} alt={orphanage.name} />

                </button>
              );
            } )}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={13.5} 
                style={{ width: '100%', height: '100%' }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas en Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instrucciones para visita</h2>
              <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Lunes a Viernes <br />
                {orphanage.opening_hours}
              </div>
              { orphanage.open_on_weekends ? (
                  <div className="open-on-weekends">
                      <FiInfo size={32} color="#39CC83" />
                        Atendemos <br />
                        el fin de semana
                  </div>

              ) : (
                <div className="open-on-weekends doesnt-open">
                      <FiInfo size={32} color="#FF669D" />
                        No atendemos <br />
                        el fin de semana
                  </div>
              ) } 
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar en contacto
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

