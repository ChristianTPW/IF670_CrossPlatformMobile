import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';

import { Directory, Filesystem } from "@capacitor/filesystem";
import { base64FromPath } from "@ionic/react-hooks/filesystem";

import { useContext, useRef, useState } from 'react';
import MemoriesContext from '../data/memories-context';
import { useHistory } from 'react-router';

const NewMemory: React.FC = () => {
    const [takenPhoto, setTakenPhoto] = useState<{
        path: string;
        preview: string;
    }>();

    const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>('good');
    const titleRef = useRef<HTMLIonInputElement>(null);

    const memoriesCtx = useContext(MemoriesContext);
    const history = useHistory();

    const takePhotoHandler = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 80,
            width: 500
        });
        console.log(photo);

        if (!photo || !photo.path || !photo.webPath) {
            return;
        }

        setTakenPhoto({
            path: photo.path,
            preview: photo.webPath
        });
    };

    const addMemoryHandler = async () => {
        const enteredTitle = titleRef.current?.value;
        if (!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto || !chosenMemoryType) {
            return;
        }

        const fileName = new Date().getTime() + ".jpeg";
        const base64 = await base64FromPath(takenPhoto!.preview);
        await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data
        });

        memoriesCtx.addMemory(fileName, base64, enteredTitle.toString(), chosenMemoryType);
        history.length > 0 ? history.goBack() : history.replace('/good-memories');
    };

    const selectMemoryTypeHandler = (event: CustomEvent) => {
        const selectedMemoryType = event.detail.value;
        setChosenMemoryType(selectedMemoryType);
    };

    return (
        <IonPage>
            <IonHeader>

                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"></IonBackButton>
                    </IonButtons>

                    <IonTitle>Add New Memory</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonInput placeholder="Memory Title" type="text" ref={titleRef}></IonInput>
                </IonItem>
                <IonRow className="ion-text-center">
                    <IonCol>
                        <div className="image-preview">
                            {!takenPhoto && <h3> No photo choosen.</h3>}
                            {takenPhoto && <img src={takenPhoto.preview} alt="preview" />}
                        </div>
                    </IonCol>
                    <IonButton fill="clear" onClick={takePhotoHandler}>
                        <IonIcon slot="start" icon={camera} />
                        <IonLabel>Take  Photo</IonLabel>
                    </IonButton>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonSelect onIonChange={selectMemoryTypeHandler} value="good">
                            <IonSelectOption value="good">Good Memory</IonSelectOption>
                            <IonSelectOption value="bad">Bad Memory</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>

                <IonRow className="ion-margin-top">
                    <IonCol className="ion-text-center">
                        <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default NewMemory;
