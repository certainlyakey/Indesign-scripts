/*0*/ // Save to preferences
 
//tomaxxiINCR.jsx
//An InDesign CS3/CS4/CS5 JavaScript
 
if (app.dialogs.length > 0) app.dialogs.everyItem().destroy();
 
if (Number(app.version.split(".")[0]) < 5){
     alert("Script is not compatible");
}else{
    if (app.documents.length != 0){
        ChangeIncrement();
    }else{
        exit();
    }
}
 
function ChangeIncrement(){
     app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
          
     var saveSett = eval(loadSettings());
     
     var UNITS = UNITS||(function(){
          var muArray={}, mUnits=MeasurementUnits;
          muArray[mUnits.AGATES]=['agt','0.001','19.444'];
          muArray[mUnits.CENTIMETERS]=['cm','0.001','3.527'];
          muArray[mUnits.CICEROS]=['ci','0c0.001','7c9.839'];
          muArray[mUnits.INCHES]=['in','0.001','1.388'];
          muArray[mUnits.INCHES_DECIMAL]=['in','0.001','1.388'];
          muArray[mUnits.MILLIMETERS]=['mm','0.001','35.277'];
          muArray[mUnits.POINTS]=['pt','0.001','100'];
         muArray[mUnits.PICAS]=['pc','0p0.001','8p4'];
               if (Number(app.version.split(".")[0]) > 6){
                    muArray[mUnits.PIXELS]=['px','0.001','100'];
               }
          return muArray;
     })();
 
     var vp = app.activeDocument.viewPreferences;
     var vx = app.viewPreferences;
     
     if((UNITS[vp.horizontalMeasurementUnits][0]== "agt")||
     (UNITS[vx.horizontalMeasurementUnits][0]== "agt")){
          mk=5.1428571;
          hk=5.1428571;
     }else{
          mk = UnitValue(1,UNITS[vx.horizontalMeasurementUnits][0]).as('pt');
          hk = UnitValue(1,UNITS[vp.horizontalMeasurementUnits][0]).as('pt');
     }
 
     var currentINCR = vp.cursorKeyIncrement;
     
     var myINCR = app.dialogs.add({
          name:"/// Set Key Increment ///", canCancel:true});
          with(myINCR.dialogColumns.add()){
               with(dialogRows.add()){
                    with(dialogColumns.add()){
                         staticTexts.add({staticLabel:"Key Increment:", minWidth:10});
                    }
                    with(dialogColumns.add()){
                         var myIncrement = measurementEditboxes.add({editValue:currentINCR*hk, editUnits:vp.horizontalMeasurementUnits});
                    }
                    with(dialogColumns.add()){
                         staticTexts.add({staticLabel:UNITS[vp.horizontalMeasurementUnits][1] + " - " + UNITS[vp.horizontalMeasurementUnits][2]+" "
                         + UNITS[vp.horizontalMeasurementUnits][0], minWidth:10});
                    }
               }
               with(dialogRows.add()){
                    with(dialogColumns.add()){
                         var saveToPrefs = checkboxControls.add({staticLabel:"&Save to preferences", checkedState:saveSett});
                    }
               }
               with(dialogRows.add()){
                    with(dialogColumns.add()){
                         staticTexts.add({staticLabel:"*If you don't save, value will be for this document only!", minWidth:10});
                    }
               }
          }
     
     if(myINCR.show() == true){
          if((myIncrement.editValue < 0.001)||(myIncrement.editValue > 100)){
               alert("Set Key Increment Value Error!\r\rValue must be between " + UNITS[vp.horizontalMeasurementUnits][1] + " and "
               +UNITS[vp.horizontalMeasurementUnits][2] + " " + UNITS[vp.horizontalMeasurementUnits][0]);
          }else{
               vp.cursorKeyIncrement=myIncrement.editValue/hk;
                    if(saveToPrefs.checkedState == 1){vx.cursorKeyIncrement=myIncrement.editValue/mk;}
          }
          saveSettings(saveToPrefs.checkedState);
     }
     myINCR.destroy();
}
 
function loadSettings(){
     var f = File(app.activeScript);
          if ( f.open('r') ){
               var sett=String(f.readln());
               sett=sett.substr(sett.indexOf("*")+1,1);
               return sett;
          }
}
 
function saveSettings(curSett){
     if(curSett == true){curSett = 1;}else{curSett = 0;}
     var settPos = String();
     var f = File(app.activeScript);
     if ( f.open('e') ){
          settPos = f.readln();
          settPos = settPos.indexOf("*")+1;
          f.seek(settPos);
          f.write(curSett);
          f.close();
     }
}