# Exchange Requirements

## What? Why? Who? How? When?

What data do you need from whom for your planning? <br>
Determine what you need from each party involved in the project. 

![localized image](../img/what.jpg)

How must this data be described? <br>
What quality should the geometry correspond to? <br>
What information do you need from the counterpart? <br>
Which model view definition is used for the application? <br>
For data exchange, we recommend the MVD CoordinationView for IFC 2x3. <br>
For IFC 4, the MVD DesignTransferView is recommended. <br>

An MVD (Model View Definition) defines a subset of the IFC specification (IFC schema). This subset focuses on the requirements (exchange requirements) of the creator and recipient of the information. The requirements are elicited on the basis of an IDM (Information Delivery Manual)1.

An IDM defines the scope and type of an information requirement that must be needed or delivered by the project participants at a specific point in time (process) (exchange requirements).


![localized image](../img/how.jpg)

With an exact definition of the exchange requirements in the project team, models can be exchanged efficiently and integrated into the planning process. 

![localized image](../img/why.jpg)

The respective contents are divided into subject models (Derived from the reference model). Check the models for their content (geometry, information). 
At the beginning of the project, a zero point, the storey structure as well as the planning procedure (processes) must be defined.

[Checklist Modelling](../2.Modellierung/modelling.en.md#ifc-model-setup--cadwork-export) :bulb:

![localized image](../img/fachmodelle.jpg)


## IFC types relevant to timber construction (Example table - the scope of the data depends on the project)

Entities           | recommended                           | not recommended | comment
-----------------|:-----------------------------------:|:-------------:|
IfcBeam | :x:
IfcBuildingElementProxy | :x: | :x: | situational <br> For the exchange of recesses, BuildingElementProxy's with the PredefinedType **ProvisionForVoid** is required.
IfcChimney | | :x:
IfcColumn | :x:
IfcCovering | | :x: | Only if necessary for construction
IfcCurtainWall | :x: | |  as one volume (no geometric layers)
IfcDoor | | :x: | "order" the opening (opening element) of the door. Check the dimension of the opening with care.
IfcFooting | :x:
IfcMember | :x:
IfcPile | | :x:
IfcPlate | :x:
IfcRailing | | :x:
IfcRamp | | :x:
IfcRampFlight | | :x:
IfcRoof | :x:
IfcShadingDevice | | :x:
IfcSlab | :x: |  | as one volume (no geometric layers)
IfcStair | :x: | :x: | situational
IfcStairFlight | | :x:
IfcWall | :x: |  | as one volume (no geometric layers)
IfcWindow | | :x: | in most cases it is the opening and not the window that is relevant. 
IfcOpeningElement | :x: | | Check the dimension of the opening with care.
IfcDistributionControlElement | | :x:
IfcDistributionFlowElement | | :x:
IfcFurnishingElement | | :x: