import { Shield, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Built on blockchain technology ensuring transparency and immutability.',
    },
    {
      icon: Target,
      title: 'Innovation Focused',
      description: 'Pioneering solutions for the evolving landscape of decentralized work.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Scalable infrastructure designed to handle enterprise-level demands.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="container-width">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Orynex Labs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a blockchain research and development company dedicated to building 
            infrastructure for the future of work. Our mission is to create decentralized 
            solutions that empower organizations to operate more efficiently, transparently, 
            and autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
