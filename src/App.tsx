import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Scale,
  Users,
  Shield,
  FileText,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Star,
  Award,
  Briefcase,
  MessageCircle,
  Send,
  CheckCircle,
  ArrowUp,
  Linkedin,
  Instagram,
  GraduationCap,
  User
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTeamMember, setSelectedTeamMember] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50, // Reduced offset for better mobile triggering
      disable: false // Ensure AOS works on all devices
    });

    // Force AOS refresh on resize for better mobile support
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ['home', 'about', 'services', 'team', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email functionality placeholder
    const emailSubject = `New Contact Form Submission from ${formData.name}`;
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    // WhatsApp functionality
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918888656501?text=${encodeURIComponent(whatsappMessage)}`;

    // For production, you would integrate with EmailJS or a backend service
    console.log('Email would be sent with:', { subject: emailSubject, body: emailBody });

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Civil Litigation",
      description: "Expert representation in civil disputes, contract matters, and commercial litigation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Criminal Defense",
      description: "Aggressive defense strategies for all types of criminal charges and investigations."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Corporate Law",
      description: "Comprehensive legal services for businesses, including formation, contracts, and compliance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Law",
      description: "Compassionate representation in divorce, custody, and family-related legal matters."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Employment Law",
      description: "Protecting rights in workplace disputes, discrimination, and employment contracts."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Personal Injury",
      description: "Fighting for fair compensation in accident, injury, and malpractice cases."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      title: "Senior Partner",
      specialty: "Civil Litigation & Corporate Law",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "Harvard Law School (J.D.), Yale University (B.A. Political Science)",
      summary: "Sarah brings over 15 years of experience in complex civil litigation and corporate law. She has successfully represented Fortune 500 companies and high-net-worth individuals in landmark cases. Her expertise spans contract disputes, mergers & acquisitions, and regulatory compliance.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      instagram: "https://instagram.com/sarahjohnsonlaw"
    },
    {
      name: "Michael Chen",
      title: "Partner",
      specialty: "Criminal Defense & Family Law",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "Stanford Law School (J.D.), UC Berkeley (B.A. Criminal Justice)",
      summary: "Michael is a seasoned criminal defense attorney with a 95% success rate in jury trials. He specializes in white-collar crimes, DUI defense, and complex family law matters. His compassionate approach and aggressive advocacy have earned him recognition as a top attorney in the region.",
      linkedin: "https://linkedin.com/in/michaelchen",
      instagram: "https://instagram.com/michaelchenlaw"
    },
    {
      name: "Emily Rodriguez",
      title: "Associate Attorney",
      specialty: "Employment & Personal Injury Law",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "Columbia Law School (J.D.), Georgetown University (B.A. Economics)",
      summary: "Emily focuses on employment law and personal injury cases, advocating for workers' rights and accident victims. She has secured millions in settlements and is known for her meticulous case preparation and client-centered approach. Emily is fluent in Spanish and serves the Hispanic community.",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      instagram: "https://instagram.com/emilyrodriguezlaw"
    },
    {
      name: "David Thompson",
      title: "Legal Counsel",
      specialty: "Corporate Law & Compliance",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      education: "NYU Law School (J.D.), Wharton School (MBA), Princeton University (B.A. Economics)",
      summary: "David combines legal expertise with business acumen, advising corporations on compliance, risk management, and strategic legal matters. His dual background in law and business makes him invaluable for complex corporate transactions and regulatory issues.",
      linkedin: "https://linkedin.com/in/davidthompson",
      instagram: "https://instagram.com/davidthompsonlaw"
    }
  ];

  const testimonials = [
    {
      name: "Robert Smith",
      role: "Business Owner",
      content: "Auxilium Legal Associates provided exceptional representation in our corporate matter. Their attention to detail and strategic approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "Jennifer Wilson",
      role: "Individual Client",
      content: "The team's professionalism and dedication during my personal injury case was outstanding. They fought tirelessly for my rights and secured a favorable outcome.",
      rating: 5
    },
    {
      name: "Mark Davis",
      role: "Corporate Executive",
      content: "Their expertise in employment law helped us navigate complex workplace issues. Highly recommend their services to any business.",
      rating: 5
    }
  ];

  const gallery = [
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181712/pexels-photo-1181712.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            <div className="flex items-center">
              {/* Logo will be integrated here once URL is provided */}
              <img
                src="YOUR_LOGO_URL_HERE"
                alt="Auxilium Legal Associates Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto mr-2 sm:mr-3 object-contain hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to icon if logo fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center">
                <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-blue-800 mr-1 sm:mr-2" />
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 hidden sm:block">Auxilium Legal</span>
                <span className="text-sm font-bold text-blue-800 block sm:hidden">Auxilium</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm lg:text-base font-medium transition-colors hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors hover:text-blue-600 hover:bg-gray-50 rounded-md ${activeSection === item.id ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-700'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white flex items-center relative overflow-hidden pt-14 sm:pt-16 lg:pt-18">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-pulse">
            <Scale className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-white transform rotate-12" />
          </div>
          <div className="absolute top-32 sm:top-40 right-4 sm:right-20 animate-pulse delay-1000">
            <Shield className="w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 text-white transform -rotate-12" />
          </div>
          <div className="absolute bottom-24 sm:bottom-32 left-1/4 animate-pulse delay-2000 hidden sm:block">
            <FileText className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-white transform rotate-6" />
          </div>
          <div className="absolute bottom-16 sm:bottom-20 right-1/3 animate-pulse delay-500 hidden sm:block">
            <Award className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-white transform -rotate-6" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
                  <span className="inline-block animate-bounce-in" style={{ animationDelay: '0.5s' }}>Expert</span>{' '}
                  <span className="inline-block animate-bounce-in" style={{ animationDelay: '0.7s' }}>Legal</span>
                  <span className="block text-blue-300 animate-bounce-in mt-2" style={{ animationDelay: '0.9s' }}>Advocacy</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed animate-fade-in-up max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '1.2s' }}>
                  Protecting your rights with dedication, integrity, and unwavering commitment to justice.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up justify-center lg:justify-start" style={{ animationDelay: '1.5s' }}>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-blue-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Get Free Consultation</span>
                  <span className="sm:hidden">Free Consultation</span>
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="lg:text-center mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl max-w-md mx-auto lg:max-w-none">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full mx-auto hover:bg-blue-500 hover:scale-110 transition-all duration-300 hover:rotate-12">
                  <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold hover:text-blue-200 transition-colors duration-300">25+ Years Experience</h3>
                  <p className="text-blue-100 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    Trusted by thousands of clients across various legal domains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 hover:text-blue-800 transition-colors duration-300">About Auxilium Legal Associates</h2>
                <div className="w-20 h-1 bg-blue-600 hover:w-32 transition-all duration-500"></div>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-center lg:text-left" data-aos="fade-up" data-aos-delay="400">
                <p className="text-base sm:text-lg hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform cursor-default">
                  For over two decades, Auxilium Legal Associates has been a beacon of legal excellence,
                  providing comprehensive legal services to individuals, families, and businesses throughout the region.
                </p>
                <p className="text-sm sm:text-base hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform cursor-default">
                  Our commitment to justice drives everything we do. We believe that everyone deserves access to
                  quality legal representation, regardless of the complexity of their case or their background.
                </p>
                <p className="text-sm sm:text-base hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform cursor-default">
                  With a team of experienced attorneys specializing in various areas of law, we offer personalized
                  attention and strategic legal solutions tailored to meet each client's unique needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-md mx-auto lg:max-w-none" data-aos="fade-up" data-aos-delay="600">
                <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2 group-hover:text-blue-800 transition-colors duration-300">1000+</div>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Cases Won</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2 group-hover:text-blue-800 transition-colors duration-300">25+</div>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Years Experience</div>
                </div>
              </div>

              {/* Additional Interactive Elements */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
                <div className="flex items-center space-x-3 group cursor-default">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">Trusted</h4>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Legal Partner</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">Excellence</h4>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">In Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center order-1 lg:order-2" data-aos="fade-left" data-aos-delay="400">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Legal professionals in office"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative z-10 w-full h-auto max-w-md mx-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 hover:text-blue-800 transition-colors duration-300">Our Legal Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 hover:w-32 transition-all duration-500"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300 px-4">
              Comprehensive legal solutions tailored to protect your interests and achieve your goals
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="text-blue-600 mb-4 sm:mb-6 group-hover:scale-125 group-hover:text-blue-800 transition-all duration-300 transform group-hover:rotate-12 flex justify-center sm:justify-start">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-800 transition-colors duration-300 text-center sm:text-left">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-center sm:text-left">{service.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 hover:text-blue-800 transition-colors duration-300">Our Legal Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 hover:w-32 transition-all duration-500"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300 px-4">
              Meet the experienced attorneys dedicated to fighting for your rights
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200 relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={200 + index * 150}
                onClick={() => setSelectedTeamMember(member)}
              >
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                <div className="relative z-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-6 object-cover group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 border-4 border-transparent group-hover:border-blue-200"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-800 transition-colors duration-300 hover:underline">{member.name}</h3>
                  <p className="text-sm sm:text-base text-blue-600 font-medium mb-3 sm:mb-4 group-hover:text-blue-800 transition-colors duration-300">{member.title}</p>
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{member.specialty}</p>

                  {/* Animated underline */}
                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto group-hover:w-16 transition-all duration-500"></div>

                  {/* Professional badge */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      <Award className="w-3 h-3 mr-1 hidden sm:block" />
                      Click for Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedTeamMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-bounce-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTeamMember(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <img
                  src={selectedTeamMember.image}
                  alt={selectedTeamMember.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg"
                />
                <div className="text-center sm:text-left flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{selectedTeamMember.name}</h2>
                  <p className="text-lg text-blue-600 font-semibold mb-2">{selectedTeamMember.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{selectedTeamMember.specialty}</p>

                  {/* Social Links */}
                  <div className="flex space-x-4 justify-center sm:justify-start">
                    <a
                      href={selectedTeamMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href={selectedTeamMember.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedTeamMember.education}</p>
              </div>

              {/* Professional Summary */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <User className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Professional Summary</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedTeamMember.summary}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact {selectedTeamMember.name.split(' ')[0]}
                </button>
                <button
                  onClick={() => setSelectedTeamMember(null)}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 hover:text-blue-800 transition-colors duration-300">Our Workplace</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 hover:w-32 transition-all duration-500"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300 px-4">
              A glimpse into our professional environment where justice is pursued with dedication
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 aspect-square sm:aspect-video lg:aspect-square"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h4 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Professional Excellence</h4>
                    <p className="text-xs sm:text-sm opacity-90 hidden sm:block">Where Justice Meets Dedication</p>
                  </div>
                </div>

                {/* Corner badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 hidden sm:block">
                  Legal Excellence
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span className="flex items-center">
                      <Scale className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">Professional Environment</span>
                    </span>
                    <span className="opacity-75 text-xs sm:text-sm">#{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 hover:text-blue-800 transition-colors duration-300">Client Testimonials</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 hover:w-32 transition-all duration-500"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300 px-4">
              Hear from our satisfied clients about their experience with our legal services
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-100 relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={200 + index * 150}
              >
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>

                  <div className="flex items-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 justify-center sm:justify-start">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current group-hover:text-yellow-500 transition-colors duration-300 hover:scale-125 transform" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-center sm:text-left">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-gray-200 group-hover:border-blue-200 pt-4 sm:pt-6 transition-colors duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-blue-600 group-hover:text-blue-800 transition-colors duration-300 font-medium">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Animated accent line */}
                    <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-700"></div>

                    {/* Trust badge */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        <CheckCircle className="w-3 h-3 mr-1 hidden sm:block" />
                        Verified Client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 hover:text-blue-200 transition-colors duration-300">Get in Touch</h2>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-6 hover:w-32 transition-all duration-500"></div>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto hover:text-white transition-colors duration-300 px-4">
              Ready to discuss your legal needs? Contact us today for a free consultation
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300">Address</h3>
                    <p className="text-xs sm:text-sm text-blue-100 group-hover:text-white transition-colors duration-300">123 Legal Plaza, Suite 456<br />Downtown City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300">Phone Number</h3>
                    <p className="text-xs sm:text-sm text-blue-100 group-hover:text-white transition-colors duration-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold group-hover:text-blue-200 transition-colors duration-300">Email Address</h3>
                    <p className="text-xs sm:text-sm text-blue-100 group-hover:text-white transition-colors duration-300">info@auxiliumlegal.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-800 rounded-xl p-4 sm:p-6 hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-default group">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 group-hover:text-blue-100 transition-colors duration-300">Office Hours</h3>
                <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-blue-100 group-hover:text-white transition-colors duration-300">
                  <p className="text-xs sm:text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-xs sm:text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-xs sm:text-sm">Sunday: Closed</p>
                  <p className="text-xs sm:text-sm mt-3 sm:mt-4 font-medium">Emergency consultations available 24/7</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 text-gray-900 hover:shadow-2xl transition-shadow duration-500 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center hover:text-blue-800 transition-colors duration-300">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-colors duration-300 text-sm sm:text-base resize-none"
                    placeholder="Please describe your legal matter..."
                  />
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center group transform hover:-translate-y-1 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const message = `Hello! I'm interested in your legal services. Please contact me.`;
                      window.open(`https://wa.me/918888656501?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

            {/* Column 1: Brand Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6 justify-center sm:justify-start">
                <img
                  src="YOUR_LOGO_URL_HERE"
                  alt="Auxilium Legal Associates Logo"
                  className="h-6 sm:h-8 w-auto mr-2 sm:mr-3 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2 sm:mr-3 hidden" />
                <span className="text-lg sm:text-xl font-bold">Auxilium Legal</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed text-center sm:text-left">
                Your trusted legal partner. Committed to providing exceptional services with integrity and dedication.
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400 text-center sm:text-left">
                {navItems.slice(0, 5).map((item) => ( // Display first 5 links
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 & 4: Google Map */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left text-white">Our Office</h3>

              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5012693483527!2d73.84322357496255!3d18.50623658258454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1cc84b7caab%3A0x76e1dbc0a50ef3e2!2sAuxilium%20Legal%20Associates!5e0!3m2!1sen!2sin!4v1752770919488!5m2!1sen!2sin"
                  className="w-full h-[250px] sm:h-[300px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Auxilium Legal Associates Office Location"
                  style={{
                    // filter: 'grayscale(1) invert(0.9) contrast(1.1)',
                    borderRadius: '16px',
                  }}
                ></iframe>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Auxilium Legal Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}

export default App;