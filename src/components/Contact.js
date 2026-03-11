import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:ramos.christiankirby@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-info">
        Mindanao, Philippines &nbsp;|&nbsp;
        ramos.christiankirby@gmail.com &nbsp;|&nbsp;
        (+63) 965-729-8097
      </div>

      <div className="contact-form">
        <input
          className="contact-input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="contact-input contact-textarea"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="contact-button" onClick={handleSubmit}>
          {sent ? 'Opening Mail App...' : 'Send Email'}
        </button>
      </div>
    </section>
  );
}

export default Contact;