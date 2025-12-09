"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Smartphone,
  Cloud,
  Cpu,
  Link2,
  Shield,
  Code,
  Layers,
  Palette,
  CheckCircle,
  Settings,
  Headphones,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Brain,
    title: "AI & ML Development",
    description:
      "Build intelligent solutions with machine learning for data analysis, prediction, and natural language processing.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Development",
    description:
      "Create seamless mobile apps for iOS and Android, plus modern web applications using cutting-edge frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud Application Development",
    description:
      "Build cloud-native applications leveraging AWS, Azure, or Google Cloud for scalability and flexibility.",
  },
  {
    icon: Cpu,
    title: "Embedded & IoT Systems",
    description: "Develop software solutions focusing on efficient embedded technology for IoT devices and automation.",
  },
  {
    icon: Link2,
    title: "Blockchain Development",
    description: "Create decentralized applications (DApps) with smart contracts and secure blockchain solutions.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Provide threat prevention services to safeguard against evolving digital threats and ensure robust network protection.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Deliver tailored software solutions, developing custom applications and systems for specific business needs.",
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    description:
      "Develop large-scale enterprise software, integrating business processes, data management, and communication.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Offer user-centric design and intuitive UX development for engaging digital experiences.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Testing",
    description: "Comprehensive automation and manual testing to ensure software reliability and performance.",
  },
  {
    icon: Settings,
    title: "Augmented Engineering",
    description:
      "Advanced technologies like AI, machine learning, and data analytics to enhance engineering capabilities.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, troubleshooting, and continuous optimization for your applications.",
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
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} />
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
      variants={itemVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 cursor-pointer"
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
