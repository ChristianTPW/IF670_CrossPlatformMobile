import { MAIL_DATA } from "./Mail";
import { IonPage, IonHeader, IonButtons, IonTitle, IonContent, IonToolbar, IonMenuButton } from "@ionic/react";
import { useParams } from "react-router";
import React from "react";

const MailDetail: React.FC = () => {
    const mId = useParams<{ mailId: string }>().mailId;
    const selectedMail = MAIL_DATA.find(m => m.id === mId);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonButtons slot="start" />
                    <IonTitle>
                        {selectedMail ? selectedMail?.subject : 'No mail found'}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Mail ID: {mId}</h2>
            </IonContent>
        </IonPage>
    );
}

export default MailDetail