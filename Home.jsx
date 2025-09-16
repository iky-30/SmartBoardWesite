import { motion } from "framer-motion";
import { ShieldCheck, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      title: "Convenience",
      text: "Control lighting, appliances, and security from your phone.",
      icon: <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-3" />,
    },
    {
      title: "Security",
      text: "Smart cameras, locks, and sensors to protect your home.",
      icon: <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-3" />,
    },
    {
      title: "Efficiency",
      text: "Save energy with automation and smart energy monitoring.",
      icon: <Zap className="w-10 h-10 text-yellow-500 mx-auto mb-3" />,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Home into a Smart Home
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Simple, secure, and sustainable solutions for modern living.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-blue-600 font-semibold">Explore Products</Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Request a Demo</Button>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * i }}>
            <Card className="shadow-lg rounded-2xl hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                {f.icon}
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p>{f.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-blue-600 text-white text-center"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Home?</h2>
        <p className="mb-8">Join hundreds of families enjoying the benefits of a smart lifestyle.</p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 hover:scale-105 transition">
          Get Started Today
        </Button>
      </motion.section>
    </div>
  );
}
