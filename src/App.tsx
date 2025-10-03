import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Offline from './pages/Offline/Offline';
import { Network } from '@capacitor/network';
import { useState, useEffect } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [networkStatus, setNetworkStatus] = useState({ connected: true, connectionType: 'wifi' });

  useEffect(() => {
    const logCurrentNetworkStatus = async () => {
      const status = await Network.getStatus();
      setNetworkStatus(status);
    };

    Network.addListener('networkStatusChange', status => {
      setNetworkStatus(status);
    });

    logCurrentNetworkStatus();

    return () => {
      Network.removeAllListeners();
    };
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {networkStatus.connected ? (
            <Route exact path="/home">
              <Home />
            </Route>
          ) : (
            <Route exact path="/offline">
              <Offline />
            </Route>
          )}
          <Route exact path="/">
            <Redirect to={networkStatus.connected ? "/home" : "/offline"} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
