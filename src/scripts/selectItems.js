/*
//
*/
import API from "./data.js"

//
const selectItems = () => {
    //let selectItems = [ "Joy", "Fear", "Anger", "Frustrated", "Acceptance", "Excited", "Confusion", "Curious", "Surprise", "Determined", "Hopeful", "Happy", "Fine", "Sad", "Anxious", "Love", "Sadness", "Wonder", "Rejuvenated", "Drained", "Confident", "Amused", "Guilty", "Relieved", "Indifferent", "Good", "Ok" ];
    let selectItems = [ "Sad", "Happy", "Ok" ]

    return selectItems.sort()

    //API.getJournalEntries( label ).then( data => {})


}

export default selectItems