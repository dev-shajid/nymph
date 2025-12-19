"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Smartphone,
  Cloud,
  Shield,
  Code,
  Layers,
  Palette,
  Database,
} from "lucide-react"

const services = [
  {
    id: "software-development",
    icon: Code,
    title: "Software Development",
    description:
      "Design and build scalable, high-performance software tailored to complex business requirements.",
  },
  {
    id: "ai-ml-engineering",
    icon: Brain,
    title: "AI & ML Engineering",
    description:
      "Develop production-grade AI/ML systems for automation, intelligence, analytics, and decision-making.",
  },
  {
    id: "web-mobile-applications",
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Create modern, secure, and performant web and mobile apps using cutting-edge frameworks.",
  },
  {
    id: "cloud-devops-solutions",
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description:
      "Build and operate cloud-native systems with robust CI/CD, scalability, and cost efficiency.",
  },
  {
    id: "enterprise-systems-integrations",
    icon: Layers,
    title: "Enterprise Systems & Integrations",
    description:
      "Architect and integrate large-scale enterprise platforms, APIs, and data pipelines.",
  },
  {
    id: "data-engineering-analytics",
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Design reliable data platforms for ingestion, processing, analytics, and AI readiness.",
  },
  {
    id: "ui-ux-product-design",
    icon: Palette,
    title: "UI/UX & Product Design",
    description:
      "Deliver intuitive, user-centric designs focused on usability, performance, and business impact.",
  },
  {
    id: "quality-security-reliability",
    icon: Shield,
    title: "Quality, Security & Reliability",
    description:
      "Ensure software excellence through automated testing, security best practices, and performance optimization.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Our collection of tech services spans
            <br className="hidden md:block" />
            every stage of transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty"
          >
            Explore how we help businesses transform with cutting-edge technology solutions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon

  return (
    <motion.div
      id={service.id}
      variants={itemVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 cursor-pointer"
      style={{ scrollMarginTop: '6rem' }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
      <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}
