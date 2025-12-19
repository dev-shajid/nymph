import { client } from './client'

export interface Stat {
  _id: string
  value: number
  suffix?: string
  label: string
  order: number
}

export interface Testimonial {
  _id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: {
    asset: {
      _id: string
      url: string
    }
  }
  order: number
  isActive: boolean
}

export interface ClientLogo {
  _id: string
  name: string
  logoImage?: {
    asset: {
      _id: string
      url: string
    }
  }
  showText: boolean
  order: number
  isActive: boolean
}

export async function getStats(): Promise<Stat[]> {
  const query = `*[_type == "stat"] | order(order asc) {
    _id,
    value,
    suffix,
    label,
    order
  }`

  // Use force-cache for permanent caching
  return client.fetch(query, {}, { cache: 'force-cache', next: { tags: ['stat'] } })
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial" && isActive == true] | order(order asc) {
    _id,
    quote,
    author,
    role,
    company,
    avatar {
      asset-> {
        _id,
        url
      }
    },
    order,
    isActive
  }`

  return client.fetch(query, {}, { cache: 'force-cache', next: { tags: ['testimonial'] } })
}

export async function getClientLogos(): Promise<ClientLogo[]> {
  const query = `*[_type == "clientLogo" && isActive == true] | order(order asc) {
    _id,
    name,
    logoImage {
      asset-> {
        _id,
        url
      }
    },
    showText,
    order,
    isActive
  }`

  return client.fetch(query, {}, { cache: 'force-cache', next: { tags: ['clientLogo'] } })
}