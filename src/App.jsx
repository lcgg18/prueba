import "./App.css";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

function App() {
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileobj);
  };

  const logout = (respuesta) => {
    window.sessionStorage.removeItem("access_token");
     window.sessionStorage.removeItem("nama");
     this.setState(state => ({
         isLogined: false,
         token: ''
     }),
     console.log(respuesta)
     );
 }

  return (
    <div className="App">
      <h1>Pagina Principal MarketPlace PPYLL</h1>
        <br />
        <h2>autenticación con OAuth-2</h2>
        <br />
        <div>
        <GoogleLogin
          clientId="373956812169-8gsu26v2uf56fd209spu9jqulvuqfukq.apps.googleusercontent.com"
          buttonText="Iniciar Sesión"
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={"single_host_origin"}
        />
        </div>
        <div>
          <br/><br/>
        <GoogleLogout
          clientId="373956812169-8gsu26v2uf56fd209spu9jqulvuqfukq.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
        </div>
    </div>
  );
}

export default App;
