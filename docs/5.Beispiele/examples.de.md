# Beispiele

Folgend sind Beispiele von cadwork Elementen mit deren zugehörigen IfcTyp dargestellt. Die Hüllkörper wurden zur besseren Darstellung von den Bauteilen versetzt platziert. 

## Architektur - Hüllkörper Elemente
Für den Export von Hüllkörpern ist unter den Exporteinstellungen -> Elemente -> :white_check_mark: Hüllelemente exportieren die Checkbox zu aktieren.
Falls Architekturelemente zum Datenaustuasch modelliert werden, müssen diese zwingend mit den Architekturelementen modelliert werden. Öffnungen in Wänden werden nicht eingeschnitten, sondern mit dem Elementtyp **Öffnung** modelliert. 

![localized image](../img/bounding.de.png)

### Wände und Öffnungen
![localized image](../img/walls_cov.png)

### Fenster und Türen
Fenster und Türen sind über die Architekturelemente --> Tür/Fenster (Variante) zu erstellen. Bei dieser Vorgehensweise, werden diese Elemente korrekt als IfcWindow respektive IfcDoor exportiert. 

![localized image](../img/window.png)

## Holzrahmenbaudecke
Die Bauteile sind nach Bauunter-, oder nach Baugruppe zusammengefasst.  <br>
!!! info " <br>In den Exporteinstellungen -> Elemente -> Zusammenfassen nach: Bauunter-, Baugruppe ist die Checkbox :white_check_mark: zu aktivieren. Bei aktiver Checkbox werden die Elemente zum Bauteil (z.B. IfcSlab) zusammengefasst. Die Checkbox -> Hüllelemente exportieren soll deaktiviert :x: werden."

![localized image](../img/slab.png)

!!! Tipp
    Nutzen Sie auch für Dachelemente den IfcTyp -> IfcSlab. In den Elementbaueigenschaften Ctrl+E ist der Typ Rahmenbaudach zu wählen. Somit resultiert im Ifc Export der Typ **IfcSlab mit dem PredefinedType ROOF**. 

## Holzrahmenbauwand
Die Bauteile sind nach Bauunter-, oder nach Baugruppe zusammengefasst. <br>
![localized image](../img/wall_cw.png)

## Assemblies
!!! info "  <br>Die IfcElementAssembly stellt komplexe Elementbaugruppen dar, die aus mehreren Elementen zusammengesetzt sind.<br> BEISPIEL Holz-, oder Stahlkonstruktionsbaugruppen, wie z. B. Fachwerke und verschiedene Arten von Rahmen, können durch die Entität IfcElementAssembly dargestellt werden. Auch Treppenabschnitte und andere vorgefertigte Elemente sind Beispiele für die allgemeine Entität IfcElementAssembly"

![localized image](../img/assembly.png)

### Stahlteile
![localized image](../img/steel_cw.png)