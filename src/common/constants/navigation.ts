import { HeroIcon } from '@/common/constants/heroicon.type'
import { HomeIcon, PhoneIcon, UserIcon } from '@heroicons/react/outline'

export type NavigationItemType = {
  name: string
  href: string
  icon?: HeroIcon
  sublinks?: NavigationItemType[]
}

export const home: NavigationItemType = {
  name: '',
  href: '/',
  icon: HomeIcon,
}

const services: NavigationItemType = {
  name: 'Services',
  href: '/services',
}

const about: NavigationItemType = {
  name: 'About Us',
  href: '',
}

const team: NavigationItemType = {
  name: 'Our Team',
  href: '/team',
}

const contact: NavigationItemType = {
  name: 'Contact Us',
  href: '/contact',
  icon: PhoneIcon,
}

const events: NavigationItemType = {
  name: 'Events',
  href: '/events',
}

const profile: NavigationItemType = {
  name: 'Profile',
  href: '/profile',
}

const logout: NavigationItemType = {
  name: 'Logout',
  href: '/logout', // has a redirect in Next configuration file.
}

export const login: NavigationItemType = {
  name: 'Login',
  href: '/login', // has a redirect in Next configuration file.
}

export const signup: NavigationItemType = {
  name: 'Sign Up',
  href: '/signup', // has a redirect in Next configuration file.
}

// Top-level navigation items
export const accountGroup: NavigationItemType = {
  name: 'Account',
  href: profile.href,
  sublinks: [profile, logout],
  icon: UserIcon,
}

const aboutUsGroup: NavigationItemType = {
  ...about,
  sublinks: [contact, team],
}

// MARK: Nav items
export const loggedInNavItems: NavigationItemType[] = [aboutUsGroup, events]
export const loggedOutNavItems: NavigationItemType[] = [aboutUsGroup, events]

// MARK: Footer items
export const footerItems = {
  column1: [about, contact, services],
  column2: [events],
  column3: [],
  column4: [team],
  legal: [
    {
      href: '/terms',
      name: 'Terms of Use',
      icon: '',
    },
    {
      // NOTE: If you change this route, please update the redirect in `vercel.json` as well
      href: 'https://www.iubenda.com/privacy-policy/',
      name: 'Privacy',
      analyticsEventLabel: 'Privacy',
      icon: '',
    },
  ],
}
