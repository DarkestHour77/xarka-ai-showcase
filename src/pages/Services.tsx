import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { 
  Brain, MessageSquare, Image, FileText, 
  Database, Lock, Cog, BarChart3,
  Cpu, Zap, Shield, Layers
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Custom ML models trained on your data for maximum accuracy and performance.",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Advanced text analysis, sentiment detection, and conversational AI systems.",
    },
    {
      icon: Image,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual AI solutions.",
    },
    {
      icon: FileText,
      title: "Document AI",
      description: "Automated document processing, extraction, and intelligent classification.",
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes with advanced predictive modeling.",
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Intelligent automation of repetitive tasks and complex workflows.",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics.",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems.",
    },
    {
      icon: Zap,
      title: "Real-time AI",
      description: "Lightning-fast AI processing for real-time decision making.",
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Secure AI implementations with enterprise-grade protection.",
    },
    {
      icon: Layers,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs.",
    },
    {
      icon: Lock,
      title: "Compliance & Ethics",
      description: "Ethical AI that meets regulatory requirements and industry standards.",
    },
  ];

  const industries = [
    { name: "Healthcare", description: "AI-powered diagnostics and patient care" },
    { name: "Finance", description: "Fraud detection and algorithmic trading" },
    { name: "Retail", description: "Personalization and inventory optimization" },
    { name: "Manufacturing", description: "Predictive maintenance and quality control" },
    { name: "Education", description: "Adaptive learning and student analytics" },
    { name: "Transportation", description: "Route optimization and autonomous systems" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-gradient">AI Solutions</span> for every challenge
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI services designed to transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our AI Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge AI technology at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Specialized AI solutions for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground">
              Our proven process for AI implementation
            </p>
          </div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and identify AI opportunities." },
              { step: "02", title: "Design", description: "Our experts design custom AI solutions tailored to your goals." },
              { step: "03", title: "Development", description: "We build and train AI models using cutting-edge technology." },
              { step: "04", title: "Deployment", description: "Seamless integration into your existing infrastructure." },
              { step: "05", title: "Optimization", description: "Continuous monitoring and improvement for peak performance." },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                  <span className="text-2xl font-bold text-primary-foreground">{phase.step}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Solutions that scale with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Starter", price: "$999", features: ["Up to 5 AI models", "1,000 API calls/month", "Email support", "Basic analytics"] },
              { name: "Professional", price: "$2,999", features: ["Unlimited AI models", "50,000 API calls/month", "Priority support", "Advanced analytics", "Custom integrations"], popular: true },
              { name: "Enterprise", price: "Custom", features: ["Unlimited everything", "Dedicated support", "SLA guarantee", "Custom development", "On-premise option"] },
            ].map((plan, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-primary' 
                    : 'bg-card border-border'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gradient mb-6">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-base text-muted-foreground">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
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
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our AI solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
