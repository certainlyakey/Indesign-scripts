﻿// TransposeTwoCharacters.jsx//// Keith Gilbert// www.gilbertconsulting.com// blog.gilbertconsulting.com//// Modified 2010-06-10#target indesign// Check to see whether any InDesign documents are open.// If no documents are open, display an error message.if (app.documents.length > 0) {    if (app.selection.length > 0) {        if (app.selection[0].constructor.name == "InsertionPoint") {            switch (app.selection[0].parent.constructor.name) {                case "Story":                    var myStory = app.selection[0].parentStory;                    var myIndex = app.selection[0].index;                    if ((myIndex != 0) && (myIndex !=myStory.length)) { // The cursor isn't at the beginning or end of the story                        var myText1 = myStory.characters[myIndex-1];                        var myText2 = myStory.characters[myIndex];                        myText1.move(LocationOptions.after,myText2);                        app.select(myStory.insertionPoints[myIndex]);                    }                    break;                case "Cell":                    var myStory = app.selection[0].parent.characters;                    var myIndex = app.selection[0].index;                    if ((myIndex != 0) && (myIndex !=myStory.length)) { // The cursor isn't at the beginning or end of the cell                        var myText1 = myStory[myIndex-1];                        var myText2 = myStory[myIndex];                        myText1.move(LocationOptions.after,myText2);                        app.select(app.selection[0].parent.insertionPoints[myIndex]);                    }                break;            }        }        else {            // Something other than an insertion point is selected            alert("Please click between two characrters with the Type tool and try again.");        }    }    else {        // Nothing is selected        alert("Please click between two characters with the Type tool and try again.");    }}else {    // No documents are open, so display an error message.    alert("No InDesign documents are open. Please open a document and try again.");}