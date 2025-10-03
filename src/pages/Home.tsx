import { IonContent, IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const siteUrl = 'https://topbarassist.reviewcenterphil.com/page/lawgpt';

  return (
    <IonPage>
      <IonContent fullscreen>
        <iframe
          src={siteUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="LawGPT"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
