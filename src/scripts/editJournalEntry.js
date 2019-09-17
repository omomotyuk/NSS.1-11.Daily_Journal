/*
//
*/

//
const editJournalEntry = ( entry ) => {

    //console.log( "editJournalEntry mode" )

    document.querySelector( "#dateOfEntry" ).value = entry.date
    document.querySelector( "#coveredConcepts" ).value =  entry.title
    document.querySelector( "#journalEntry" ).value =  entry.content
    document.querySelector( "#mood" ).value =  entry.mood
    document.querySelector( "#input-form__button" ).value =  entry.id

    //
    //let idElement = document.querySelector( "#input-form__button" )
    //idElement.value =  entry.id
    //console.log( "edit-id: ",idElement.value )
}

export default editJournalEntry
