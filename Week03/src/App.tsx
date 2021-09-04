import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonButton, IonIcon, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonAlert } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';
import BmiControls from "./components/BmiControls";
import InputControls from "./components/InputControl";
import BmiResult from "./components/BmiResult";

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
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  let [statusBMI, setStatusBMI] = useState<string>('');
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);


  const CalculateBMI = () => {

    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    var bmi = 0;

    if (!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
      setError('Please enter a valid (non-negative) input number');
      return;
    }

    if (calcUnits === 'cmkg') {
      bmi = +enteredWeight / ((+enteredHeight / 100) * (+enteredHeight / 100));
    }

    if (calcUnits === 'ftlbs') {
      bmi = +enteredWeight * 2.2 / ((+enteredHeight / 100) / 0.0328 * (+enteredHeight / 100) / 0.0328);
    }

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

  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
  };

  return (
    <>
      <IonAlert isOpen={!!error} message={error} buttons={[{ text: 'Okay', handler: setError }]} />

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
                <InputControls selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonCol>
            </IonRow>

            <BmiControls onCalculate={CalculateBMI} onReset={resetInputs} />



            {calculatedBMI && (
              <BmiResult BmiResult={calculatedBMI} BmiStatus={statusBMI} />
            )}
          </IonGrid>
        </IonContent>
      </IonApp >
    </>
  );

};

export default App;
