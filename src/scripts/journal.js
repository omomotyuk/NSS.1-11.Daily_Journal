/*
//
*/

import selectItems from "./selectItems.js"
import selectElement from "./selectElement.js"
import createJournalEntryComponent from "./entryComponent.js"
import API from "./data.js"
import validateInputString from "./validateInputString.js"
import moodFilter from "./moodFilter.js"
import entriesDOM from "./entriesDOM.js"
import editJournalEntry from "./editJournalEntry.js"

//
let newEntry = ( date, title, content, mood, id ) => {
    const entry = {
        "date": date,
        "title": title,
        "content": content,
        "mood": mood,
        "id": id
    }
    return entry    
}

//
const getValue = ( id ) => {
    if( id === 'input-form__button' ) {
        return  document.querySelector(`#${id}`).value
    } else {
        return validateInputString( document.querySelector(`#${id}`).value )
    }
}

//
const validEntry = ( entry ) => {
    let value = true
    for( const data of Object.values( entry) ) {
        if( !data ) value = false
    }
    return value
}

//
const clearEntryForm = () => {
    editJournalEntry( newEntry( "","","","","" ) )
}

//
selectElement( selectItems() )

//
moodFilter( selectItems() )

//
let inputElement = document.querySelector( "#input-form__button" )

inputElement.addEventListener( "click", (event) => {
    let entry = newEntry( getValue('dateOfEntry'), getValue('coveredConcepts'), getValue('journalEntry'), getValue('mood'), getValue('input-form__button') )
    if( validEntry( entry ) ) { 
        API.saveJournalEntry( entry ).then( () => {
            entriesDOM( "" )
            clearEntryForm()
        })
    } else {
        console.log( "input form(s) empty" )
    }
})

//
selectItems().forEach( label => {
    const radioButton = document.querySelector( `#${label.toLowerCase()}` )
    radioButton.addEventListener( "click", (event) => {
        entriesDOM( label )
    })
})

//
const containsValue = ( entry, value ) => {
    let return_value = false
    for( const item of Object.values( entry ) ) { if( item.includes( value ) ) return_value = true } 
    return return_value
}

//
document.querySelector( '.search-text' ).addEventListener( "keypress", event => {
    API.getJournalEntries( "" ).then( data => {
        entriesDOM( data.filter( entry => containsValue( entry, event.target.value ) ) )
    })
})

//
entriesDOM( "" )
