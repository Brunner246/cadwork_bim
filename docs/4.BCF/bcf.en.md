# BCF

## What is the BIM-Collaboratin-Format (BCF)? 

![localized image](../img/bcf.jpeg "https://b2b.partcommunity.com/community/pin/35477/bcf-bim-collaboration-format-explained"){: style="width:700px"}

BCF is the abbreviation for BIM Collaboration Format, which is an open format for modelbased communication. 

In general, the BIM Collaboration Format (BCF) enables different BIM applications to communicate with each other in a model-based manner.
Inbetween different applications the current version BCF 2.1 enables the transmission of
* model-related annotations (so-called issues),
* the affected elements in the model (via object GUIDs) as well as
* reproducible screen sections.

This model-based communication improves coordination. Thus, information about issues in the model, their location, viewing direction, component, remarks, user, time or even changes in the IFC data model can be exchanged in a targeted manner. 

The development of BCF began in 2009 and was originally conceived by two members of the buildingSMART International Implementation Support Group (ISG), Solibri and Tekla, together with the Institute for Applied Construction Informatics (iabi) at the University of Applied Sciences in Munich, Germany. Their desire to use an open communication technology for IFC-based workflows led to the prototyping and eventual full development of BCF with other ISG members.

BCF was created to facilitate open communication and to improve IFC-based openBIM processes by using open standards (file formats and data communication protocols) to more easily identify and share model-based issues between BIM software tools, bypassing proprietary formats and workflows.

There are a number of use cases that can benefit from BCF-enabled workflows where information can be derived from the BIM and linked back to the BIM for object-specific information. These cases may include the following:

* Design phase
    * Documenting quality assurance/quality review elements.
    * Identify design coordination issues (clash detection) between domain BIMs.
    * Commenting on design options, object substitutions, and material selections 
* Procurement phase
    * Coordination points and clarifications for bidding.
    * Cost and supplier information for objects, assemblies, and/or systems.
* Construction phase
    * Quality assurance/quality inspection records.
    * Tracking availability of objects/materials and coordination of substitutions.
    * Collection of last minute information for handover to owner/operator as part of COBie services.
* Operating phase
    * Notes on handover models when changes are made to the facility and its many elements during use.
    * Owner's notes on upgrades needed.


BCF is a buildingSMART International openBIM standard like IFC and the Data Dictionary (bSDD), which is open to everybody. [^5]

## BCF in cadwork 

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3uY7HpMijuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

Open the BCF Manager directly from the BIM_Management tool, or from Window -> BCF Manager. Click on the "+" button to create a new topic.
A screenshot of the current view will be created. In addition to the actual screenshot, this also contains a viewpoint (camera coordinates in 3D space), the visibilities of the elements and the status of the active components.

![localized gif](../img/issue.gif){: style="width:900px"}

You may use the BCF-manager also native for internal cadwork collaboration for e.g. documentation of changes.

[^5]: [BIMcert](https://technical.buildingsmart.org/standards/bcf/)

![localized image](../img/bcf_manager.png)

