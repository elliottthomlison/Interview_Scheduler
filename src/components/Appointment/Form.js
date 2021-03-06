import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import React, { useState } from 'react';


export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const handleChange = event => setName(event.target.value  );

  // Clears the name input and interviewer selection
  // Called when user cancels out of an appointment form  
  const reset = function() {
    setName("");
    setInterviewer(null);
  };

  // Resets form and goes to previous appointment visual mode
  // Called when user clicks "Cancel" in appointment form
  const cancel = function() {
    reset();
    props.onCancel();
  };

  // Validates that user entered a name into form, and calls the function to book interview
  // Called when user clicks "Save" in appointment form
  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
  
    setError("");
    props.onSave(name, interviewer);
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="fullName"
            type="text"
            value={name}
            placeholder="Enter Student Name"
            onChange={handleChange}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
          <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
        </form>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  )
}