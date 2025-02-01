"use client";

import { BarChart, BookOpen, BrainCircuit, Building2, CheckCircle2, GraduationCap, LineChart, Target, Users } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About RDR Software Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Educating, training, and inspiring people to reach their professional goals since 2013
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To educate, train, and inspire people to reach their professional goals while bridging
                the gap between academia and industry with expert insights.
              </p>
              <div className="space-y-4">
                {[
                  "Industry-aligned training programs",
                  "Expert-led learning experiences",
                  "Practical skill development",
                  "Career-focused outcomes"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Vision</h3>
                <p className="text-muted-foreground">Leading the transformation in professional education</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <BrainCircuit className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">Cutting-edge training methodologies</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Strong alumni network</p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <LineChart className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Growth</h3>
                <p className="text-muted-foreground">Continuous improvement focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Analyze",
                description: "Comprehensive training needs assessment",
                icon: BarChart
              },
              {
                title: "Design",
                description: "Customized program development",
                icon: BrainCircuit
              },
              {
                title: "Implement",
                description: "Expert-led training delivery",
                icon: GraduationCap
              },
              {
                title: "Evaluate",
                description: "Continuous feedback and improvement",
                icon: LineChart
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Experience",
                description: "Over 10 years of expertise in training",
                icon: Building2
              },
              {
                title: "Proven Track Record",
                description: "18,000+ trained professionals",
                icon: Users
              },
              {
                title: "Tested Methodology",
                description: "Research-backed training approach",
                icon: CheckCircle2
              },
              {
                title: "Practical Learning",
                description: "Activity-based & result-oriented",
                icon: BookOpen
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-lg">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}