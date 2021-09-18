import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonButton, IonIcon, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonAlert, IonPage, IonRadioGroup, IonRadio, IonItem, IonButtons, IonBackButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Home';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';
import BmiControls from "../components/BmiControls";
import InputControls from "../components/InputControl";
import BmiResult from "../components/BmiResult";

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
import '../theme/variables.css';
import React from 'react';
import BmrResult from '../components/BmrResult';

const BmrCalc: React.FC = () => {
    const [error, setError] = useState<string>();
    const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
    const [userGender, setUserGender] = useState<'male' | 'female'>('male');
    const [calculatedBMR, setCalculatedBMR] = useState<number>();
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const ageInputRef = useRef<HTMLIonInputElement>(null);


    const CalculateBMI = () => {

        const enteredWeight = weightInputRef.current!.value;
        const enteredHeight = heightInputRef.current!.value;
        const enteredAge = ageInputRef.current!.value;
        var bmr = 0;

        if (!enteredWeight || !enteredHeight || !enteredAge || +enteredHeight <= 0 || +enteredWeight <= 0 || +enteredAge <= 0) {
            setError('Please enter a valid (non-negative) input number');
            return;
        }

        if (calcUnits === 'cmkg') {
            if (userGender === 'male') {
                bmr = 66 + (13.7 * +enteredWeight) + (5 * +enteredHeight) - (6.8 * +enteredAge);
            } else {
                bmr = 655 + (9.6 * +enteredWeight) + (1.8 * +enteredHeight) - (4.7 * +enteredAge);
            }


        }

        if (calcUnits === 'ftlbs') {
            if (userGender === 'male') {
                bmr = 66 + (13.7 * +enteredWeight * 2.2) + (5 * +enteredHeight * 0.0328) - (6.8 * +enteredAge);
            } else {
                bmr = 655 + (9.6 * +enteredWeight * 2.2) + (1.8 * +enteredHeight * 0.0328) - (4.7 * +enteredAge);
            }

        }

        console.log(bmr);
        setCalculatedBMR(bmr);
    };

    const resetInputs = () => {
        weightInputRef.current!.value = '';
        heightInputRef.current!.value = '';
        ageInputRef.current!.value = '';
    };

    const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
        setCalcUnits(selectedValue);
    };

    return (
        <>
            <IonAlert isOpen={!!error} message={error} buttons={[{ text: 'Okay', handler: setError }]} />

            <IonPage>
                <IonHeader>
                    <IonToolbar>

                        <IonButtons slot="start">
                            <IonBackButton />
                        </IonButtons>

                        <IonTitle slot="start">BMR Calculator</IonTitle>



                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol size-sm='8' offset-sm='2' size-md='6' offset-md='3'>
                                <IonGrid className='ion-no-padding'>
                                    <InputControls selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
                                </IonGrid>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size-sm='8' offset-sm='2' size-md='6' offset-md='3'>
                                <IonGrid className='ion-no-padding'>
                                    <IonLabel position="floating">Age</IonLabel>
                                    <IonInput ref={ageInputRef}></IonInput>
                                </IonGrid>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size-sm='8' offset-sm='2' size-md='6' offset-md='3'>
                                <IonGrid className='ion-no-padding'>
                                    <IonLabel position="floating">Gender</IonLabel>


                                    <IonRadioGroup value={userGender} onIonChange={({ detail: { value } }) => setUserGender(value)}>
                                        <IonRow>
                                            <IonCol>

                                                <IonItem>
                                                    <IonLabel>
                                                        Male
                                                </IonLabel>
                                                    <IonRadio value="male"></IonRadio>
                                                </IonItem>

                                            </IonCol>
                                            <IonCol >
                                                <IonItem>
                                                    <IonLabel>
                                                        Female
                                                </IonLabel>
                                                    <IonRadio value="female"></IonRadio>
                                                </IonItem>
                                            </IonCol>
                                        </IonRow>
                                    </IonRadioGroup>
                                </IonGrid>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size-sm='8' offset-sm='2' size-md='6' offset-md='3'>
                                <IonGrid className='ion-no-padding'>
                                    <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                                    <IonInput ref={heightInputRef}></IonInput>
                                </IonGrid>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size-sm='8' offset-sm='2' size-md='6' offset-md='3'>
                                <IonGrid className='ion-no-padding'>
                                    <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                                    <IonInput ref={weightInputRef}></IonInput>
                                </IonGrid>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size-sm='8' offset-sm='2' size-md='6' offset-md='3'>
                                <IonGrid className='ion-no-padding'>
                                    <BmiControls onCalculate={CalculateBMI} onReset={resetInputs} />



                                    {calculatedBMR && (
                                        <BmrResult BmrResult={calculatedBMR} />
                                    )}
                                </IonGrid>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );

};

export default BmrCalc;