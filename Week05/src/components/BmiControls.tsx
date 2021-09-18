import React from 'react';
import { returnUpBack, calculatorOutline, refreshOutline } from 'ionicons/icons';
import { IonButton, IonCol, IonIcon, IonRow, IonGrid } from '@ionic/react';

const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> = props => {
    return (
        < IonRow >
            <IonCol className="ion-text-center" size='12' size-md='6'>
                <IonGrid className='ion-no-padding'>
                    <IonButton expand="block" color="success" onClick={props.onCalculate}>
                        <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
              Calculate
            </IonButton>
                </IonGrid>
            </IonCol>

            <IonCol className="ion-text-center" size='12' size-md='6'>
                <IonGrid className='ion-no-padding'>
                    <IonButton fill="clear" color="medium" onClick={props.onReset}>
                        <IonIcon slot="start" icon={refreshOutline}></IonIcon>
              Reset
            </IonButton>
                </IonGrid>
            </IonCol>
        </IonRow >
    );
};

export default BmiControls;