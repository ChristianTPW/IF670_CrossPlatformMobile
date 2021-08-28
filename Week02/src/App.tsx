import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonButton, IonIcon, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';

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

/* Theme variables */
import './theme/variables.css';
import React from 'react';

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  let [statusBMI, setStatusBMI] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const CalculateBMI = () => {

    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (!enteredWeight || !enteredHeight) return;

    const bmi = +enteredWeight / ((+enteredHeight / 100) * (+enteredHeight / 100));

    if (bmi >= 30) {
      statusBMI = "Obesitas";
    } else if (bmi >= 25) {
      statusBMI = "Gemuk";
    } else if (bmi >= 18.5) {
      statusBMI = "Normal";
    } else {
      statusBMI = "Kurus";
    }

    //console.log(bmi);
    setStatusBMI(statusBMI);
    setCalculatedBMI(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel position="floating">Tinggi Badan (cm)</IonLabel>
              <IonInput ref={heightInputRef}></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel position="floating">Berat Badan (kg)</IonLabel>
              <IonInput ref={weightInputRef}></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick={() => CalculateBMI()}>
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                  Calculate
                </IonButton>
            </IonCol>

            <IonCol className="ion-text-left">
              <IonButton onClick={() => resetInputs()}>
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                  Reset
                </IonButton>
            </IonCol>
          </IonRow>

          {calculatedBMI && (<IonRow>
            <IonCol>
              <IonCard className="ion-padding">
                <IonCardSubtitle className="ion-text-center">
                  {calculatedBMI}
                </IonCardSubtitle>
                <IonCardTitle className="ion-text-center">
                  {statusBMI}
                </IonCardTitle>
              </IonCard>
            </IonCol>
          </IonRow>)}
        </IonGrid>
      </IonContent>
    </IonApp >
  );

};

export default App;
