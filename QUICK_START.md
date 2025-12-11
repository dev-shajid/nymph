# Quick Start: Adding Sample Content

Follow these steps to populate your landing page with content.

## Step 1: Start the Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000/admin` to access Sanity Studio.

## Step 2: Add Statistics (Recommended: 4 items)

1. Navigate to **Content** → **Landing Page** → **Statistics**
2. Click **Create** button (top right)
3. Add these sample stats:

### Stat 1
```
Value: 150
Suffix: +
Label: Projects Delivered
Display Order: 0
```

### Stat 2
```
Value: 8
Suffix: +
Label: Years Experience
Display Order: 1
```

### Stat 3
```
Value: 50
Suffix: +
Label: Happy Clients
Display Order: 2
```

### Stat 4
```
Value: 15
Suffix: +
Label: Countries Served
Display Order: 3
```

**Click Publish after each stat**

## Step 3: Add Testimonials (Recommended: 3-6 items)

1. Navigate to **Content** → **Landing Page** → **Testimonials**
2. Click **Create** button
3. Add sample testimonials:

### Testimonial 1
```
Quote: "Nymph Solutions transformed our business operations with their AI-powered analytics platform. Their team's expertise and dedication exceeded our expectations."
Author Name: Sarah Chen
Role/Position: CTO, TechForward Inc.
Company Name: TechForward
Avatar Image: [Upload a professional headshot - 400x400px recommended]
Display Order: 0
Active: ✓ (checked)
```

### Testimonial 2
```
Quote: "The mobile app they developed for us has become central to our customer engagement strategy. Outstanding quality and seamless user experience."
Author Name: Michael Rodriguez
Role/Position: Director of Digital, RetailMax
Company Name: RetailMax
Avatar Image: [Upload image]
Display Order: 1
Active: ✓ (checked)
```

### Testimonial 3
```
Quote: "Their blockchain solution revolutionized our supply chain transparency. Professional, innovative, and always delivering on time."
Author Name: Emily Watson
Role/Position: VP Operations, GlobalTrade
Company Name: GlobalTrade
Avatar Image: [Upload image]
Display Order: 2
Active: ✓ (checked)
```

**Click Publish after each testimonial**

### Getting Avatar Images

For placeholder avatars, you can use:
- [Unsplash](https://unsplash.com/s/photos/professional-headshot)
- [UI Faces](https://uifaces.co/)
- Or generate AI avatars from [This Person Does Not Exist](https://thispersondoesnotexist.com/)

## Step 4: Add Client Logos (Recommended: 6+ items)

1. Navigate to **Content** → **Landing Page** → **Client Logos**
2. Click **Create** button
3. Add company names:

```
Company Name: TechForward
Display Order: 0
Active: ✓

Company Name: RetailMax
Display Order: 1
Active: ✓

Company Name: GlobalTrade
Display Order: 2
Active: ✓

Company Name: InnovateCo
Display Order: 3
Active: ✓

Company Name: DataDrive
Display Order: 4
Active: ✓

Company Name: CloudFirst
Display Order: 5
Active: ✓
```

**Click Publish after each logo**

## Step 5: View Your Page

Visit `http://localhost:3000` to see your landing page with dynamic content!

## Tips

- **Order Field**: Controls the sequence items appear (0, 1, 2, 3...)
- **Active Toggle**: Use this to hide items without deleting them
- **Editing**: Click any item to edit, changes save as drafts until you publish
- **Deleting**: Click the three dots (...) menu on any item to delete

## Common Issues

**Images not showing?**
- Make sure you clicked "Upload" and selected an image
- Check that the image uploaded successfully (you should see a preview)
- Verify `cdn.sanity.io` is in `next.config.ts` remotePatterns

**Content not updating?**
- Make sure you clicked **Publish** (not just save draft)
- Refresh the browser (`http://localhost:3000`)
- Check the terminal for any errors

**Empty sections?**
- Sections won't appear if there's no content
- Add at least one item and publish it
- Make sure "Active" is checked for testimonials/logos

## Next Steps

Once you have sample content working:
1. Replace placeholder avatars with real photos
2. Update text to match your actual services
3. Add more testimonials (you can have unlimited)
4. Reorder items using the "Display Order" field

Need help? Check `SANITY_INTEGRATION.md` for technical details.
