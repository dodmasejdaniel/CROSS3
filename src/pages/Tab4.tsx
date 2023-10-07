import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal, IonList, IonItem } from '@ionic/react';
import packageInfo from '../../package.json';
import logService from '../services/logService';
import './Tab4.css';

const Tab4: React.FC = () => {
  const [showLogs, setShowLogs] = React.useState(false);
  const logs = logService.getLogs();
  React.useEffect(() => {
    logService.log("About page loaded");
  }, []);
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="profile-card">
          <img
            className="profile-image"
            src="assets/profile.jpg"
            alt="Developer's Profile Picture"
          />
          <h1>Developer Information</h1>
          <h3>Daniel Dodmasej</h3>
          <p>@dandod</p>
          <p>Joined: 2023</p>
        </div>
        <div className="app-info-card">
          <h1>App Information</h1>
          <h3>Node.js</h3>
          <p>Version: {packageInfo.version}</p>
        </div>
        <IonButton expand="block" onClick={() => setShowLogs(true)}>
          Show Logs
        </IonButton>

        <IonModal isOpen={showLogs} onDidDismiss={() => setShowLogs(false)}>
          <IonList>
          {logs.map((log: { message: string }, index: number) => (
  <IonItem key={index}>
    {log.message}
  </IonItem>
))}

          </IonList>
          <IonButton expand="block" onClick={() => setShowLogs(false)}>
            Close
          </IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
