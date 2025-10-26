"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  img?: string;
  linkedin?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid: FC<TeamGridProps> = ({ members }) => (
  <div className="max-w-5xl mx-auto px-4">
    {/* Desktop / Tablet Grid */}
    <div className="hidden sm:flex flex-wrap justify-center gap-6">
      {members.map((member, index) => (
        <Card
          key={index}
          className="w-full sm:w-[45%] lg:w-[30%] text-center border-border hover:border-primary/50 transition-all duration-300 fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="pt-6 pb-6 px-6">
            {member.img ? (
              <Image
                src={member.img}
                alt={member.name}
                width={96}
                height={96}
                quality={100}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/img/default-avatar.png";
                }}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
            ) : (
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-3xl font-bold text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
            )}
            <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
            <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center justify-center"
                aria-label={`${member.name}&apos;s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            ) : (
              <button
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="LinkedIn unavailable"
                disabled
              >
                <Linkedin size={18} />
              </button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Mobile Swiper */}
    <div className="sm:hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <Card
              className="text-center border-border hover:border-primary/50 transition-all duration-300 fade-in w-full"
              style={{ animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="pt-6 pb-6 px-6">
                {member.img ? (
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={96}
                    height={96}
                    quality={100}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/img/default-avatar.png";
                    }}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-3xl font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center justify-center"
                    aria-label={`${member.name}&apos;s LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                ) : (
                  <button
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="LinkedIn unavailable"
                    disabled
                  >
                    <Linkedin size={18} />
                  </button>
                )}
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

const Team: FC = () => {
  const technicalTeam: TeamMember[] = [
    {
      name: "Oluwademilade Abatan",
      role: "CEO & Co-Founder",
      img: "/img/ceo.jpeg",
      linkedin: "https://linkedin.com/in/oluwademilade",
    },
    {
      name: "Ogbaki David",
      role: "CTO & Co-Founder",
      img: "/img/cto.jpeg",
      linkedin: "https://www.linkedin.com/in/ogbakidavid3002/",
    },
    {
      name: "Makanjuola Emmanuel",
      role: "Head of Product",
      img: "/img/babyscott.jpeg",
      linkedin: "https://www.linkedin.com/in/emmanuel-makanjuola-56bb2b297",
    },
    {
      name: "Oyeyemi Stephen",
      role: "Lead Developer",
      img: "/img/steve.jpg",
      linkedin: "https://www.linkedin.com/in/stephenoyeyemi/",
    },
    {
      name: "Abdulkarim Elfa",
      role: "Head of Operations",
      img: "/img/elfa.JPG",
      linkedin: "https://www.linkedin.com/in/abdelkarim-elfar-b89a9a275/",
    },
  ];

  const communityTeam: TeamMember[] = [
    {
      name: "Victor Omondi",
      role: "Head of Community Team",
      img: "/img/vitoms.jpeg",
      linkedin: "https://www.linkedin.com/in/victor-omondi-onyango/",
    },
    {
      name: "Okoko Favour",
      role: "Community Manager",
      img: "/img/digital.jpeg",
      linkedin: "https://www.linkedin.com/in/okoko-favour-70b568368/",
    },
    {
      name: "Ogbaki Paul",
      role: "Social Media Manager",
      img: "/img/paulo.jpeg",
      linkedin: "https://www.linkedin.com/in/ogbaki-paul-11641b369",
    },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experts building the future of decentralized infrastructure.
          </p>
        </div>

        {/* Technical Team */}
        <h3 className="text-2xl font-bold text-center mb-6">Core Team</h3>
        <TeamGrid members={technicalTeam} />

        {/* Community Team */}
        <h3 className="text-2xl font-bold text-center mt-16 mb-6">Community Team</h3>
        <TeamGrid members={communityTeam} />
        {/* Join Our Team Section */}
        <div className="text-center mt-16">
          <Card className="bg-card border border-border shadow-md max-w-2xl mx-auto transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Join Our Team
              </h3>
              <p className="text-muted-foreground mb-6">
                We&apos;re always looking for talented individuals who share our
                vision of revolutionizing the future of work through blockchain
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="
            inline-flex items-center justify-center px-6 py-3 rounded-md font-medium
            border-2 transition-colors duration-300
            bg-background text-primary border-primary
            hover:bg-primary hover:text-primary-foreground
            dark:bg-secondary dark:text-primary-foreground dark:hover:bg-primary dark:hover:text-white
          "
                >
                  View Open Positions
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
