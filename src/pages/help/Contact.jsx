export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>

      <form action="">
        <label htmlFor="">
          <span>Your Email</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea name="message" required cols="30" rows="10"></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
