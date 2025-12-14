"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, Target, Heart } from "lucide-react"
import Link from "next/link"

const benefits = [
    {
        icon: Users,
        title: "Talent Matching",
        description: "Connect with top candidates for your organization",
    },
    {
        icon: Target,
        title: "Smart Filtering",
        description: "Advanced search and filtering to find the right fit",
    },
    {
        icon: Heart,
        title: "Easy Management",
        description: "Streamlined hiring process from post to hire",
    },
    {
        icon: Briefcase,
        title: "Quality Candidates",
        description: "Access to verified and skilled professionals",
    },
]

export function CareersSection() {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    }

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-liear-to-b from-background via-primary/5 to-background" />
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6"
                        >
                            <Briefcase className="w-8 h-8 text-primary" />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-liear-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
                            Find Top Talent
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Your comprehensive job portal solution to connect with qualified professionals and grow your team
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300">
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                            <benefit.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-base">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-3xl bg-liear-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 md:p-12"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                    Visit Our Job Portal
                                </h3>
                                <p className="text-muted-foreground text-base md:text-lg">
                                    Browse opportunities, post jobs, and connect with the right candidates for your organization
                                </p>
                            </div>
                            <div className="shrink-0">
                                <Button
                                    asChild
                                    size="lg"
                                    className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                                >
                                    <Link href="https://career.nymphsolutions.com/" target="_blank" rel="noopener noreferrer">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Explore Portal
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-liear-to-r from-primary/0 via-white/10 to-primary/0"
                                            animate={{
                                                x: ["-100%", "100%"],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "linear",
                                            }}
                                        />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl z-0" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
