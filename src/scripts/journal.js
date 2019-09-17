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
/*
"id": "1",
"date": "2019.08.27",
"title": "Array methods",
"content": "We learned about array methods, but only forEach made sense.",
"mood": "good"
*/
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
            editJournalEntry( newEntry( "","","","","" ) )
        })
        //document.querySelector( "#input-form__button" ).value =  ''
    } else {
        console.log( "input form(s) empty" )
    }
})

//
const radioButtonLabels = selectItems()
//console.log( "radioButtonLabels:", radioButtonLabels )

radioButtonLabels.forEach( label => {
    const radioButton = document.querySelector( `#${label.toLowerCase()}` )
    radioButton.addEventListener( "click", (event) => {
        entriesDOM( label )
    })
})

//
entriesDOM( "" )
