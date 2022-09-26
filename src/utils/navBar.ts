import {
  FaHome,
  FaUserCog,
  FaRegNewspaper,
  FaMusic,
  FaCoins,
  FaLandmark,
  FaSignOutAlt
} from 'react-icons/fa';

const navBar = [
  {
    name: 'Início',
    path: '/painel',
    icon: FaHome
  },
  {
    name: 'Administração',
    path: '/painel/admin',
    icon: FaUserCog
  },
  {
    name: 'Notícias',
    path: '/painel/noticias',
    icon: FaRegNewspaper
  },
  {
    name: 'Rádio',
    path: '/painel/radio',
    icon: FaMusic
  },
  {
    name: 'Compráveis',
    path: '/painel/compraveis',
    icon: FaCoins
  },
  {
    name: 'HabbletXD Home',
    path: '/painel/habbletxd-home',
    icon: FaLandmark
  },
  {
    name: 'Sair',
    path: '/',
    icon: FaSignOutAlt
  }
];

export default navBar;