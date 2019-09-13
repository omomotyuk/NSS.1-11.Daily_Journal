/*
//
*/

import selectElement from "./select.js"
import createJournalEntryComponent from "./entryComponent.js"
import API from "./data.js"
import sectionElement from "./entriesDOM.js"

//
/*
"id": "1",
"date": "2019.08.27",
"title": "Array methods",
"content": "We learned about array methods, but only forEach made sense.",
"mood": "good"
*/
let newEntry = ( date, title, content, mood ) => {
    const entry = {
        "date": date,
        "title": title,
        "content": content,
        "mood": mood
    }
    return entry    
}

//
const getValue = ( id ) => {
    return document.querySelector(`#${id}`).value 
}

let inputElement = document.querySelector( "#input-form__button" )

//
inputElement.addEventListener( "click", (event) => {
    let entry = newEntry( getValue('dateOfEntry'), getValue('coveredConcepts'), getValue('journalEntry'), getValue('mood') )

    console.log( "entry: ", entry )

    API.editEntries( entry )

    sectionElement.innerHTML += createJournalEntryComponent( entry );
})
