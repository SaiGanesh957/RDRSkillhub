"use client";

import { BookOpen, Code2, GraduationCap, Laptop2, LineChart, School2, Users2 } from "lucide-react";

export default function Programs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Training Programs</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive training solutions for schools, colleges, and corporations
            </p>
          </div>
        </div>
      </section>

      {/* School Programs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <School2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">School & Intermediate Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PEARL",
                description: "Professional English Accent Result Learning",
                features: ["Accent training", "Communication skills", "Presentation skills"]
              },
              {
                title: "HOPE",
                description: "Highly Oriented Programming Education",
                features: ["Basic programming", "Problem-solving", "Logical thinking"]
              },
              {
                title: "Civil Services",
                description: "IAS Training Program",
                features: ["Exam preparation", "Current affairs", "Interview training"]
              },
              {
                title: "TOMS",
                description: "Transformation of Memory Skills",
                features: ["Memory techniques", "Study skills", "Mind mapping"]
              },
              {
                title: "Rule Your Life",
                description: "Motivational Sessions",
                features: ["Goal setting", "Time management", "Leadership skills"]
              },
              {
                title: "Teacher Development",
                description: "Teaching Methodologies",
                features: ["Modern teaching methods", "Student engagement", "Assessment techniques"]
              }
            ].map((program, index) => (
              <div key={index} className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Recruitment Training */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Campus Recruitment Training</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Core Modules</h3>
              <ul className="space-y-4">
                {[
                  "Aptitude Training",
                  "Verbal Ability",
                  "Soft Skills Development",
                  "Technical Training",
                  "Company-Specific Preparation",
                  "Mock Interviews"
                ].map((module, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <LineChart className="h-5 w-5 text-primary" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Technical Interview Training</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "DBMS",
                  "Data Structures",
                  "Operating Systems",
                  "C Programming",
                  "Java",
                  "Python"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Users2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Corporate Training</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Leadership Development",
                description: "Develop effective leadership and management skills",
                icon: Users2
              },
              {
                title: "Professional Communication",
                description: "Enhance business communication and presentation skills",
                icon: BookOpen
              },
              {
                title: "Technical Skills",
                description: "Up-skill with latest technology and tools",
                icon: Laptop2
              }
            ].map((program, index) => (
              <div key={index} className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <program.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}