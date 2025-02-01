"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What are the available programs?",
    answer: "We offer a wide range of programs including Corporate Training, Campus Recruitment Training (CRT), Technical Skills Training, and Professional Development Programs. Our courses cover areas like programming languages, soft skills, leadership development, and more."
  },
  {
    question: "How can I enroll in a program?",
    answer: "Enrollment is simple! You can either contact us through our website's contact form, email us at info@rdrss.com, or call us at +91 7337 37 2250. Our team will guide you through the enrollment process and help you choose the right program."
  },
  {
    question: "What are the training durations?",
    answer: "Training durations vary depending on the program. Corporate training can range from 2-5 days, while CRT programs typically run for 2-3 months. Technical courses usually span 1-3 months. We also offer customized durations based on specific requirements."
  },
  {
    question: "Do you offer online training?",
    answer: "Yes, we offer both online and offline training options. Our online programs feature live interactive sessions, practical assignments, and dedicated mentor support to ensure an effective learning experience."
  },
  {
    question: "What is the fee structure?",
    answer: "Our fee structure varies based on the program type, duration, and delivery mode. Please contact our team for detailed information about specific program fees and available payment plans."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we provide comprehensive placement assistance for our CRT and technical training programs. This includes resume building, interview preparation, and connections with our corporate partners."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our programs and services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={cn(
                    "h-5 w-5 transition-transform",
                    openIndex === index ? "transform rotate-180" : ""
                  )} />
                </button>
                <div className={cn(
                  "px-6 overflow-hidden transition-all",
                  openIndex === index ? "pb-4" : "max-h-0"
                )}>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}