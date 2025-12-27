/**
 * Friends/Links Configuration
 * Add your friend links here
 */

export interface FriendLink {
    name: string;
    url: string;
    avatar?: string;
    description: string;
    tags?: string[];
}

export const friendLinks: FriendLink[] = [
    {
        name: 'Astro',
        url: 'https://astro.build',
        avatar: 'https://astro.build/assets/press/astro-icon-light.svg',
        description: 'The web framework for content-driven websites',
        tags: ['Framework', 'SSG'],
    },
    {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com',
        avatar: 'https://tailwindcss.com/favicons/apple-touch-icon.png?v=4',
        description: 'A utility-first CSS framework',
        tags: ['CSS', 'Framework'],
    },
    {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org',
        avatar: 'https://www.typescriptlang.org/icons/icon-512x512.png',
        description: 'JavaScript with syntax for types',
        tags: ['Language', 'Types'],
    },
    {
        name: 'Vercel',
        url: 'https://vercel.com',
        avatar: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
        description: 'Develop. Preview. Ship.',
        tags: ['Hosting', 'Deploy'],
    },
    // Add more friend links here...
];
