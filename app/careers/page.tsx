"use client";

import { Award, Building2, GraduationCap, Heart, Rocket, Users } from "lucide-react";

const positions = [
  {
    title: "Vice President",
    department: "Management",
    location: "Hyderabad",
    type: "Full-time",
    description: "Lead and oversee company operations, strategy, and growth initiatives."
  },
  {
    title: "Training Head",
    department: "Training",
    location: "Bangalore",
    type: "Full-time",
    description: "Develop and implement training programs across multiple domains."
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Chennai",
    type: "Full-time",
    description: "Drive digital marketing strategies and social media presence."
  },
  {
    title: "HR Recruiter",
    department: "Human Resources",
    location: "Hyderabad",
    type: "Full-time",
    description: "Manage end-to-end recruitment process and talent acquisition."
  },
  {
    title: "Project Coordinator",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    description: "Coordinate training projects and ensure smooth program delivery."
  }
];

export default function Careers() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Be part of a dynamic team dedicated to transforming education and professional development
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement paths",
                icon: Rocket
              },
              {
                title: "Innovative Environment",
                description: "Work on cutting-edge training methodologies",
                icon: Building2
              },
              {
                title: "Great Culture",
                description: "Collaborative and supportive work environment",
                icon: Heart
              },
              {
                title: "Professional Development",
                description: "Regular training and skill enhancement programs",
                icon: GraduationCap
              },
              {
                title: "Recognition",
                description: "Rewards and recognition for excellence",
                icon: Award
              },
              {
                title: "Work-Life Balance",
                description: "Flexible work arrangements and wellness programs",
                icon: Users
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-card rounded-lg">
                <benefit.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="p-6 bg-background rounded-lg">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}