/*
//
*/
/*
    You defined form fields for the following bits of data to collect from a user of your application.

    Date of the journal entry.
    Concepts covered (which will be the title of the entry).
    The long-form contents of the journal entry.
    The mood of the journal entry.
    In your JavaScript file, define an object that will represent a journal entry in your code.
*/
/*
    Define the keys and value for a JavaScript object that represents a journal entry about what you learned today
*/
const journalEntries = [];

//
function journalEntry ( date, title, content, mood ){ 
    this.date = date;
    this.title = title;
    this.content = content;
    this.mood = mood;
}

//
const entry01 = new journalEntry (
    "2019.08.27",
    "Array methods",
    "We learned about array methods, but only forEach made sense.",
    "good"
)
const entry02 = new journalEntry (
    "2019.08.28",
    "Objects Representing Things",
    "Since objects are the core concept behind Object Oriented Programming - what you are learning here at NSS - you are going to learn how to use objects to provide value and context to data in your applications. As developers, we write software in order to automate processes that people already perform with real world things. Your code will represent those people and things as objects.",
    "good"
)
const entry03 = new journalEntry (
    "2019.08.29",
    "Building DOM Components",
    "Creating an independent component that can be used anywhere in your application has been a goal of JavaScript developers since the mid-2000s. The reason being that component-based systems are infinitely flexible and composable, allowing for faster development and modifications of features.",
    "good"
)

//
journalEntries.push( entry01 );
journalEntries.push( entry02 );
journalEntries.push( entry03 );

//console.log( "Journal Entries: ", journalEntries );
console.table( journalEntries );

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

/*
    Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM. 
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/
//
const sectionElement = document.getElementById('entryLog');

//
const renderJournalEntries = (entries) => {
    for( let i = 0; i < entries.length; i++ ) {
        const articleElement = createJournalEntryComponent( entries[i] );
        sectionElement.innerHTML += articleElement;
    }
}

// Invoke the render function
renderJournalEntries( journalEntries )
