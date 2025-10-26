"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Blocks, Building2, Users, CreditCard, Twitter } from 'lucide-react';

const Projects = () => {


  const projects = [
    {
      icon: Blocks,
      title: 'Orynex Blockchain',
      description:
        'A high-performance, scalable blockchain infrastructure designed for enterprise applications and decentralized work environments.',
      twitter: 'https://x.com/orynexlabs',
    },
    {
      icon: Building2,
      title: 'Skentral',
      description:
        'A decentralized workspace platform enabling organizations to manage operations, projects, and teams in a trustless environment.',
      twitter: 'https://x.com/SkentralX',
    },
    {
      icon: Users,
      title: 'HR Tools',
      description:
        'Blockchain-powered human resources management tools for transparent recruitment, onboarding, and employee management.',
      twitter: 'https://x.com/orynexlabs',
    },
    {
      icon: CreditCard,
      title: 'Payroll',
      description:
        'Automated, transparent payroll solutions leveraging smart contracts for instant, secure, and compliant payments.',
      twitter: 'https://x.com/orynexlabs',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re building a comprehensive ecosystem of blockchain solutions that
            address real-world challenges in the future of work.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="flex flex-col justify-between hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="mt-6 flex justify-center items-center">
                  <Button asChild variant="outline" className="flex items-center gap-2">
                    <a href={project.twitter} target="_blank" rel="noopener noreferrer">
                      Follow <Twitter className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
