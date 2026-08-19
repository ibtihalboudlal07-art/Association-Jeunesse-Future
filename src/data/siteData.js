import team from '../assets/activity-team.jpeg';
import cake from '../assets/activity-cake.jpeg';
import service from '../assets/activity-service.jpeg';
import drinks from '../assets/activity-drinks.jpeg';
import dialogue from '../assets/activity-dialogue.jpeg';
import teamwork from '../assets/activity-teamwork.jpeg';
import serving from '../assets/activity-serving.jpeg';
import volunteer from '../assets/activity-volunteer.jpeg';
import invitation from '../assets/invitation-reunion.jpeg';

export const joinFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfFaXn0bpTsHv-BC4NOAICFk9B1-zGL2QkziQ6mcl-aCbwIrA/viewform?pli=1';

// Toutes les informations éditables du site sont regroupées ici.
export const siteInfo = {
  name: 'Association Jeunesse de Futur',
  shortName: 'Jeunesse de Futur',
  phone: 'À compléter', email: 'À compléter', address: 'À compléter',
  intro: 'Une association de jeunesse engagée, portée par la solidarité, l’écoute et la volonté d’agir ensemble.'
};
export const stats = [
  ['Activités réalisées', 'XX', 'Sparkles'], ['Bénévoles mobilisés', 'XX', 'UsersRound'], ['Personnes accompagnées', 'XX', 'Heart'], ['Projets en cours', 'XX', 'ArrowUpRight']
];
export const values = [
  ['Solidarité', 'Nous avançons côte à côte, au plus près des besoins.', 'HeartHandshake'],
  ['Engagement', 'Chaque geste compte et peut devenir une action durable.', 'BadgeCheck'],
  ['Jeunesse', 'Nous faisons confiance à l’énergie et aux idées des jeunes.', 'UsersRound'],
  ['Développement', 'Nous construisons des initiatives utiles et inclusives.', 'Sprout']
];
export const activities = [
  { title:'Moments de partage', tag:'Solidarité', image:team, text:'Des actions de proximité préparées avec attention par nos bénévoles.' },
  { title:'Accueil & convivialité', tag:'Culture', image:service, text:'Créer des temps chaleureux qui rapprochent les personnes.' },
  { title:'Mobilisation collective', tag:'Éducation', image:teamwork, text:'Une jeunesse qui s’organise, apprend et agit ensemble.' },
  { title:'Écoute & accompagnement', tag:'Solidarité', image:dialogue, text:'Être présent, échanger et valoriser chaque parcours.' },
  { title:'Préparation des actions', tag:'Solidarité', image:drinks, text:'L’énergie des coulisses au service de moments utiles.' },
  { title:'Partage solidaire', tag:'Culture', image:serving, text:'Des gestes simples pour faire vivre la solidarité.' }
];
export const projects = [
  { title:'Actions de proximité', date:'À compléter', image:cake, text:'Un espace prêt à accueillir la description de ce projet et de ses objectifs.' },
  { title:'Jeunesse & engagement', date:'À compléter', image:volunteer, text:'Un espace prêt à accueillir la description de ce projet et de ses objectifs.' },
  { title:'Initiatives solidaires', date:'À compléter', image:drinks, text:'Un espace prêt à accueillir la description de ce projet et de ses objectifs.' }
];
export const volunteerNeeds = ['Coiffure', 'Photographie', 'Design', 'Santé', 'Cuisine', 'Transport', 'Organisation', 'Communication', 'Formation'];
export const meeting = { title:'Réunion des membres', date:'Date à confirmer', time:'Horaire à confirmer', place:'Lieu à confirmer', purpose:'Bilan de la dernière activité et préparation de la prochaine action.', agenda:['Bilan de l’activité précédente','Ce qui s’est bien passé','Difficultés rencontrées','Propositions d’amélioration','Préparation de la prochaine activité'] };
export const gallery = [
  { image:team, category:'Solidarité', alt:'Bénévoles de l’association' }, { image:service, category:'Solidarité', alt:'Moment de partage' },
  { image:drinks, category:'Éducation', alt:'Préparation en équipe' }, { image:dialogue, category:'Solidarité', alt:'Échange avec une bénéficiaire' },
  { image:teamwork, category:'Éducation', alt:'Bénévoles réunis' }, { image:serving, category:'Culture', alt:'Service lors d’une activité' },
  { image:volunteer, category:'Solidarité', alt:'Bénévole de l’association' }, { image:invitation, category:'Vie associative', alt:'Affiche de réunion' }
];
