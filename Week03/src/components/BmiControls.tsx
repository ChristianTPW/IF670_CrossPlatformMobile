import React from 'react';
import { returnUpBack, calculatorOutline, refreshOutline } from 'ionicons/icons';
import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react';

const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> = props => {
    return (
        < IonRow >
            <IonCol className="ion-text-left">
                <IonButton onClick={props.onCalculate}>
                    <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
              Calculate
            </IonButton>
            </IonCol>

            <IonCol className="ion-text-left">
                <IonButton onClick={props.onReset}>
                    <IonIcon slot="start" icon={refreshOutline}></IonIcon>
              Reset
            </IonButton>
            </IonCol>
        </IonRow >
    );
};

export default BmiControls;