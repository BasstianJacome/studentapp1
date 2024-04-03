import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
    // You can also add form validation logic here if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="studentform">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="studentform">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className="studentform">
        <label htmlFor="phone">Phone:</label>
        <input 
          type="tel" 
          id="phone"
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
