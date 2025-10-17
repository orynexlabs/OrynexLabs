"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "What is Orynex Labs and what does it do?",
    answer: "Orynex Labs is the parent company behind Orynex and its ecosystem. We focus on building decentralized solutions for global work, developing blockchain infrastructure, tools for freelancers, and innovative products that drive the new economy."
  },
  {
    question: "How can I invest in Orynex Labs initiatives?",
    answer: "Investors can participate in Orynex Labs projects through token sales, private rounds, or partnerships. Details on ongoing funding rounds are available on our website and through our official communication channels."
  },
  {
    question: "Which projects are under Orynex Labs?",
    answer: "Orynex Labs develops and manages several initiatives including Orynex (Blockchain), Qolahb (freelance and work ecosystem), HR & Skentral Payroll tools, and other upcoming decentralized applications."
  },
  {
    question: "How does Orynex Labs ensure the security of its projects?",
    answer: "We prioritize security by implementing robust blockchain protocols, regular audits, smart contract verifications, and secure infrastructure. Our goal is to protect both our users and partners across all projects."
  },
  {
    question: "Can individuals or companies partner with Orynex Labs?",
    answer: "Yes. Orynex Labs welcomes partnerships with companies, developers, and communities. We collaborate to expand our ecosystem, integrate solutions, and support the adoption of decentralized work technologies globally."
  },
//   {
//     question: "Where is Orynex Labs based and do you operate globally?",
//     answer: "Orynex Labs is registered in Delaware but operates globally. Our projects are accessible to users, freelancers, and businesses worldwide without geographical restrictions."
//   },
//   {
//     question: "How does Orynex Labs fund its projects?",
//     answer: "Funding comes from token sales, strategic investors, venture partnerships, and reinvestment from existing ecosystem revenue. We focus on sustainable growth to ensure long-term support for our products."
//   },
  {
    question: "What is the vision of Orynex Labs?",
    answer: "Orynex Labs aims to redefine the global work economy by building decentralized, accessible, and secure tools that empower freelancers, businesses, and communities to transact and collaborate seamlessly across borders."
  }
];


const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Orynex Labs and our projects.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-muted/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-left text-lg font-semibold text-foreground">
                        {faq.question}
                      </CardTitle>
                      <ChevronDown 
                        className={`h-5 w-5 text-primary transition-transform duration-200 ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help. Reach out to us through our community channels 
                or contact us directly for more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://discord.com/invite/Fmk2apDUKQ" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-medium"
                >
                  Join Discord
                </Link>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary bg-background hover:bg-primary-light rounded-md transition-colors font-medium"
                >
                  Contact Support
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;