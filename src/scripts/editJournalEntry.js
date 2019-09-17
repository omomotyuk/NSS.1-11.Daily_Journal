/*
//
*/

//
const editJournalEntry = ( entry ) => {

    document.querySelector( "#dateOfEntry" ).value = entry.date
    document.querySelector( "#coveredConcepts" ).value =  entry.title
    document.querySelector( "#journalEntry" ).value =  entry.content
    document.querySelector( "#mood" ).value =  entry.mood
    document.querySelector( "#input-form__button" ).value =  entry.id
}

export default editJournalEntry
