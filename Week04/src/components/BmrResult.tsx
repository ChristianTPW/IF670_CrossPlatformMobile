import { IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React from "react";

const BmrResult: React.FC<{ BmrResult: number; }> = props => {

    return (
        <IonRow>
            <IonCol>
                <IonCard className="ion-padding">
                    <IonCardSubtitle className="ion-text-center">
                        BMR = {props.BmrResult} Calories/day
                    </IonCardSubtitle>

                    <IonCardSubtitle className="ion-text-center">
                        Daily calorie needs based on activity level
                    </IonCardSubtitle>

                    <IonRow>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-left">
                                <b>Activity Level</b>
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-right">
                                <b>Calorie</b>
                            </IonCardSubtitle>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-left">
                                Sedentary: little or no exercise
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-right">
                                {props.BmrResult * 1.2}
                            </IonCardSubtitle>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-left">
                                Exercise 1-3 times/week
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-right">
                                {props.BmrResult * 1.375}
                            </IonCardSubtitle>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-left">
                                Exercise 4-5 times/week
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-right">
                                {props.BmrResult * 1.55}
                            </IonCardSubtitle>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-left">
                                Daily exercise or intense exercise 3-4 times/week
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-right">
                                {props.BmrResult * 1.725}
                            </IonCardSubtitle>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-left">
                                Intense exercise 6-7 times/week
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="ion-text-right">
                                {props.BmrResult * 1.9}
                            </IonCardSubtitle>
                        </IonCol>
                    </IonRow>

                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmrResult;