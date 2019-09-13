/*
//
*/

import selectElement from "./select.js"
import createJournalEntryComponent from "./entryComponent.js"
import API from "./data.js"
import sectionElement from "./entriesDOM.js"


//const journalEntries = [];

//
/*function journalEntry ( date, title, content, mood ){ 
    this.date = date;
    this.title = title;
    this.content = content;
    this.mood = mood;
}*/

let newEntry = ( date, title, content, mood ) => {
    const entry = {
        "date": date,
        "title": title,
        "content": content,
        "mood": mood
    }
    return entry    
}
/*
"id": "1",
"date": "2019.08.27",
"title": "Array methods",
"content": "We learned about array methods, but only forEach made sense.",
"mood": "good"
*/

//
/*const entry01 = new journalEntry (
    "2019.08.27",
    "Array methods",
    "We learned about array methods, but only forEach made sense.",
    "good"
)
*/

const getValue = ( id ) => {
    console.log( document.querySelector(`#${id}`).value ) 
    return document.querySelector(`#${id}`).value 
}

const getHTML = ( id ) => {
    return document.querySelector(`#${id}`).innerHTML
}

//let currentEntry = 

let inputElement = document.querySelector( "#input-form__button" )

inputElement.addEventListener( "click", (event) => {

    let entry = newEntry( getValue('dateOfEntry'), getValue('coveredConcepts'), getHTML('journalEntry'), getValue('mood') )

    console.log( "entry: ", entry )

    console.log( createJournalEntryComponent( entry ) )

    API.editEntries( entry )

    sectionElement.innerHTML += createJournalEntryComponent( entry );

    //return entry
})

//if( currentEntry !=  ) console.log( "currentEntry: ", currentEntry )



/*
<script src="src/select.js"></script>
<!-- <script src="src/journal.js"></script> -->
<script src="src/data.js"></script>
<script src="src/entryComponent.js"></script>
<script src="src/entriesDOM.js"></script>
*/

