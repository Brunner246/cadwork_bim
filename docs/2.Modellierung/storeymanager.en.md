# Storey manager

The storey manager is used to structure the project. Buildings and associated floors can be created in the floor manager. 
With the BIM management tool, buildings and floor associations can be controlled within cadwork. Instead of the previous floor structure via the assembly, the floor manager (BMT) is used from version 27. 
The tool enables a clear, structured order of the floors and the associated components. 

![localized image](../img/struct.png){: style="width:900px"}

## Storey/BIM manager <br>
The storey manager or the BIM Management Tool (BMT) can either be docked to the left or the right menu or it can be opened as an extra window.

The Floor Manager can be opened via Window --> BIM Management Tool, or in the upper configuration bar by clicking on the "Floor/BMT" button.

![localized image](../img/bmt.gif){: style="width:900px"}

## The storey
A storey is the totality of all rooms in a building, which are located on an access level and are connected horizontally. It is possible for a storey to have differences in height. However, the decisive factor is that the rooms belong together horizontally. The term is used today regardless of the type of building construction.[freely translated according to: German Wikipedia "Geschoss"](https://de.wikipedia.org/wiki/Geschoss_(Architektur))

Many CAD software require defined heights in addition to the floor structure. Therefore, the heights can be defined in the floor settings. 
The height is, IFC-conform, always to be seen as the top edge of the unfinished floor (as attribute IfcBuildingstorey: Elevation).
![localized image](../img/storey_cw.png){: style="width:300px"}

A storey includes the ceiling and the components "on top of it" (walls, columns, etc.). 
![localized image](../img/storey_bs.png "https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2_TC1/HTML/link/ifcbuildingstorey.htm"){: style="width:600px"}

## The context menu
Right-clicking in the BIM management tool opens the context menu.
Various settings can be made via the context menu. The options in the context menu differ for a right-click on a building and a right-click in the empty area of the BMT.

### Right-click in the empty area

![localized image](../img/new_bldg.png){: style="width:400px"}

1. Creating a new building and creating a new storey in the active building.
2. Displayed information in BMT
    * Finished floor thickness. The summarised floor thickness is entered as one value. 
    * Elevation. Usually the Elevation height is based on top of of rough floor. 
    * Display one storey. Only the selected storey is visible, the others are hidden.
    * [Bi-directional control](../1.Import/import.en.md#bi-direktionale-aktivierung)
3. Help... <br>
    * Detailed information on the traffic lights system for visualisation. 

    ![localized image](../img/help.png){: style="width:300px"}


### Right-click on an existing building / on an existing floor

![localized image](../img/storey_context.png){: style="width:900px"}

1. Configuration buiding/storey <br>
![localized image](../img/storey.gif){: style="width:900px"}
2. Visibility settings
    * Three filtering options for visibility of chosen tree entry. 
3. State of elements and maximizing/minimizing tree view
    * Activate or deactivate elements in chosen tree entry
    * Expanded directories can be minimized via this button and vice versa


## Assign elements to building/storey

**Option A**

1. Double click on the floor in the BMT activates the building/storey
2. Newly modeled elements are directly assigned to this building/storey

**Option B**

* Activates elements can be assigned to existint buildings/storeys via Modify -> BIM -> Building or via  Modify -> BIM -> Storey


