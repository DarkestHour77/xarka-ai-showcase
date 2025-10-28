import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Brain, Sparkles, Zap, Target, Shield, Rocket } from "lucide-react";
import cloudHero from "@/assets/cloud-hero.png";
import aiDashboard from "@/assets/ai-dashboard.png";
import aiNetwork from "@/assets/ai-network.png";
import dataViz from "@/assets/data-viz.png";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Leverage state-of-the-art machine learning models to solve complex business challenges.",
    },
    {
      icon: Sparkles,
      title: "Intelligent Automation",
      description: "Automate repetitive tasks and workflows with smart AI-powered solutions.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time processing and instant insights at the speed of light.",
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Make data-driven decisions with accurate predictive analytics.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance for your sensitive data.",
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "From startup to enterprise, our AI scales with your business.",
    },
  ];

  const companyLogos = [
    "Amazon", "Adobe", "Microsoft", "Google", "Meta", "Tesla"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute top-20 right-10 w-64 h-64 opacity-30 animate-float">
          <img src={cloudHero} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-48 h-48 opacity-30 animate-float" style={{ animationDelay: "2s" }}>
          <img src={cloudHero} alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Effortless AI</span>
              <br />
              for your business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your operations with cutting-edge artificial intelligence. 
              Build, deploy, and scale AI solutions faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl glow-primary">
              <img 
                src={aiDashboard} 
                alt="AI Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 border-y border-border">
        <div className="container mx-auto">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companyLogos.map((logo) => (
              <div key={logo} className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">AI capabilities</span> at the speed of light
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and manage AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Transform data into <span className="text-gradient">insights</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our AI-powered analytics platform helps you understand your data better. 
                Make informed decisions with real-time insights and predictive analytics.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl glow-primary">
                <img src={aiNetwork} alt="AI Network Visualization" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-12 md:p-16 border border-border">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
              <img src={dataViz} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of companies already using XarkaAI to revolutionize their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Free Trial</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
