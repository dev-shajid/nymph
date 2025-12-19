export const revalidate = 60 // Enable ISR: revalidate every 60 seconds
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CareersSection } from "@/components/careers-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getStats, getTestimonials, getClientLogos } from "@/sanity/lib/queries"

export default async function HomePage() {
    const [stats, testimonials, clientLogos] = await Promise.all([
        getStats(),
        getTestimonials(),
        getClientLogos(),
    ])

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <ServicesSection />
            <CareersSection />
            <AboutSection />
            <StatsSection stats={stats} />
            <TestimonialsSection testimonials={testimonials} clientLogos={clientLogos} />
            <ContactSection />
            <Footer />
        </main>
    )
}
