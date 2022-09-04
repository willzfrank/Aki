import React from 'react';

const Register = () => {
  return (
    <div class="content-wrapper">
      <h3>Get in touch with us</h3>
      <p class="one-field">
        <input
          id="user-name"
          type="text"
          name="user-name"
          required="required"
        />
        <label for="user-name">Your Name</label>
      </p>
      <p class="one-field">
        <input id="subject" type="text" name="subject" required="required " />
        <label for="subject">E-Mail</label>
      </p>
      <p class="one-field">
        <input id="subject" type="text" name="subject" required="required " />
        <label for="subject">Subject</label>
      </p>
      <p class="one-field">
        <textarea id="message" name="message" required="required"></textarea>
        <label for="message">Your Message</label>
      </p>
    </div>
  );
};

export default Register;
