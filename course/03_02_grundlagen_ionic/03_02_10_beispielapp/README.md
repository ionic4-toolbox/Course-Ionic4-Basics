# Erstellen einer Beispiel App in Ionic 4


## 01- Grundgerüst

Erstellen des Grundgerüst basierend auf dem Sidemenu-Template

Hinzufüfen eines Button in home.page.html

    <ion-button (click)="updateValue()">Click me!</ion-button> to change the Text: {{ myVariable }}


Hinzufügen der Java-Script-Funktion zum Ändern des Text
    myVariable: string = "The force is with me!";

    constructor() {}

    updateValue() {
        console.log("HomePage:updateValue")
        this.myVariable = "Perfect, you changed the Value!";
    }