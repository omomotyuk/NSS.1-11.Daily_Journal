/*
//
*/

/*
    Purpose: To create, and return, a string template that represents a single journal entry object as HTML
    Arguments: journalEntry (object)
*/
const createJournalEntryComponent = ( journalEntry ) => {
    // Create your own HTML structure for a journal entry
    return `
        <article class="log-item">
            <h3><span>${journalEntry.date}</span> ${journalEntry.title}</h3>
            <p>${journalEntry.content}</p>
            <p><span>Mood:</span> ${journalEntry.mood}</p>
        </article>
    `
}

//
const sectionElement = document.getElementById('entryLog');

//
function getData() {
    fetch( "http://localhost:3000/entries" ) // Fetch from the API
    .then( data => data.json() )  // Parse as JSON
    .then( parsed_data => {
        //console.table( parsed_data )
        parsed_data.forEach( (record,index) => {
            //console.log( index, "record", record)
            sectionElement.innerHTML += createJournalEntryComponent( record );
        })
    })
}

//
getData()
