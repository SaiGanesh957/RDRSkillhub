"use client";

import { ArrowRight, Award, BookOpen, Building2, ChevronRight, Globe2, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-6 relative z-[1]">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
              RDR Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              One-Stop Solutions for your dreams to come into reality through training
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/programs"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore Our Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                Get in Touch <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">18k+</div>
              <div className="text-muted-foreground">Trained Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <div className="text-muted-foreground">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">States Presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Corporate Training</h3>
              <p className="text-muted-foreground">Customized training solutions for corporate professionals</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Campus Recruitment</h3>
              <p className="text-muted-foreground">Comprehensive training for campus placements</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p className="text-muted-foreground">Advanced technical skill development programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: "Respect", icon: Users },
              { title: "Accountability", icon: Award },
              { title: "Integrity", icon: Award },
              { title: "Success", icon: Award },
              { title: "Excellence", icon: Award },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Presence</h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              "Kerala",
              "Telangana",
              "Karnataka",
              "Maharashtra",
              "Chennai",
              "Andhra Pradesh"
            ].map((location, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary"
              >
                <Globe2 className="h-4 w-4 text-primary" />
                <span>{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}