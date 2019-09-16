/*
//
*/

import API from "./data.js"
import createJournalEntryComponent from "./entryComponent.js"

//
const sectionElement = document.getElementById('entryLog');
sectionElement.innerHTML = "";

//
API.getJournalEntries().then( data => {
    for( let i = 0; i < data.length; i++ ) {
        sectionElement.innerHTML += createJournalEntryComponent( data[i] );
    }
})

export default sectionElement
