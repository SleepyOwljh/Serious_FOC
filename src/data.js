import { Music, Zap, Star, Disc } from 'lucide-react';

const groupPhotos = import.meta.glob('./assets/images/group_photo/*.{png,jpg,jpeg,svg}', {
  eager: true,
  query: '?url',
  import: 'default'
});

export const houses = [
  {
    id: 'techno',
    name: 'Techno',
    description: 'Pulsating beats and futuristic rhythms. We define the underground sound.',
    icon: Disc,
    color: 'text-neonBlue',
    borderColor: 'border-neonBlue',
    bgColor: 'bg-neonBlue/10',
    hoverBorder: 'hover:border-neonBlue',
    bgGradient: 'from-blue-900/50 to-transparent',
    groups: [
      { name: 'Bass Drops', leader: 'Alex' },
      { name: 'Synths', leader: 'Sarah' },
      { name: 'Beats', leader: 'Mike' }
    ]
  },
  {
    id: 'funk',
    name: 'Funk',
    description: 'Groovy basslines and soulful melodies. Keep it funky, keep it real.',
    icon: Zap,
    color: 'text-neonPurple',
    borderColor: 'border-neonPurple',
    bgColor: 'bg-neonPurple/10',
    hoverBorder: 'hover:border-neonPurple',
    bgGradient: 'from-purple-900/50 to-transparent',
    groups: [
      { name: 'Groove', leader: 'Jessica' },
      { name: 'Soul', leader: 'David' },
      { name: 'Vibe', leader: 'Emily' }
    ]
  },
  {
    id: 'pop',
    name: 'Pop',
    description: 'Catchy hooks and timeless anthems. We are the stars of the show.',
    icon: Star,
    color: 'text-neonPink',
    borderColor: 'border-neonPink',
    bgColor: 'bg-neonPink/10',
    hoverBorder: 'hover:border-neonPink',
    bgGradient: 'from-pink-900/50 to-transparent',
    groups: [
      { name: 'Icons', leader: 'Chris' },
      { name: 'Hits', leader: 'Amanda' },
      { name: 'Charts', leader: 'Tom' }
    ]
  },
  {
    id: 'country',
    name: 'Country',
    description: 'Acoustic strings and heartfelt stories. Roots run deep here.',
    icon: Music,
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400',
    bgColor: 'bg-yellow-400/10',
    hoverBorder: 'hover:border-yellow-400',
    bgGradient: 'from-yellow-900/50 to-transparent',
    groups: [
      { name: 'Ranch', leader: 'John' },
      { name: 'Folk', leader: 'Kate' },
      { name: 'Banjo', leader: 'Sam' }
    ]
  }
];

export const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'A small group of music lovers gathered in a garage.'
  },
  {
    year: '2021',
    title: 'First Major Event',
    description: 'Held "Neon Nights", our first outdoor rave with 500+ attendees.'
  },
  {
    year: '2022',
    title: 'Expansion',
    description: 'Opened chapters in 3 universities and launched the "House" system.'
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Featured in "Club Culture" magazine as the top student organization.'
  }
];

export const sponsors = [
  { name: 'AudioTech', logo: 'https://placehold.co/150x50/1a1a1a/FFF?text=AudioTech' },
  { name: 'EnergyDrink', logo: 'https://placehold.co/150x50/1a1a1a/FFF?text=EnergyDrink' },
  { name: 'EventSys', logo: 'https://placehold.co/150x50/1a1a1a/FFF?text=EventSys' },
  { name: 'MusicGear', logo: 'https://placehold.co/150x50/1a1a1a/FFF?text=MusicGear' },
];

export const galleryImages = Object.values(groupPhotos).map((src, index) => ({
  id: index + 1,
  src: src,
  alt: `Group Photo ${index + 1}`
}));
