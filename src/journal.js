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
function journalEntry ( date, title, contents, mood ){ 
    this.date = date;
    this.title = title;
    this.contents = contents;
    this.mood = mood;
}

//
const firstEntry = new journalEntry (
    "2019.08.28",
    "Objects Representing Things",
    "Since objects are the core concept behind Object Oriented Programming - what you are learning here at NSS - you are going to learn how to use objects to provide value and context to data in your applications. As developers, we write software in order to automate processes that people already perform with real world things. Your code will represent those people and things as objects.",
    "good"
)

//
const secondEntry = new journalEntry (
    "2019.08.29",
    "Objects Representing Things",
    "Since objects are the core concept behind Object Oriented Programming - what you are learning here at NSS - you are going to learn how to use objects to provide value and context to data in your applications. As developers, we write software in order to automate processes that people already perform with real world things. Your code will represent those people and things as objects.",
    "good"
)

//
const thirdEntry = new journalEntry (
    "2019.08.30",
    "Objects Representing Things",
    "Since objects are the core concept behind Object Oriented Programming - what you are learning here at NSS - you are going to learn how to use objects to provide value and context to data in your applications. As developers, we write software in order to automate processes that people already perform with real world things. Your code will represent those people and things as objects.",
    "good"
)

//
journalEntries.push( firstEntry );
journalEntries.push( secondEntry );
journalEntries.push( thirdEntry );

console.log( "Journal Entries: ", journalEntries );
