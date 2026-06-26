function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>Have a project or collaboration in mind? Let's connect!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;