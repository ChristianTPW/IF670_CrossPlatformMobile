import { IonAlert, IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonModal, IonPage, IonRoute, IonRow, IonTitle, IonToast, IonToolbar, isPlatform } from "@ionic/react";
import { ban, addOutline, create, trash } from "ionicons/icons";
import { stringify } from "querystring";
import React, { useContext, useRef, useState } from "react";
import FriendsContext from "../data/friend-context";
import FriendsContextProvider from "../data/FriendsContextProvider";

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


    const startAddFriendHandler = () => {
        console.log("adding friend...");
        setIsEditing(true);
        setSelectedFriend(null);
    };

    const [startDeleting, setStartDeleting] = useState(false);
    const [toastDeleteMessage, setToastDeleteMessage] = useState('');

    const [startBlocking, setStartBlocking] = useState(false);
    const [toastBlockMessage, setToastBlockMessage] = useState('');

    const startBlockFriendHandler = () => {
        setStartBlocking(true);
        slidingOptionsRef.current?.closeOpened();
    };

    const blockFriendHandler = () => {
        setStartBlocking(false);
        setToastBlockMessage('Blocked Friend!');
    };

    const [isEditing, setIsEditing] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState<{ id: string, name: string, image: string } | null>();
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateId, setUpdateId] = useState("");

    const startEditFriendHandler = (friendId: string) => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Editing..." + friendId);
        const friend = FRIENDS_DATA.find(f => f.id === friendId);
        setSelectedFriend(friend);
        setUpdateId(friendId);
        setIsUpdating(true);
        setIsEditing(true);
    };

    const cancelEditFriendHandler = () => {
        setIsUpdating(false);
        setIsEditing(false);
    };

    const [enteredName, setEnteredName] = useState("");

    const friendsCtx = useContext(FriendsContext);

    const saveFriendHandler = () => {
        if (!enteredName) return;
        if (selectedFriend === null) {
            friendsCtx.addFriend(enteredName!.toString(), '');
        }
        if (isUpdating) {
            friendsCtx.updateFriend(updateId, enteredName);
        }
        setIsUpdating(false)
        setIsEditing(false);
    };

    const [deleteFriendId, setDeleteFriend] = useState("");

    const startDeleteFriendHandler = (friendId: string) => {
        setStartDeleting(true);
        slidingOptionsRef.current?.closeOpened();
        setDeleteFriend(friendId);
    };

    const deleteFriendHandler = () => {
        setStartDeleting(false);

        friendsCtx.deleteFriend(deleteFriendId!);

        setToastDeleteMessage('Deleted ' + deleteFriendId + '!');
    };

    return (
        <IonPage>
            <IonAlert
                isOpen={startDeleting}
                header="Are you  sure?"
                message="Do you want to delete your friend? This cannot be undone."
                buttons={[
                    { text: 'No', role: 'cancel', handler: () => { setStartDeleting(false) } },
                    { text: 'Yes', handler: deleteFriendHandler }
                ]}
            />

            <IonAlert
                isOpen={startBlocking}
                header="Are you  sure?"
                message="Do you want to block your friend?"
                buttons={[
                    { text: 'No', role: 'cancel', handler: () => { setStartBlocking(false) } },
                    { text: 'Yes', handler: blockFriendHandler }
                ]}
            />

            <IonToast
                isOpen={!!toastDeleteMessage}
                message={toastDeleteMessage}
                duration={2000}
                onDidDismiss={() => { setToastDeleteMessage('') }}
            />

            <IonToast
                isOpen={!!toastBlockMessage}
                message={toastBlockMessage}
                duration={2000}
                onDidDismiss={() => { setToastBlockMessage('') }}
            />

            <IonModal isOpen={isEditing}>
                <IonHeader>
                    <IonTitle>Edit Friend</IonTitle>
                </IonHeader>

                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">
                                        Friend Name
                                    </IonLabel>
                                    <IonInput type="text" value={selectedFriend?.name} onIonInput={(event: any) => setEnteredName(event.target.value)} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonButton fill="clear" color="dark" onClick={cancelEditFriendHandler}>
                                    Cancel
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="secondary" expand="block" onClick={saveFriendHandler}>
                                    Save
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonMenuButton slot="start" />
                        <IonTitle>Ionic Meet</IonTitle>
                        {!isPlatform('android') && (
                            < IonButtons slot="end">
                                <IonButton onClick={startAddFriendHandler}>
                                    <IonIcon icon={addOutline} />
                                </IonButton>
                            </IonButtons>
                        )}
                    </IonToolbar>
                </IonHeader>


                {/*FRIENDS_DATA.map((friend => (*/
                    friendsCtx.friends.map(friend => (
                        <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                            <IonItemOptions side="start">
                                <IonItemOption color="danger" onClick={startBlockFriendHandler}>
                                    <IonIcon slot="icon-only" icon={ban} />
                                </IonItemOption>

                                <IonItemOption color="warning" onClick={startDeleteFriendHandler.bind(null, friend.id)}>
                                    <IonIcon slot="icon-only" icon={trash} />
                                </IonItemOption>
                            </IonItemOptions>

                            <IonItemOptions side="end">
                                <IonItemOption color="success" onClick={startEditFriendHandler.bind(null, friend.id)}>
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
                    ))}
                {isPlatform('android') && (
                    <IonFab horizontal="end" vertical="bottom" slot="fixed">
                        <IonFabButton color="secondary" onClick={startAddFriendHandler}>
                            <IonIcon icon={addOutline} />
                        </IonFabButton>
                    </IonFab>
                )}
            </IonContent>
        </IonPage >
    );
};

export default Meet
