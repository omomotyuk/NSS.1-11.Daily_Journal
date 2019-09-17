/*
//
*/

/*
    <!-- Submit button section -->
    <fieldset class="input-form__fieldset">
        <button class="input" id="input-form__button">Record Journal Entry</button>
    </fieldset>
*/

const moodFilter = ( selectItems ) => {

    const radioButton = ( select ) => {
        return `
            <div>
                <input type="radio" id="${select.toLowerCase()}" name="drone" value="${select.toLowerCase()}">
                <label for="${select.toLowerCase()}">${select}</label>
            </div>        
        `
    }

    const moodFilterElement = document.querySelector( '.radio-buttons' )
    moodFilterElement.innerHTML = ""

    selectItems.forEach( select => {
        moodFilterElement.innerHTML += radioButton( select )
    })

    //return moodFilterElement.innerHTML
}

export default moodFilter
