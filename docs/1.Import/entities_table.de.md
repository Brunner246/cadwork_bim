# Datenbestellung

## Was? Wieso? Wer? Wie? Wann?

Welche Daten benötigen Sie von wem für ihre Planung? <br>
Definieren Sie, was Sie von jeder, am Projekt beteiligten, Partei benötigen. 

![localized image](../img/what.jpg)

Wie müssen diese Daten beschrieben sein? <br> Welcher Qualität soll die Geometrie entsprechen?<br> Welche Informationen benötigen Sie vom Gegenüber?<br> Welche Model View Defintion kommt für den Anwendungsfall zum Einsatz? <br> Für den Datenaustausch empfehlen wir für IFC 2x3 die MVD CoordinationView. <br> Für IFC 4 ist die MVD DesignTransferView empfohlen. 

Eine MVD (Model View Definition) definiert eine darauf abgestimmte Eingrenzung (Subset) der IFC-Spezifikation (IFC-Schema). Diese Eingrenzung fokussiert auf die Anforderungen (Exchange Requirements) des Erstellers und Empfängers der Informationen. Die Erhebung der Anforderungen erfolgt dabei auf Grundlage einer IDM (Information Delivery Manual)[^1]
[^1]: [BIMcert Handbuch](https://bif.bauwesen.tuwien.ac.at/fortbildung/kurse/aktuelle-kurse/bimcert/)

Ein IDM definiert den Umfang und die Art einer Informationsanforderung, die von den Projektbeteiligten zu einem konkreten Zeitpunkt (Prozess) benötigt oder geliefert werden müssen (Austauschanforderungen).


![localized image](../img/how.jpg)

Mit einer exakten Definition der Austauschanforderungen im Projektteam können Modelle effizient ausgetauscht und in den Planungsprozess eingebunden werden. 

![localized image](../img/why.jpg)

Die jeweiligen Inhalte werden in Fachmodelle gegliedert (abgeleitet vom Referenzmodell). Prüfen Sie die Modelle auf deren Inhalt (Geometrie, Informationen). 
Zu Beginn des Projekts muss ein Nullpunkt, die Geschossstruktur sowie das Planungsvorgehen (Prozesse) definiert werden. 

[Checkliste Modellierung](../2.Modellierung/modelling.de.md#ifc-modellaufbau--export-aus-cadwork) :bulb:

![localized image](../img/fachmodelle.jpg)


## Holzbau-relevante IFC-Typen (Beispieltabelle - der Umfang der Daten ist projektabhängig)

Entität           | empfohlen                           | nicht empfohlen | Kommentar
-----------------|:-----------------------------------:|:-------------:|
IfcBeam | :x:
IfcBuildingElementProxy | :x: | :x: | situativ <br> Für den Austausch von Aussparungen sind BuildingElementProxy's mit dem ObjectType **ProvisionForVoid** empfohlen.
IfcChimney | | :x:
IfcColumn | :x:
IfcCovering | | :x: | nur wenn für Konstruktion nötig
IfcCurtainWall | :x: | |  als ein Volumen (keine geometrischen Schichten)
IfcDoor | | :x: | "bestellen" Sie die Öffnung (OpeningElement) der Türe. Prüfen Sie die Abmessung der Öffnung mit Vorsicht.
IfcFooting | :x:
IfcMember | :x:
IfcPile | | :x:
IfcPlate | :x:
IfcRailing | | :x:
IfcRamp | | :x:
IfcRampFlight | | :x:
IfcRoof | :x:
IfcShadingDevice | | :x:
IfcSlab | :x: |  | als ein Volumen (keine geometrischen Schichten)
IfcStair | :x: | :x: | situativ
IfcStairFlight | | :x:
IfcWall | :x: |  | als ein Volumen (keine geometrischen Schichten)
IfcWindow | | :x: | in den meisten Fällen ist die Öffnung und nicht das Fenster relevant. 
IfcOpeningElement | :x: | | Prüfen Sie die Abmessung der Öffnung mit Vorsicht.
IfcDistributionControlElement | | :x:
IfcDistributionFlowElement | | :x:
IfcFurnishingElement | | :x: