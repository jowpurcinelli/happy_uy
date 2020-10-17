import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiPlus } from "react-icons/fi";



import './styles.css';
import SideBar from "../../components/SideBar";
import mapIcon from '../../utils/mapIcon';


export default function CreateOrphanage() {
  return (
    <div id="page-create-orphanage">
      <SideBar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Datos</legend>

            <Map 
              center={[-34.896938,-56.1533621]} 
              style={{ width: '100%', height: '100%' }}
              zoom={13.5}
            >
              <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker interactive={false} icon={mapIcon} position={[-34.896938,-56.1533621]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nombre</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 800 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instrucciones</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Hora</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Disponible el fin de semana</label>

              <div className="button-select">
                <button type="button" className="active">Si</button>
                <button type="button">No</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
