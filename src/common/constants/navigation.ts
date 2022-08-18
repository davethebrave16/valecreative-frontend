export type NavigationItemType = {
  name: string
  href: string
  sublinks?: NavigationItemType[]
}

export const home: NavigationItemType = {
  name: '',
  href: '/'
}

const services: NavigationItemType = {
  name: 'Services',
  href: '/services'
}

const about: NavigationItemType = {
  name: 'About Us',
  href: ''
}

const team: NavigationItemType = {
  name: 'Our Team',
  href: '/team'
}

const contact: NavigationItemType = {
  name: 'Contact Us',
  href: '/contact'
}

const events: NavigationItemType = {
  name: 'Events',
  href: '/events'
}

const profile: NavigationItemType = {
  name: 'Profile',
  href: '/profile'
}

const logout: NavigationItemType = {
  name: 'Logout',
  href: '/logout'
}

export const login: NavigationItemType = {
  name: 'Login',
  href: '/login'
}

export const signup: NavigationItemType = {
  name: 'Sign Up',
  href: '/signup'
}

// Top-level navigation items
export const accountGroup: NavigationItemType = {
  name: 'Account',
  href: profile.href,
  sublinks: [profile, logout]
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
