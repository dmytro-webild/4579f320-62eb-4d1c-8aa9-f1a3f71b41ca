"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Cape Carpenter"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "gradient-bars",
      }}
      logoText="Cape Carpenter & Woodworkers"
      description="Crafted with precision. Built with passion. Premium woodwork that transforms your space into something unforgettable."
      buttons={[
        {
          text: "Get a Free Quote",
          href: "#contact",
        },
      ]}
      layoutOrder="default"
      imageSrc="http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821261.jpg"
      imageAlt="Luxury bespoke carpentry project"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Custom Furniture",
          author: "Bespoke",
          description: "Tailor-made tables, cabinets, and storage solutions.",
          tags: [
            "Furniture",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-woman-kid-kitchen_23-2149638015.jpg?_wi=1",
        },
        {
          id: "s2",
          title: "Decking & Outdoor",
          author: "Durable",
          description: "Premium outdoor structures built for longevity.",
          tags: [
            "Outdoor",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/panoramic-view-nice-summer-terrace-tropic-environment_1127-3401.jpg",
        },
        {
          id: "s3",
          title: "Built-in Cupboards",
          author: "Functional",
          description: "Maximize space with custom-fitted cabinetry.",
          tags: [
            "Kitchen",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/spa-still-life_23-2147821138.jpg",
        },
      ]}
      title="Our Expert Services"
      description="We deliver high-end craftsmanship with attention to detail across a range of wood-based services."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Choose Us"
      description="Known for excellent workmanship, fair pricing, and reliable service. We take pride in every piece we build — ensuring durability, beauty, and customer satisfaction every time."
      bulletPoints={[
        {
          title: "Precision Craftsmanship",
          description: "Attention to every microscopic detail.",
        },
        {
          title: "Fair & Transparent",
          description: "Honest pricing with no hidden costs.",
        },
        {
          title: "Reliable Service",
          description: "Professional turnaround, every single time.",
        },
      ]}
      mediaAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-smiley-woman-kid-kitchen_23-2149638015.jpg?_wi=2"
      imageAlt="Precision woodworking process"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Homeowner",
          testimonial: "Outstanding craftsmanship and attention to detail.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-showing-new-home-his-surprised-happy-girlfriend_74855-10259.jpg",
        },
        {
          id: "t2",
          name: "Mark R.",
          role: "Business Owner",
          testimonial: "Affordable pricing and amazing results for our shop.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-tender-young-smiling-woman-feeling-cozy-home-sitting-kitchen-chair-with-smartphone_1258-199927.jpg",
        },
        {
          id: "t3",
          name: "Elena V.",
          role: "Architect",
          testimonial: "Professional, reliable, and fast turnaround.",
          imageSrc: "http://img.b2bpic.net/free-photo/composition-fathers-day-with-some-tools_23-2147790948.jpg",
        },
        {
          id: "t4",
          name: "David K.",
          role: "Homeowner",
          testimonial: "The best carpentry team in Cape Town.",
          imageSrc: "http://img.b2bpic.net/free-photo/smart-indian-carpenter-contractor-with-goggle-headphone-check-white-ceiling-cornice-interior-decoration-house-concept_609648-1362.jpg",
        },
        {
          id: "t5",
          name: "Alice W.",
          role: "Designer",
          testimonial: "Exquisite quality and beautiful custom finish.",
          imageSrc: "http://img.b2bpic.net/free-photo/men-working-cutting-mdf-board_23-2149384821.jpg",
        },
      ]}
      title="Client Love"
      description="What our happy clients say about our workmanship."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Ready to Transform Your Space?"
      description="Fill out the form below and we'll get back to you with a free quote."
      inputPlaceholder="Enter your email address"
      buttonText="Contact Us Now"
      tag="Get In Touch"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2026 Cape Carpenter & Woodworkers Cooperative"
      bottomRightText="Built with passion."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
