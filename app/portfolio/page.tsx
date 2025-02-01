"use client";

import { Award, Building2, LineChart, Users } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our achievements and success stories in training and development
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg text-center">
              <Building2 className="h-12 w-12 mx-auto text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <div className="text-muted-foreground">Corporate Clients</div>
            </div>
            <div className="p-6 bg-card rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">18,000+</div>
              <div className="text-muted-foreground">Trained Professionals</div>
            </div>
            <div className="p-6 bg-card rounded-lg text-center">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate Training Excellence",
                description: "Successfully trained 500+ employees at a leading IT company, resulting in 40% improvement in productivity.",
                metric: "40% Improvement",
                icon: LineChart
              },
              {
                title: "Campus Placement Success",
                description: "Helped 1000+ students secure placements in top companies through our CRT program.",
                metric: "95% Placement Rate",
                icon: Users
              },
              {
                title: "Technical Skill Development",
                description: "Conducted advanced programming bootcamps for 2000+ students with practical projects.",
                metric: "2000+ Students",
                icon: Building2
              },
              {
                title: "Professional Growth",
                description: "Enabled career advancement for 5000+ professionals through specialized training.",
                metric: "5000+ Professionals",
                icon: Award
              }
            ].map((story, index) => (
              <div key={index} className="p-6 bg-background rounded-lg">
                <story.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <div className="text-lg font-semibold text-primary">{story.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}