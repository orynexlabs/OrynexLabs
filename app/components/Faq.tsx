"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What is Orynex and how does it work?",
    answer: "Orynex is a decentralized platform that connects freelancers and companies globally through blockchain technology. It provides secure payments, transparent contracts, and seamless collaboration tools powered by our native Orynex Token."
  },
  {
    question: "How do I participate in the token presale?",
    answer: "You can participate in our token presale by joining our whitelist and following the instructions provided. The presale offers 50M Orynex Tokens to early supporters at discounted rates."
  },
  {
    question: "What blockchain will Orynex use?",
    answer: "Initially, we'll launch on Solana for fast and low-cost transactions. Later, we'll migrate to our own Orynex Chain that will power all platform transactions, escrow services, and premium features."
  },
  {
    question: "How are payments handled on the platform?",
    answer: "Payments are processed through secure smart contracts with escrow functionality. We support USDT for stable value transactions and Orynex Tokens for platform features and staking rewards."
  },
  {
    question: "What are the benefits of holding Orynex Tokens?",
    answer: "Token holders can stake for rewards, access premium platform features, participate in governance decisions, and benefit from the growing ecosystem as more users join the platform."
  },
  {
    question: "Is Orynex available globally?",
    answer: "Yes, Orynex is designed to be a global platform that removes geographical barriers. Our decentralized infrastructure enables users from anywhere in the world to participate in the new economy of work."
  },
  {
    question: "How do you ensure security and trust?",
    answer: "We use blockchain technology for transparency, smart contracts for automated escrow, and comprehensive verification systems. All transactions are recorded on-chain for complete audit trails."
  },
  {
    question: "When will the platform launch?",
    answer: "Our roadmap shows the platform launching in Phase 2, after the token presale completion. The full Orynex Chain integration will happen in Phase 3, with expanded features in Phase 4."
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
            Everything you need to know about Orynex and our blockchain platform
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
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-medium"
                >
                  Join Discord
                </a>
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