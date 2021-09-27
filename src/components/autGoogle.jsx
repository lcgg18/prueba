import React from "react";
import GoogleLogin from "react-google-login";


function autGoogle() {
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileobj);
  };
  return (
      
      <div className="autGoogle">
            <h1>Pagina Principal MarketPlace PPYLL</h1>
            <br />
            <h2>autenticación con OAuth-2</h2>
            <br />
          <div className="botonGoogle">
              <GoogleLogin
                clientId="373956812169-8gsu26v2uf56fd209spu9jqulvuqfukq.apps.googleusercontent.com"
                buttonText="Iniciar Sesión"
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={"single_host_origin"}
              />
          </div>
      </div>
    );
  };
export default autGoogle;
