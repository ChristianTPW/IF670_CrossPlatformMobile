import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Christian Teguh Prasetya Widjaja - 00000032062</h2>
        <IonButton expand="block" routerLink="/bmi">BMI Calculator</IonButton>
        <IonButton expand="block" routerLink="/bmr">BMR Calculator</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
