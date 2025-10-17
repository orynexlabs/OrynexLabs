"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const sendPromise = emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.promise(
        sendPromise,
        {
          loading: "Sending your message...",
          success: <b>Message sent successfully! 🚀</b>,
          error: <b>❌ Failed to send message. Please try again later.</b>,
        },
        {
          style: {
            background: "#0D1117",
            color: "#fff",
            border: "1px solid #333",
          },
        }
      );

      await sendPromise;
      formRef.current?.reset();
    } catch (error) {
      console.error("Email send error:", error);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-section-bg">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating or learning more about our projects? We&apos;d love to hear from you.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">orynex.help@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Global - Remote First</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Business Inquiries</h3>
                <p className="text-muted-foreground">Available via email</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 fade-in" style={{ animationDelay: "0.2s" }}>
            <Input name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Input name="title" placeholder="Subject" required />
            <Textarea name="message" placeholder="Your Message" rows={5} required />

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
