import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { ban, banSharp, create, trash } from "ionicons/icons";
import React, { useRef } from "react";

export const FRIENDS_DATA = [
    { id: 'f1', name: 'John Thor', image: "https://gravatar.com/avatar/0ddcd8056f93e95490b02af56d835044?s=400&d=robohash&r=x" },
    { id: 'f2', name: 'John Ness', image: "https://gravatar.com/avatar/639bb9418fc0d416a5cbc17bfefd6e3c?s=400&d=robohash&r=x" },
    { id: 'f3', name: 'John Doe', image: "https://gravatar.com/avatar/cbbf38e21312f9d5dcb27f8a105a80ef?s=400&d=robohash&r=x" }
];

const Meet: React.FC = () => {
    const callFriendHandler = (event: React.MouseEvent) => {
        console.log("Calling...");
    };

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const blockFriendHandler = () => {
        slidingOptionsRef.current?.closeOpened();
        console.log('Blocking...');
    };

    const deleteFriendHandler = () => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Deleting...");
    };

    const editFriendHandler = () => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Editing...");
    };

    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonMenuButton slot="start" />
                        <IonTitle>Ionic Meet</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {FRIENDS_DATA.map((friend => (
                    <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                        <IonItemOptions side="start">
                            <IonItemOption color="danger" onClick={blockFriendHandler}>
                                <IonIcon slot="icon-only" icon={ban} />
                            </IonItemOption>

                            <IonItemOption color="warning" onClick={deleteFriendHandler}>
                                <IonIcon slot="icon-only" icon={trash} />
                            </IonItemOption>
                        </IonItemOptions>

                        <IonItemOptions side="end">
                            <IonItemOption color="warning" onClick={deleteFriendHandler}>
                                <IonIcon slot="icon-only" icon={create} />
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem lines="full" button onClick={callFriendHandler}>
                            <IonAvatar slot="start">
                                <img src={friend.image} />
                            </IonAvatar>

                            <IonLabel>{friend.name}</IonLabel>
                        </IonItem>
                    </IonItemSliding>
                )))}
            </IonContent>
        </IonPage>
    );
};

export default Meet
