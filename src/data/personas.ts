import type { Ethnicity, Gender } from '../state/survivor';

// Images (existing files)
import Aaliyah from '../assets/personas/Aaliyah Brooks.png';
import Carmen from '../assets/personas/Carmen Alvarez.png';
import Daniel from '../assets/personas/Daniel Park.png';
import Darius from '../assets/personas/Darius Cole.png';
import Diego from '../assets/personas/Diego Santos.png';
import Ethan from '../assets/personas/Ethan Carter.png';
import Hana from '../assets/personas/Hana Ito.png';
import Isabella from '../assets/personas/Isabella Rivera.png';
import Jack from '../assets/personas/Jack Tanner.png';
import Jessica from '../assets/personas/Jessica Rhodes.png';
import Kenji from '../assets/personas/Kenji Mori.png';
import Luis from '../assets/personas/Luis Navarro.png';
import Marcus from '../assets/personas/Marcus Hill.png';
import Mei from '../assets/personas/Mei Lin.png';
import Naomi from '../assets/personas/Naomi Greene.png';
import Sarah from '../assets/personas/Sarah Mitchell.png';

export type PersonaMeta = {
  slug: string;
  displayName: string;
  gender: Gender;
  /**
   * Provisional ethnicity preferences (edit later with ground truth).
   * Used only as a soft preference for assignment; not authoritative.
   */
  suggestedEthnicities: Ethnicity[];
  image: string; // Vite-processed URL
};

// NOTE: All suggestedEthnicities are placeholders. Replace with your canonical data.
export const PERSONAS: PersonaMeta[] = [
  { slug: 'aaliyah-brooks',  displayName: 'Aaliyah Brooks',  gender: 'female', suggestedEthnicities: ['black'],               image: Aaliyah },
  { slug: 'carmen-alvarez',  displayName: 'Carmen Alvarez',  gender: 'female', suggestedEthnicities: ['latino'],              image: Carmen },
  { slug: 'hana-ito',        displayName: 'Hana Ito',        gender: 'female', suggestedEthnicities: ['asian'],               image: Hana },
  { slug: 'isabella-rivera', displayName: 'Isabella Rivera', gender: 'female', suggestedEthnicities: ['latino'],              image: Isabella },
  { slug: 'jessica-rhodes',  displayName: 'Jessica Rhodes',  gender: 'female', suggestedEthnicities: ['white'],               image: Jessica },
  { slug: 'mei-lin',         displayName: 'Mei Lin',         gender: 'female', suggestedEthnicities: ['asian'],               image: Mei },
  { slug: 'naomi-greene',    displayName: 'Naomi Greene',    gender: 'female', suggestedEthnicities: ['black','multiracial'], image: Naomi },
  { slug: 'sarah-mitchell',  displayName: 'Sarah Mitchell',  gender: 'female', suggestedEthnicities: ['white'],               image: Sarah },
  { slug: 'daniel-park',     displayName: 'Daniel Park',     gender: 'male',   suggestedEthnicities: ['asian'],               image: Daniel },
  { slug: 'darius-cole',     displayName: 'Darius Cole',     gender: 'male',   suggestedEthnicities: ['black'],               image: Darius },
  { slug: 'diego-santos',    displayName: 'Diego Santos',    gender: 'male',   suggestedEthnicities: ['latino'],              image: Diego },
  { slug: 'ethan-carter',    displayName: 'Ethan Carter',    gender: 'male',   suggestedEthnicities: ['white'],               image: Ethan },
  { slug: 'jack-tanner',     displayName: 'Jack Tanner',     gender: 'male',   suggestedEthnicities: ['white'],               image: Jack },
  { slug: 'kenji-mori',      displayName: 'Kenji Mori',      gender: 'male',   suggestedEthnicities: ['asian'],               image: Kenji },
  { slug: 'luis-navarro',    displayName: 'Luis Navarro',    gender: 'male',   suggestedEthnicities: ['latino'],              image: Luis },
  { slug: 'marcus-hill',     displayName: 'Marcus Hill',     gender: 'male',   suggestedEthnicities: ['black'],               image: Marcus },
];
