/*
    Purpose: To create, and return, a string template that represents a single journal entry object as HTML
    Arguments: journalEntry (object)
*/

const createJournalEntryComponent = ( journalEntry ) => {
    // Create your own HTML structure for a journal entry
    return `
        <article class="log-item">
            <h3><span>${journalEntry.date}</span> ${journalEntry.title}</h3>
            <p>${journalEntry.content}</p>
            <p><span>Mood:</span> ${journalEntry.mood}</p>
        </article>
    `
}

export default createJournalEntryComponent
