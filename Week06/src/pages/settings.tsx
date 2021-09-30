import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Settings: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonButtons slot="start" />
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <h1>Settings</h1>
            </IonContent>
        </IonPage>
    );
};

export default Settings;