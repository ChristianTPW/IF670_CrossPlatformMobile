import { IonToolbar, IonPage, IonHeader, IonContent, IonCard, IonCardContent, IonButton, IonMenuButton, IonTitle } from "@ionic/react";
import React from "react";


export const MAIL_DATA = [
    { id: 'm1', subject: 'Magang MBKM sudah dimulai' },
    { id: 'm2', subject: 'Bimbingan Skripsi' },
    { id: 'm3', subject: 'Progress Laporan' }
];

const Mail: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonTitle>Ionic Mail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {MAIL_DATA.map(mail => (
                    <IonCard key={mail.id}>
                        <IonCardContent className="ion-text-center">
                            <h2>{mail.subject}</h2>
                            <IonButton routerLink={`/mail/${mail.id}`}>
                                View Mail
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    )
};

export default Mail;