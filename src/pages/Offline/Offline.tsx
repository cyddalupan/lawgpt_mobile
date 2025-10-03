import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Offline.css';

const Offline: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Offline</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <h1>Connection Lost</h1>
          <p>Please check your internet connection and try again.</p>
          <div className="placeholder">
            {/* Placeholder for SVG graphic */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Offline;