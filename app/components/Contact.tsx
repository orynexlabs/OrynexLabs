"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating or learning more about our projects? We'd love to hear from you.
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
          <form onSubmit={handleSubmit} className="space-y-6 fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <Input placeholder="Your Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" required />
            </div>
            <div>
              <Input placeholder="Subject" required />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
