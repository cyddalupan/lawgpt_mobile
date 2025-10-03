import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  useEffect(() => {
    const openInAppBrowser = () => {
      const browser = InAppBrowser.create('https://topbarassist.reviewcenterphil.com/page/lawgpt');
      browser.show();
    };

    openInAppBrowser();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default Home;
