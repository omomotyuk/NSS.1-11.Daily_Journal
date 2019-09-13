/*
//
*/

let selectItems = [ "Joy", "Fear", "Anger", "Frustrated", "Acceptance", "Excited", "Confusion", "Curious", "Surprise", "Determined", "Hopeful", "Happy", "Fine", "Sad", "Anxious", "Love", "Sadness", "Wonder", "Rejuvenated", "Drained", "Confident", "Amused", "Guilty", "Relieved", "Indifferent" ];

selectItems = selectItems.sort()

const selectElement = document.getElementsByTagName('select');

for( let i = 0; i < selectItems.length; i++ ) {
	const selectOption = document.createElement( 'option' );
	selectOption.value = selectItems[ i ];
	selectOption.innerHTML = selectItems[ i ];
	selectElement[0].appendChild( selectOption );
}

export default selectElement
