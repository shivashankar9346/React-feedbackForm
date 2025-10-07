import React from 'react'
import { useState } from 'react'

const form = () => {


    const [name, setName] = useState("")
    const [feedback, setFeedback] = useState("");
    const [entries, setEntries] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        if (name.trim() === "" || feedback.trim() === "") {
            alert("Please fill out both fields before submitting.");
            return;
        }

        const newEntry = { id: Date.now(), name, feedback };

        setEntries([...entries, newEntry]);

        setName("");
        setFeedback("");
    }

    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit}>
                <h1>Feedback Collector</h1>
                <div>
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="feedback">Feedback:</label> <br />
                    <textarea type="text" placeholder='Your Feedback' value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>

            <div className='feedback'>
                {
                    entries.length === 0 ? (
                        <p></p>
                    ) : (
                        entries.map((entry) => (
                            <div key={entry.id} className="feedback-item">
                                <strong>{entry.name}</strong>: {entry.feedback}
                            </div>

                        ))
                    )
                }
            </div>
        </div>
    )
}

export default form