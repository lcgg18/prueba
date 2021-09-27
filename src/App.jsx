import Layout from './layouts/Layout' ;
import Index from './pages/index';
import Usuarios from './pages/usuarios';
import Ventas from './pages/ventas';
import "./styles/styles.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
              <Route path="/" exact>
                <Index/>
              </Route>

              <Route path="/usuarios" exact>
                <Usuarios/>
              </Route>

              <Route path="/ventas" exact>
                <Ventas/>
              </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
export default App;
