import React from "react";
import "./mediodepago.css";

function MedioDePago() {
  return (
    <div className="Mediodepago">
      <h1 className="textPago">Pago</h1>

      <div className="containerwhite">

        <div>
          <h1 className="textEmpresa">Empresa</h1>
          <select className="SelectEmpresa">
            <option value="0">Seleccionar</option>
            <option value="0">Enel</option>
            <option value="0">Aguas Andina</option>
            <option value="0">Smapa</option>
            <option value="0">VTR</option>
          </select>
        </div>

        <div>
          <h1 className="textMonto">Monto</h1>
          <input className="InputMonto" placeholder="$00.000"></input>
        </div>

        <div>
          <h1 className="textMediodepago">Medio de pago</h1>
          <select className="SelectMedioPago">
            <option value="0">Elegir...</option>
            <option value="1">Targeta de Credito...</option>
            <option value="2">Targeta de Devito</option>
            
          </select>
        </div>

        <div>
          <h1 className="textFecha">Fecha</h1>
          <input type="date" className="InputFecha">
          </input>
        </div>

        <div className="containerMicrofono"><svg width="48" height="72" viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8707 13.4427C15.8707 9.17275 19.3305 5.71297 23.6039 5.71297C27.8704 5.71297 31.3336 9.17275 31.3336 13.4427V40.0291C31.3336 44.3025 27.8704 47.7623 23.6039 47.7623C19.3305 47.7623 15.8707 44.3025 15.8707 40.0291V13.4427ZM23.6039 53.4752C16.1837 53.4752 10.1682 47.4597 10.1682 40.0395V13.4323C10.1682 6.01201 16.1837 0 23.6039 0C31.0207 0 37.0362 6.01201 37.0362 13.4323V40.0395C37.0362 47.4597 31.0207 53.4752 23.6039 53.4752ZM45.3247 44.4145C46.7955 44.9221 47.5848 46.5494 47.0772 48.0203C43.9686 57.1269 35.8459 63.4901 26.4472 64.582V68.838C26.4472 70.3958 25.1745 71.6719 23.6168 71.6719C22.059 71.6719 20.7794 70.3958 20.7794 68.838V64.582C11.3772 63.4901 3.25105 57.12 0.149427 48.0064C-0.351284 46.5355 0.448463 44.9117 1.9193 44.411C3.39014 43.9068 5.01397 44.7065 5.51468 46.1774C8.14689 53.9071 15.4489 59.1402 23.6168 59.1402C31.7846 59.1402 39.0936 53.9036 41.7189 46.1635C42.2265 44.6961 43.8538 43.9068 45.3247 44.4145Z" fill="#3728B7"/>
</svg>
</div>

        <button className="BtnConfirmar">Confirmar</button>
      </div>
    </div>
  );
}

export default MedioDePago;
