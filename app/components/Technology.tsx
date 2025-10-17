import { Database, Lock, Layers, Network } from 'lucide-react';

const Technology = () => {
  const techFeatures = [
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description:
        'Built to handle millions of transactions with low latency and high throughput.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description:
        'Advanced cryptographic protocols ensuring data integrity and user privacy.',
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      description:
        'Flexible, composable systems that adapt to diverse organizational needs.',
    },
    {
      icon: Network,
      title: 'Decentralized Network',
      description:
        'Distributed infrastructure eliminating single points of failure.',
    },
  ];

  return (
    <section id="technology" className="section-padding bg-section-bg">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology &amp; Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our research and development efforts focus on creating robust, scalable, and
            secure blockchain infrastructure that pushes the boundaries of what&apos;s
            possible in decentralized systems.
          </p>
        </div>

        {/* Technology Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {techFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-6 bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Focus Areas */}
        <div className="mt-16 bg-card p-8 rounded-lg border border-border fade-in">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Research Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Layer 1</div>
              <p className="text-sm text-muted-foreground">
                Blockchain Protocol Development
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Smart Contracts</div>
              <p className="text-sm text-muted-foreground">
                Automated Business Logic
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Zero-Knowledge</div>
              <p className="text-sm text-muted-foreground">
                Privacy-Preserving Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
