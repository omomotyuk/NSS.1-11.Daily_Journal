/*
//
*/

import API from "./data.js"
import createJournalEntryComponent from "./entryComponent.js"

//
const entriesDOM = ( label ) => {

    console.log( "label: ",label )

    const outputElement = document.getElementById('entryLog')
    outputElement.innerHTML = ""

    API.getJournalEntries( label ).then( data => {
        for( let i = 0; i < data.length; i++ ) {
            outputElement.innerHTML += createJournalEntryComponent( data[i] );
        }
    })
}

export default entriesDOM
