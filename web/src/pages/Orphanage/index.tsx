import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";


import './styles.css';
import SideBar from "../../components/SideBar";
import mapIcon from '../../utils/mapIcon';


export default function Orphanage() {
  return (
    <div id="page-orphanage">
      <SideBar />

      <main>
        <div className="orphanage-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>
          
          <div className="orphanage-details-content">
            <h1>Aldeas infantiles</h1>
            <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

            <div className="map-container">
              <Map 
                center={[-34.896938,-56.1533621]} 
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
                <Marker interactive={false} icon={mapIcon} position={[-34.896938,-56.1533621]} />
              </Map>

              <footer>
                <a href="">Ver rotas en Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instrucciones para visita</h2>
            <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Lunes a Viernes <br />
                8h às 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fin de semana
              </div>
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