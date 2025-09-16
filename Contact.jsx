export default function Contact() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <form className="grid gap-4 max-w-lg">
        <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="p-3 border rounded-lg h-32" />
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
