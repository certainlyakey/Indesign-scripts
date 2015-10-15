//DESCRIPTION: One Layer Down  
for (s=0; s<app.selection.length; s++)  
{  
 if (app.selection[s].itemLayer.index < app.activeDocument.layers.length-1)  
  app.selection[s].itemLayer = app.activeDocument.layers.nextItem(app.selection[s].itemLayer);  
}  