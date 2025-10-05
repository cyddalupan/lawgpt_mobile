import { IonContent, IonPage } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import ConsoleLog from '../components/ConsoleLog';
import './Home.css';

const Home: React.FC = () => {
  const siteUrl = 'https://academy.reviewcenterphil.com/mobilegpt/';
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [logs, setLogs] = useState<{ type: 'log' | 'warn' | 'error'; message: string }[]>([]);

  const logMessage = (type: 'log' | 'warn' | 'error', ...args: any[]) => {
    setLogs(prevLogs => [...prevLogs, { type, message: args.join(' ') }]);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // It's a good practice to check the origin of the message for security.
      if (event.origin !== 'https://academy.reviewcenterphil.com') {
        return;
      }
      logMessage('log', 'Message from iframe:', event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleLoad = () => {
      logMessage('log', 'Iframe load event fired');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.onerror = (message, source, lineno, colno, error) => {
          logMessage('error', 'Iframe error:', message, source, lineno, colno, error);
        };
        logMessage('log', 'Iframe URL:', iframe.contentWindow.location.href);
      }
    };

    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <iframe
          ref={iframeRef}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-storage-access-by-user-activation allow-modals allow-orientation-lock allow-pointer-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
          src={siteUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="LawGPT"
        />
        {/* <ConsoleLog logs={logs} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
