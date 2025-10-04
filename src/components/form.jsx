import React from 'react'

const form = () => {
  return (
    <div>
        <form action="">
            <h1>Feedback Collector</h1>
            <div>
                <label htmlFor="">Name:
                    <input type="text"  placeholder='Your Name'/>
                </label>
            </div>
            <div>
                <label htmlFor="">Feedback:
                    <input type="text" placeholder='Your Feedback' />
                </label>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default form