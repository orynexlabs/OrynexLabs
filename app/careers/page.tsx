import Navigation from '../components/Navigation';
import type { Metadata } from "next";
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase, Users, Heart, Zap } from 'lucide-react';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Careers at Orynex Labs | Join the Future of Decentralized Work",
  description:
    "Explore career opportunities at Orynex Labs. Join a passionate team building innovative blockchain and AI solutions for the decentralized future of work.",
  keywords: [
    "Orynex Labs careers",
    "Web3 jobs",
    "Blockchain developer jobs",
    "Remote tech jobs",
    "Orynex hiring",
    "Crypto startup jobs",
    "AI blockchain company",
  ],
  openGraph: {
    title: "Careers at Orynex Labs",
    description:
      "Join a passionate global team at Orynex Labs and help build the future of decentralized work.",
    url: "https://orynexlabs.com/careers",
    siteName: "Orynex Labs",
    images: [
      {
        url: "https://orynexlabs.com/og-image.png", // (optional) add your own banner image
        width: 1200,
        height: 630,
        alt: "Orynex Labs Careers Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Orynex Labs",
    description:
      "Join the Orynex Labs team and shape the decentralized future of work.",
    images: ["https://orynexlabs.com/og-image.png"],
  },
};

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  // {
  //   title: "Senior Full Stack Developer",
  //   department: "Engineering",
  //   location: "Remote",
  //   type: "Full-time",
  //   description: "We&apos;re looking for an experienced full stack developer to help build and scale our infrastructure solutions."
  // },
  // {
  //   title: "Product Manager",
  //   department: "Product",
  //   location: "New York, NY",
  //   type: "Full-time",
  //   description: "Join our product team to drive the vision and strategy for our next-generation workplace tools."
  // },
  // {
  //   title: "DevOps Engineer",
  //   department: "Engineering",
  //   location: "Remote",
  //   type: "Full-time",
  //   description: "Help us build and maintain robust, scalable infrastructure for our growing platform."
  // },
  // {
  //   title: "UI/UX Designer",
  //   department: "Design",
  //   location: "San Francisco, CA",
  //   type: "Full-time",
  //   description: "Create beautiful, intuitive user experiences that delight our customers and solve real problems."
  // },
  // {
  //   title: "Marketing Manager",
  //   department: "Marketing",
  //   location: "Remote",
  //   type: "Full-time",
  //   description: "Lead our marketing efforts and help us tell our story to the world."
  // },
  // {
  //   title: "Customer Success Specialist",
  //   department: "Customer Success",
  //   location: "Remote",
  //   type: "Full-time",
  //   description: "Be the voice of our customers and ensure they achieve success with our platform."
  // }
];

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented, passionate people who care about what they do"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning and career development support"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-background mt-5">
        <div className="container-width">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a team that&apos;s building the future of work. We&apos;re always looking for talented people to join us.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center border-border fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 pb-6 px-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {jobOpenings.length === 0 ? (
                <div className="col-span-1 md:col-span-2 p-8 border border-border rounded-lg text-center fade-in">
                  <p className="text-center text-muted-foreground">No current openings. Please check back later!</p>
                </div>
              ) : (
                jobOpenings.map((job, index) => (
                  <Card
                    key={index}
                    className="border-border hover:border-primary/50 transition-all duration-300 fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {job.type}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <Button className="w-full">Apply Now</Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Don&apos;t see a position that fits? We&apos;re always interested in hearing from talented people.
            </p>
            <Link href="mailto:contact@orynexlabs.com?subject=Resume%20Submission" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">Send Us Your Resume</Button>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
