/*
//
*/

//
const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    
    editEntries: ( entry ) => {
        //const donutUpdateObject = {
        //    name: document.querySelector("#donutName").value
        //}
        return fetch(`http://localhost:3000/entries`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( entry )
        }).then(response => response.json())
    }

}

export default API
