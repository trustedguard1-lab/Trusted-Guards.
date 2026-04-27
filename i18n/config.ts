export type Language = 'en';

export const languages: Language[] = ['en'];
export const defaultLanguage: Language = 'en';

export interface TranslationStrings {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    vision: string;
  };
  services: {
    title: string;
    cctv: string;
    access: string;
    alarm: string;
    patrol: string;
    commercial: string;
    security: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    address: string;
    message: string;
    send: string;
    sendingMessage: string;
    successMessage: string;
  };
  footer: {
    rights: string;
    year: string;
  };
  stats: {
    clients: string;
    experience: string;
    team: string;
  };
  testimonials: {
    title: string;
    viewAll: string;
  };
  news: {
    title: string;
    readMore: string;
  };
  certificates: {
    title: string;
  };
}
