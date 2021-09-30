import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Spam: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonButtons slot="start" />
                    <IonTitle>Spam</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <h1>Spam</h1>
            </IonContent>
        </IonPage>
    );
};

export default Spam;