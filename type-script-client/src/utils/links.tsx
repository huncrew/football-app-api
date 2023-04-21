import { ImProfile } from 'react-icons/im';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import { MdGroups } from 'react-icons/md';
import { MdSportsSoccer } from 'react-icons/md';
import { MdOutlineScoreboard } from 'react-icons/md';
import{ MdOutlineSettingsSuggest } from 'react-icons/md';

const links = [
  // { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all teams', path: 'all-teams', icon: <MdGroups /> },
  { id: 3, text: 'my team', path: 'my-team', icon: <MdOutlinePeopleOutline /> },
  
  { id: 4, text: 'upcoming matches', path: 'upcoming-matches', icon: <MdSportsSoccer /> },
  { id: 5, text: 'best bets', path: 'best-bets', icon: <MdOutlineScoreboard /> },
  { id: 6, text: 'profile', path: 'profile', icon: <ImProfile /> },
  { id: 7, text: 'settings', path: 'settings', icon: <MdOutlineSettingsSuggest /> },
];

export default links;
