# Property Mapper

![localized image](../img/de/prop_mapper.png)

1. **IFC-file selected**
    * Dropdown of loaded IFC-files in cadwork 3D. The one to make settings for can be chosen, if there are several imported in 3D.

2. **Treeview IFC-file** 
    * The tree shows the hierarchical view from the IFC-file like in BMT. Bidirectional activation is implemented here as well. 

3. **Property toolbar**
    * In the property toolbar information on entities (attributes), membership (structure), material and properties are listed.

4. **Add custom mapping entry**
    * This button can be used to make a manual entry for mapping properties from the PropertySet.
    * The mapping entry applies to all elements that have this property!
	
5. **Add selection as mapping entry (recommended)**
    * Select a property in the properties tree (selected property in the picture --> Renovation Status) and click on "Add selection as mappung entry". The names of the property are automatically transferred to the input fields. If you now activate the checkbox "Create user attribute according to property name", a new user attribute will be created at the end of the list during mapping if the attribute does not yet exist (see GIF). This new user attribute automatically gets the name of the property. 
    * The mapping entry applies to all elements that have this property!

6. **Listview of mapped properties**
    * In the table the existing mapping entries are listed.

7. **Load/Save**
    * Project-specific mapping sets can be loaded or saved. The files are saved in the project folder. 

8. **Start mapping...**
    * After definition of mapping entries the proper mapping can be started. The function runs over all elements in the chosen IFC-file, not only over active ones! 

![localized gif](../img/mapping.gif){: style="width:900px"}



**FromEntity** <br>
class, also entity, element class, entity type:<br> 
According to the IFC definition, an entity is an information class defined by common attributes and constraints. Attributes as well as relationships to other entity types are defined for each entity type. The object-oriented concept of inheritance is implemented. This means that attributes and relationships are passed on to subtypes.


!!! Info
    Generally you should set the option to **FromEntity**. You only should choose **FromType** if explicity these information should be taken into consideration.<br> Object types are used in software that works with component libraries. Attributes and properties can be assigned to these objects. The objects in the component library serve as a template during modeling. The properties of the object type (catalog element) can be different from the entity type (modified properties). 
	
	
**FromType** <br>
An object type, similar to the class, is also a kind of template that combines common characteristics of several instances. However, certain basic parameters that remain the same for recurring components are defined before the actual instantiation.<br>
In IFC, the concept of object types is provided in order to be able to efficiently describe frequently recurring components. For this purpose, a reusable pattern is predefined, i.e. a kind of "template". The object types can define attributes and properties, which are then automatically passed on to the linked objects. This can be referred to as pre-instantiation. When the object types are actually instantiated, only data, such as location or relationships to other objects, are specified. This data cannot be specified via object types.
