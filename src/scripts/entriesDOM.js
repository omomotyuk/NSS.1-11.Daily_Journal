/*
//
*/

import API from "./data.js"
import createJournalEntryComponent from "./entryComponent.js"

//
const entriesDOM = ( label ) => {

    const createEntriesDOM = ( data ) => {
        data.forEach( entry => {
            outputElement.innerHTML += createJournalEntryComponent( entry )
        })
    }

    console.log( "label: ",label )

    const outputElement = document.getElementById('entryLog')
    outputElement.innerHTML = ""

    API.getJournalEntries( label ).then( data => {
        createEntriesDOM( data )
        data.forEach( entry => {
            const deleteButton = outputElement.querySelector( `#button-id-${entry.id}` )
            deleteButton.addEventListener( "click", event => {
                console.log( "entry id: ",entry.id )
                API.deleteJournalEntry( entry )
                //createEntriesDOM( data )
            })
        })
    })
}

export default entriesDOM
