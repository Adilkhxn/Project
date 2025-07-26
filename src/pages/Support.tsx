import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Support = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all unworn items in original condition with tags attached. Items must be returned in their original packaging.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and international shipping options are also available.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide! International shipping times vary by location, typically 7-14 business days. Customs fees may apply.'
    },
    {
      question: 'How do I care for my hijabs and abayas?',
      answer: 'Care instructions vary by fabric. Generally, we recommend gentle machine wash in cold water or hand washing for delicate items. Always check the care label on your specific item.'
    },
    {
      question: 'What sizes do you offer?',
      answer: 'We offer sizes XS to 3XL for most items. Each product page includes a detailed size chart to help you find the perfect fit.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account.'
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available 9 AM - 6 PM EST',
      action: 'Start Chat',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate help',
      availability: '1-800-MODESTY (663-3789)',
      action: 'Call Now',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'text-purple-600'
    }
  ];

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold font-poppins">
              Support Center
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="gradient-card border-border text-center p-6">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">24 Hour</h3>
            <p className="text-muted-foreground">Average Response Time</p>
          </Card>
          <Card className="gradient-card border-border text-center p-6">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">98%</h3>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </Card>
          <Card className="gradient-card border-border text-center p-6">
            <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Live Chat</h3>
            <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-poppins text-center mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="gradient-card border-border hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <method.icon className={`h-12 w-12 ${method.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{method.availability}</p>
                  <Button 
                    className="w-full"
                    onClick={() => toast.info(`${method.action} functionality coming soon!`)}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-poppins text-center mb-8">Frequently Asked Questions</h2>
          
          {/* FAQ Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search FAQs..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="gradient-card border-border">
                <CardContent className="p-0">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="gradient-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold font-poppins">Send Us a Message</CardTitle>
              <CardDescription>
                Can't find what you're looking for? Send us a message and we'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    placeholder="What can we help you with?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your question or issue in detail..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">
              Size Guide
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">
              Shipping Info
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">
              Return Policy
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">
              Care Instructions
            </Badge>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;