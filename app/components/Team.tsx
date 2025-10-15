"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        {
            name: 'Oluwademilade Abatan',
            role: 'CEO & Co-Founder',
            img: "/img/ceo.jpeg",
        },
        {
            name: 'Ogbaki David',
            role: 'CTO & Co-Founder',
            img: "/img/cto.jpeg",
        },
        {
            name: 'Makanjuola Emmanuel',
            role: 'Head of Product',
            img: "/img/babyscott.jpeg"
        },
        {
            name: 'Oyeyemi Stephen',
            role: 'Lead Developer',
            img: "/img/steve.jpg"
        },
        {
            name: 'Abdulkarim Elfa',
            role: 'Head of Operations',
            img: "/img/elfa.JPG"
        },
        // {
        //     name: 'Kiara Tim',
        //     role: 'Head of Marketing',
        // },
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

                {/* <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="w-full sm:w-[45%] lg:w-[30%] text-center border-border hover:border-primary/50 transition-all duration-300 fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="pt-6 pb-6 px-6">
                                    {member.img ? (
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                                        />
                                    ) : (
                                        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <div className="text-3xl font-bold text-primary">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        </div>
                                    )}
                                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                                    <button className="text-primary hover:text-primary/80 transition-colors">
                                        <Linkedin size={18} />
                                    </button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div> */}

                <div className="max-w-5xl mx-auto px-4">
                    {/* Desktop / Tablet Grid */}
                    <div className="hidden sm:flex flex-wrap justify-center gap-6">
                        {teamMembers.map((member, index) => (
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
                                <button className="text-primary hover:text-primary/80 transition-colors">
                                    <Linkedin size={18} />
                                </button>
                            </CardContent>
                            </Card>
                        ))}
                </div>

                {/* Mobile Swiper */}
                <div className="sm:hidden">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.2}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <Card
                                    className="text-center border-border hover:border-primary/50 transition-all duration-300 fade-in mx-auto"
                                    style={{ animationDelay: `${index * 0.1}s`, width: "90%" }}
                                >
                                    <CardContent className="pt-6 pb-6 px-6">
                                        {member.img ? (
                                            <img
                                                src={member.img}
                                                alt={member.name}
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
                                        <button className="text-primary hover:text-primary/80 transition-colors">
                                            <Linkedin size={18} />
                                        </button>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="text-center mt-16">
                <Card className="bg-white border-primary/20 max-w-2xl mx-auto">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">Join Our Team</h3>
                        <p className="text-muted-foreground mb-6">
                            We're always looking for talented individuals who share our vision
                            of revolutionizing the future of work through blockchain technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/careers"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white border-primary border-2 text-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium"
                            >
                                View Open Positions
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        </section >
    );
};

export default Team;
