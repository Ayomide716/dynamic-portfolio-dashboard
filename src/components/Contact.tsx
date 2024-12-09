import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground">Let's discuss your next project</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full" size="lg">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground">
          Prefer email? Reach out directly at{" "}
          <a
            href="mailto:hello@example.com"
            className="text-foreground hover:underline"
          >
            hello@example.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;