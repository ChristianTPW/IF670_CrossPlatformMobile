import { IonIcon, IonLabel, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { happy, mailOutline, sad, videocamOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import BadMemories from "./BadMemories";
import GoodMemories from "./GoodMemories";
import NewMemory from "./NewMemory";


const MemoriesTab: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/goodmemories" />
                <Route exact path="/tabs/goodmemories" component={GoodMemories} />
                <Route exact path="/tabs/badmemories" component={BadMemories} />
                <Route exact path="/tabs/new" component={NewMemory} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="mail" href="/tabs/goodmemories">
                    <IonIcon icon={happy} />
                    <IonLabel>Mail</IonLabel>
                </IonTabButton>

                <IonTabButton tab="meet" href="/tabs/badmemories">
                    <IonIcon icon={sad} />
                    <IonLabel>Meet</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default MemoriesTab;