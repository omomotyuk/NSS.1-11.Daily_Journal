/*
//
*/

//
const selectElement = ( selectItems ) => {
	const selectElement = document.getElementsByTagName('select');

	for( let i = 0; i < selectItems.length; i++ ) {
		const selectOption = document.createElement( 'option' );
		selectOption.value = selectItems[ i ];
		selectOption.innerHTML = selectItems[ i ];
		selectElement[0].appendChild( selectOption );
	}
}

export default selectElement
