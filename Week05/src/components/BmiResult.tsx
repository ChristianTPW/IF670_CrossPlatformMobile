import { IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React from "react";
import './BmiResult.css';

const BmiResult: React.FC<{ BmiResult: number; BmiStatus: string }> = props => {

    return (
        <IonRow>
            <IonCol>

                <IonCard className="ion-padding" id="result" color={props.BmiStatus === "Normal" ? 'success' : props.BmiStatus === "Obesitas" ? "danger" : "warning"} >

                    <IonCardSubtitle className="ion-text-center">
                        {props.BmiResult}
                    </IonCardSubtitle>
                    <IonCardTitle className="ion-text-center">
                        {props.BmiStatus}
                    </IonCardTitle>
                </IonCard>
            </IonCol>
        </IonRow >
    );
};

export default BmiResult;