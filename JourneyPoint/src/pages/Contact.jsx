import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <SectionTitle
          title="Contact Us"
          subtitle="We'd love to hear from you. Fill out the form below."
        />

        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">

          <div>
            <label className="block font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <Button text="Send Message" />

        </form>

      </div>
    </section>
  );
}

export default Contact;