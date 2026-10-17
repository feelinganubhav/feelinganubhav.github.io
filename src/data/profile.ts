// All site content lives here. Edit this file only.

export const LINKEDIN_URL = '' // paste your LinkedIn URL; the button hides while empty
export const CONTACT_EMAIL = 'anubhav204@gmail.com'
export const YOUTUBE_URL = '' // paste your singing channel link; hidden while empty

export const GYM_START = '2026-03-15'

export const links = {
  instagram: 'https://www.instagram.com/feeling_anubhav/',
  instagramBuild: 'https://www.instagram.com/anubhavbuildsai/',
  github: 'https://github.com/feelinganubhav',
}

export const person = {
  name: 'Anubhav Ranjan',
  role: 'AI Engineer',
  city: 'Bangalore',
  age: 23,
  tagline: 'Real-time computer vision and GenAI agents.',
  heroAlt: 'Stylised AI illustration of Anubhav working at a Mac',
}

export interface Original {
  title: string
  blurb: string
  tags: string[]
}

export interface Season {
  id: string
  number: number
  title: string
  subtitle: string
  originals: Original[]
  link?: { label: string; href: string }
}

export const seasons: Season[] = [
  {
    id: 'systems',
    number: 1,
    title: 'Systems',
    subtitle: 'Production AI, shipped and running.',
    originals: [
      {
        title: 'Threat Watch',
        blurb:
          'Real-time video threat detection across 50 camera streams on a single RTX 5090. Person detection plus a vision-language model served on vLLM (moved over from Triton), with alerts that carry evidence clips.',
        tags: ['Computer Vision', 'vLLM', 'VLM'],
      },
      {
        title: 'The Agent Platform',
        blurb:
          'A GenAI agent platform for a Fortune 50 company, refactored onto Azure Container Apps.',
        tags: ['GenAI', 'Agents', 'Azure'],
      },
      {
        title: 'Live Wire',
        blurb: 'A live video platform that streams cameras over Tailscale to SRT.',
        tags: ['Streaming', 'SRT', 'Tailscale'],
      },
      {
        title: 'Board Check',
        blurb: 'PCB inspection with computer vision.',
        tags: ['Computer Vision', 'Inspection'],
      },
    ],
  },
  {
    id: 'jarvis',
    number: 2,
    title: 'Building Jarvis',
    subtitle: 'My own AI assistant, built in public. A Day N series.',
    originals: [
      {
        title: 'Jarvis',
        blurb:
          'A team of AI agents that scout trends, make and review reels, reply to comments, and report to my phone. Follow the Day N series on Instagram.',
        tags: ['Agents', 'Automation', 'In public'],
      },
    ],
    link: { label: 'Watch on @anubhavbuildsai', href: links.instagramBuild },
  },
  {
    id: 'offscreen',
    number: 3,
    title: 'Off screen',
    subtitle: 'The parts that are not code.',
    originals: [
      {
        title: 'Singing',
        blurb: 'Covers of Arijit Singh and Kishore Kumar.',
        tags: ['Music', 'Covers'],
      },
      {
        title: 'Travel',
        blurb: 'Wayanad, Gokarna and Chikmagalur.',
        tags: ['Wayanad', 'Gokarna', 'Chikmagalur'],
      },
      {
        title: 'Gym',
        blurb: 'A journey that started on 15 March 2026. Still going.',
        tags: ['Fitness', 'Consistency'],
      },
    ],
  },
]

export type ProfileId = 'recruiter' | 'creator' | 'brand'

export const profiles: { id: ProfileId; label: string; hint: string; order: string[] }[] = [
  { id: 'recruiter', label: 'Recruiter', hint: 'Systems first', order: ['systems', 'jarvis', 'offscreen'] },
  { id: 'creator', label: 'Creator', hint: 'Jarvis first', order: ['jarvis', 'offscreen', 'systems'] },
  { id: 'brand', label: 'Brand', hint: 'Off screen first', order: ['offscreen', 'jarvis', 'systems'] },
]
