/*
//
*/

import API from "./data.js"
import createJournalEntryComponent from "./entryComponent.js"

//
const entriesDOM = ( outputElement ) => {
    API.getJournalEntries( outputElement ).then( data => {
        for( let i = 0; i < data.length; i++ ) {
            outputElement.innerHTML += createJournalEntryComponent( data[i] );
        }
    })
}

export default entriesDOM
