# Sanity CMS Setup for Landing Page

This project uses Sanity CMS to manage dynamic content for the landing page.

## Content Types

### 1. Statistics (`stat`)
Display key metrics on your landing page.

**Fields:**
- **Value**: The numeric value (e.g., 150)
- **Suffix**: Text to append (e.g., "+", "%", "K")
- **Label**: Description (e.g., "Projects Delivered")
- **Display Order**: Order of appearance (lower numbers first)

**Example:**
```
Value: 150
Suffix: +
Label: Projects Delivered
Order: 0
```

### 2. Testimonials (`testimonial`)
Show customer testimonials with photos.

**Fields:**
- **Quote**: The testimonial text (20-500 characters)
- **Author Name**: Person's name
- **Role/Position**: Their job title and company
- **Company Name**: Company name
- **Avatar Image**: Profile photo (required)
- **Display Order**: Order of appearance (lower numbers first)
- **Active**: Toggle to show/hide

**Example:**
```
Quote: "Nymph Solutions transformed our business..."
Author: Sarah Chen
Role: CTO, TechForward Inc.
Company: TechForward
Avatar: [Upload image]
Order: 0
Active: true
```

### 3. Client Logos (`clientLogo`)
Display logos of companies you've worked with.

**Fields:**
- **Company Name**: Name to display
- **Display Order**: Order of appearance (lower numbers first)
- **Active**: Toggle to show/hide

**Example:**
```
Company Name: TechForward
Order: 0
Active: true
```

## Getting Started

1. **Access Sanity Studio**
   ```bash
   npm run dev
   ```
   Then visit `http://localhost:3000/admin`

2. **Create Initial Content**
   
   Navigate to "Landing Page" in the sidebar and add:
   - At least 4 statistics
   - 3-6 testimonials with images
   - 6+ client logos for the marquee

3. **Content Updates**
   - All changes in Sanity Studio are reflected immediately on the live site
   - Use the "Order" field to rearrange items
   - Use the "Active" toggle to temporarily hide items without deleting

## Image Guidelines

### Testimonial Avatars
- Recommended size: 400x400px
- Format: JPG or PNG
- Use professional headshots
- Square aspect ratio works best

## Tips

- Keep statistics concise and impactful
- Testimonials should be 2-3 sentences for best readability
- Use the order field to feature your best testimonials first
- Client logos scroll infinitely - add at least 6 for smooth animation

## Content Management

All content is managed through Sanity Studio at `/admin`. Changes are fetched server-side for optimal performance.

**Organized Structure:**
```
Content
└── Landing Page
    ├── Statistics
    ├── Testimonials
    └── Client Logos
```
