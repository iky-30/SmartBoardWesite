import { motion } from "framer-motion";
import { Lock, Sun, Lightbulb } from "lucide-react";

export default function Products() {
  const products = [
    { title: "Smart Security", desc: "CCTV, alarms, and smart locks for 24/7 protection.", icon: <Lock className="w-10 h-10 text-red-500" /> },
    { title: "Smart Energy", desc: "Thermostats, solar integration, and energy monitors.", icon: <Sun className="w-10 h-10 text-yellow-500" /> },
    { title: "Smart Living", desc: "Lighting, appliances, and voice-controlled assistants.", icon: <Lightbulb className="w-10 h-10 text-green-500" /> },
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * i }}>
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
              {p.icon}
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="mb-4">{p.desc}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
