import React, { Fragment, useState } from "react";

const Formulario = () => {

    const [datos, setDatos] = useState({
        ID:'',
        nombre: '',
        apellido: '',
        direccion: '',
        telefono:''

        })

    const handleInputChange =(event)=>{
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos=(event)=>{
        event.preventDefault();
            console.log(datos.ID+
                    ' '+datos.nombre+
                    ' '+datos.apellido+
                    ' '+datos.direccion+
                    ' '+datos.telefono)
    }

  return (
    <Fragment>
      <h1>Formulario</h1>
        <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-3">
               <input
                    placeholder="Ingrese Su Identificación"
                    className="form-control"
                    type="number"
                    name="ID"
                    onChange={handleInputChange}
               ></input>
           </div>
           <div className="col-md-3">
               <input
                    placeholder="Ingrese Nombre"
                    className="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleInputChange}
               ></input>
           </div>
           <div className="col-md-3">
               <input
                    placeholder="Ingrese Apellido"
                    className="form-control"
                    type="text"
                    name="apellido"
                    onChange={handleInputChange}
               ></input>
           </div>
           <div className="col-md-3">
               <input
                    placeholder="Ingrese Dirección"
                    className="form-control"
                    type="text"
                    name="direccion"
                    onChange={handleInputChange}
               ></input>
           </div>
           <div className="col-md-3">
               <input
                    placeholder="Ingrese Telefono"
                    className="form-control"
                    type="text"
                    name="telefono"
                    onChange={handleInputChange}
               ></input>
           </div>
           <div className="col-md-3">
               <button className="btn btn-primary" type="submit">Enviar</button>
           </div>
        </form>
    </Fragment>
  );
};

export default Formulario;
