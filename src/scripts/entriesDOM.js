/*
//
*/

import API from "./data.js"
import createJournalEntryComponent from "./entryComponent.js"
import editJournalEntry from "./editJournalEntry.js"

//
const entriesDOM = ( label ) => {

    //
    const createEntriesDOM = ( data ) => {
        data.forEach( entry => {
            outputElement.innerHTML += createJournalEntryComponent( entry )
        })
    }

    const outputElement = document.getElementById('entryLog')
    outputElement.innerHTML = ""

    //
    const createAndListen = ( data ) => {

        createEntriesDOM( data )

        data.forEach( entry => {
            //
            const deleteButton = outputElement.querySelector( `#delete-id-${entry.id}` )
            deleteButton.addEventListener( "click", event => {
                API.deleteJournalEntry( entry )
                event.target.parentNode.parentNode.removeChild( event.target.parentNode )
            })

            //
            const editButton = outputElement.querySelector( `#edit-id-${entry.id}` )
            editButton.addEventListener( "click", event => {
                editJournalEntry( entry )
            })
       })
    }

    if( typeof( label ) === 'string' ) {
        API.getJournalEntries( label ).then( data => {
        createAndListen( data )
        })
    } else {
        createAndListen( label )
    }
}

export default entriesDOM
