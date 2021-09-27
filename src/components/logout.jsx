import React from 'react'
import { GoogleLogout } from "react-google-login";


function Logout() {
    const Logout = (respuesta) => {
        window.sessionStorage.removeItem("access_token");
        window.sessionStorage.removeItem("nama");
        this.setState(
          (state) => ({
            isLogined: false,
            token: " ",
          }),
          console.log(respuesta)
        );
    
    
    return (
        <div className="botonGoogle">
            <br />
            <br />
            <GoogleLogout
                clientId="373956812169-8gsu26v2uf56fd209spu9jqulvuqfukq.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={Logout}
            ></GoogleLogout>
        </div>
      
    )
}
};
export default Logout;