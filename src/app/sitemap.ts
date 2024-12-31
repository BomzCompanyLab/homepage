import type { MetadataRoute } from 'next';

const sitemap = ():MetadataRoute.Sitemap => {
    return [
        {
            url: 'https://www.bomz.app',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: 'https://www.bomz.app/prc',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.bomz.app/pvc',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4
        },
        {
            url: 'https://www.bomz.app/plc',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4
        }
    ]
}

export default sitemap;