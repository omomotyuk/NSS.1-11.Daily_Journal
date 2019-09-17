/*
//
*/

//
const API = {

    getJournalEntries ( label ) {

        let query = ""
        if( label ) { query = `?mood=${label}`}

        return fetch(`http://localhost:3000/entries${query}`)
            .then(response => response.json())
    },

    saveJournalEntry: ( entry ) => {
        //const donutUpdateObject = { name: document.querySelector("#donutName").value }

        let query = ""
        if( entry.id ) { query = `/${entry.id}`}

        if( entry.id ) {
            return fetch( `http://localhost:3000/entries${query}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( entry )
            })
            .then( response => response.json() )
        } else {
            return fetch( `http://localhost:3000/entries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( entry )
            })
            .then( response => response.json() )
        }
    },

    deleteJournalEntry: ( entry ) => {

        let query = ""
        if( entry.id ) { query = `/${entry.id}`}

        return fetch( `http://localhost:3000/entries${query}`, { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export default API
