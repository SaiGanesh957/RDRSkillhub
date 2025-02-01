"use client";

import { Building2, GraduationCap, Quote, Users } from "lucide-react";

const testimonials = [
  {
    content: "The training program was instrumental in helping me secure my dream job. The practical approach and industry insights were invaluable.",
    author: "Rahul Kumar",
    position: "Software Engineer",
    company: "Tech Mahindra",
    type: "student"
  },
  {
    content: "RDR's corporate training program helped our team stay updated with the latest technologies. The customized curriculum met our specific needs perfectly.",
    author: "Priya Sharma",
    position: "HR Manager",
    company: "Infosys",
    type: "corporate"
  },
  {
    content: "The teaching methodologies workshop transformed my approach to education. My students are more engaged and performing better than ever.",
    author: "Dr. Anjali Desai",
    position: "Professor",
    company: "Engineering College",
    type: "educator"
  },
  {
    content: "The campus recruitment training gave me the confidence to face interviews. I'm now working at my dream company!",
    author: "Arun Patel",
    position: "Associate Developer",
    company: "Wipro",
    type: "student"
  },
  {
    content: "Outstanding technical training program. The hands-on projects and real-world applications were exactly what our team needed.",
    author: "Suresh Reddy",
    position: "Technical Lead",
    company: "TCS",
    type: "corporate"
  },
  {
    content: "The faculty development program helped us modernize our teaching methods. Our students are showing remarkable improvement.",
    author: "Prof. Meera Iyer",
    position: "HOD",
    company: "Science College",
    type: "educator"
  }
];

export default function Testimonials() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Hear what our clients, students, and partners have to say about their experience with us
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-card rounded-lg text-center">
              <GraduationCap className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Student Success</h2>
              <p className="text-muted-foreground">From campus to career excellence</p>
            </div>
            <div className="p-6 bg-card rounded-lg text-center">
              <Building2 className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Corporate Feedback</h2>
              <p className="text-muted-foreground">Professional development impact</p>
            </div>
            <div className="p-6 bg-card rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Educator Endorsements</h2>
              <p className="text-muted-foreground">Teaching excellence achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-background rounded-lg relative">
                <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}