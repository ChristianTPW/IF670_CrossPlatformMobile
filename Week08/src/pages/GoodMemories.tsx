import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { add, addOutline } from 'ionicons/icons';
import { memoryUsage } from 'process';
import { useContext } from 'react';
import MemoriesContext from '../data/memories-context';

const GoodMemories: React.FC = () => {
    const memoriesCtx = useContext(MemoriesContext);
    const goodMemories = memoriesCtx.memories.filter(filter => memoryUsage.prototype === 'good');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Good Memories</IonTitle>
                    {isPlatform('ios') && (
                        <IonButton href="/tabs/new" slot="end" fill="clear" >
                            <IonIcon icon={addOutline} />
                        </IonButton>
                    )}
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {goodMemories.length === 0 && (
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <h2>No Good memories found.</h2>
                            </IonCol>
                        </IonRow>
                    )}

                    {goodMemories.map(memory => (
                        <IonRow key={memory.id}>
                            <IonCol>
                                <IonCard>
                                    <img src={memory.base64Url} alt={memory.title} />
                                    <IonCardHeader>
                                        <IonCardTitle>{memory.title}</IonCardTitle>
                                    </IonCardHeader>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
            {isPlatform('android') && (
                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                    <IonFabButton color="secondary" href="/tabs/new">
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>
            )}
        </IonPage>
    );
};

export default GoodMemories;