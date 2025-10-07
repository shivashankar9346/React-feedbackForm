import React from 'react';
import { useForm } from 'react-hook-form';

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const [entries, setEntries] = React.useState([]);

  const onSubmit = (data) => {
    const newEntry = { id: Date.now(), name: data.name, feedback: data.feedback };
    setEntries([...entries, newEntry]);
    reset(); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Feedback Collector</h1>

        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            placeholder="Your Name"
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name && (
            <p style={{ color: 'red', fontSize: '14px' }}>
              Name is required (min 3 characters)
            </p>
          )}
        </div>

       
        <div>
          <label htmlFor="feedback">Feedback:</label> <br />
          <textarea
            placeholder="Your Feedback"
            {...register('feedback', {
              required: true,
              minLength: 10,
              maxLength: 300,
            })}
          />
          {errors.feedback && (
            <p style={{ color: 'red', fontSize: '14px' }}>
              Feedback must be 10–300 characters long
            </p>
          )}
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>

      <div className="feedback">
        {entries.length === 0 ? (
          <p></p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="feedback-item">
              <strong>{entry.name}</strong>: {entry.feedback}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
