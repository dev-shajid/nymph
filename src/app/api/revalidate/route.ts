import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// Optionally, set a secret for webhook security
const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET

// Map Sanity document types to cache tags
const typeToTag: Record<string, string> = {
    stat: 'stat',
    testimonial: 'testimonial',
    clientLogo: 'clientLogo',
}

export async function POST(req: NextRequest) {
    // Optional: check webhook secret
    if (WEBHOOK_SECRET) {
        const secret = req.nextUrl.searchParams.get('secret')
        if (secret !== WEBHOOK_SECRET) {
            return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
        }
    }

    const body = await req.json()
    // Sanity webhook payloads include _type for the changed document
    const docType = body?._type
    const tag = typeToTag[docType]

    console.log({tag})

    if (tag) {
        await revalidateTag(tag, {})
        return NextResponse.json({ revalidated: true, tag })
    }

    // Optionally, revalidate all tags if type is not mapped
    // Object.values(typeToTag).forEach(revalidateTag)
    return NextResponse.json({ revalidated: false, reason: 'Unknown type', docType })
}
