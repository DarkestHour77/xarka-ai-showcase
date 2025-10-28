import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50M+", label: "Active Users" },
    { icon: Award, value: "150+", label: "Awards Won" },
    { icon: Globe, value: "120+", label: "Countries" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime" },
  ];

  const team = [
    { name: "Sarah Chen", role: "CEO & Founder", description: "AI visionary with 15+ years in machine learning" },
    { name: "Marcus Rodriguez", role: "CTO", description: "Former Google AI lead, pioneering neural networks" },
    { name: "Emily Thompson", role: "Head of Product", description: "Product strategist from Microsoft Azure" },
    { name: "James Kim", role: "Chief Scientist", description: "PhD in AI, published 50+ research papers" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Building the future of <span className="text-gradient">artificial intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make AI accessible, powerful, and transformative for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent glow-primary">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2020, XarkaAI emerged from a simple yet powerful vision: to democratize 
                artificial intelligence and make it accessible to every business, regardless of size or 
                technical expertise.
              </p>
              <p>
                Our founders, a team of AI researchers and engineers from leading tech companies, 
                recognized that while AI technology was advancing rapidly, the barrier to entry remained 
                prohibitively high for most organizations.
              </p>
              <p>
                Today, we're proud to serve over 50 million users across 120 countries, helping businesses 
                transform their operations, make smarter decisions, and unlock new possibilities through 
                the power of AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Innovation</h3>
              <p className="text-muted-foreground">
                We push boundaries and challenge the status quo to create breakthrough AI solutions.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Accessibility</h3>
              <p className="text-muted-foreground">
                AI should be available to everyone, not just large corporations with deep pockets.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Trust</h3>
              <p className="text-muted-foreground">
                We build secure, reliable, and ethical AI systems that our customers can depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground">World-class talent driving AI innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-secondary glow-primary" />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Join us on our journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Be part of the AI revolution and transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
