"use client";

import { Building2, GraduationCap, Users } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    title: "Corporate Training Session",
    category: "Corporate"
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    title: "Campus Placement Workshop",
    category: "Campus"
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    title: "Technical Training",
    category: "Technical"
  },
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80",
    title: "Student Development Program",
    category: "Campus"
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    title: "Team Building Workshop",
    category: "Corporate"
  },
  {
    url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80",
    title: "Leadership Training",
    category: "Corporate"
  }
];

export default function Gallery() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Moments captured during our training sessions and events
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-card rounded-lg text-center">
              <Building2 className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Corporate Events</h2>
              <p className="text-muted-foreground">Professional training sessions</p>
            </div>
            <div className="p-6 bg-card rounded-lg text-center">
              <GraduationCap className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Campus Programs</h2>
              <p className="text-muted-foreground">Student development activities</p>
            </div>
            <div className="p-6 bg-card rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">Technical Training</h2>
              <p className="text-muted-foreground">Hands-on learning sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.category}</p>
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