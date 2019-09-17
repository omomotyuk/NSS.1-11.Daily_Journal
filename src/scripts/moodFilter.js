/*
//
*/

const moodFilter = ( selectItems ) => {

    const radioButton = ( select ) => {
        return `
                <span class="radio-span">
                <input type="radio" id="${select.toLowerCase()}" name="drone" value="${select.toLowerCase()}">
                <label for="${select.toLowerCase()}">${select}</label>
                </span>
        `
    }

    const moodFilterElement = document.querySelector( '.radio-buttons' )
    moodFilterElement.innerHTML = "<legend>Filter Journal Entries by Mood</legend>"

    selectItems.forEach( select => {
        moodFilterElement.innerHTML += radioButton( select )
    })
}

export default moodFilter
