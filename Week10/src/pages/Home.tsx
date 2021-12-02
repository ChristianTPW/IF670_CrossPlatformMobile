import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { Geolocation } from '@capacitor/geolocation';

const Home: React.FC = () => {
  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });

    console.log('Current position: ', coordinates);
    console.log('Lat: ', coordinates.coords.latitude);
    console.log('Lng: ', coordinates.coords.longitude);
  }

  const trackPosition = async () => {
    const data = await Geolocation.watchPosition({
      enableHighAccuracy: true,
      timeout: 1000
    }, (position, err) => {
      if (position) {
        console.log(position);
      }
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton onClick={getCurrentPosition}>Current Position</IonButton>
        <IonButton onClick={trackPosition}>Track Position</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
