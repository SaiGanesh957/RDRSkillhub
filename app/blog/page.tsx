"use client";

import { BookOpen, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Latest Trends in Corporate Training 2024",
    excerpt: "Explore the emerging trends shaping corporate training and development in 2024...",
    category: "Corporate Training",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
  },
  {
    title: "The Impact of AI in Professional Development",
    excerpt: "How artificial intelligence is transforming the landscape of professional training...",
    category: "Technology",
    date: "Mar 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"
  },
  {
    title: "Effective Campus Placement Strategies",
    excerpt: "Key strategies for students to excel in campus placement interviews and assessments...",
    category: "Career Guidance",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
  },
  {
    title: "Soft Skills in the Digital Age",
    excerpt: "The growing importance of soft skills in today's technology-driven workplace...",
    category: "Professional Skills",
    date: "Mar 8, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground">
              Latest trends, insights, and updates from the world of professional training
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Link href="#" key={index} className="group">
                <article className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Tag className="h-4 w-4" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary">
                      <span>Read more</span>
                      <BookOpen className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}