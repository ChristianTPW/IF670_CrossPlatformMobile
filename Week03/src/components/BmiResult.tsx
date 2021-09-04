import { IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React from "react";

const BmiResult: React.FC<{ BmiResult: number; BmiStatus: string }> = props => {

    return (
        <IonRow>
            <IonCol>
                <IonCard className="ion-padding">
                    <IonCardSubtitle className="ion-text-center">
                        {props.BmiResult}
                    </IonCardSubtitle>
                    <IonCardTitle className="ion-text-center">
                        {props.BmiStatus}
                    </IonCardTitle>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;