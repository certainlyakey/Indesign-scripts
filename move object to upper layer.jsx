//DESCRIPTION: One Layer Up  
for (s=0; s<app.selection.length; s++)  
{  
if (app.selection[s].itemLayer.index > 0)  
  app.selection[s].itemLayer = app.activeDocument.layers.previousItem(app.selection[s].itemLayer);  
}  