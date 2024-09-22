import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HeadsetIcon from '@mui/icons-material/Headset';
import WatchIcon from '@mui/icons-material/Watch';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import TvIcon from '@mui/icons-material/Tv';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const CategoriesTypes = [
  {
    category: 'Phones',
    value: 'phones',
    image: <PhoneIphoneIcon />,  // MUI Icon for phones
  },
  {
    category: 'Computers',
    value: 'computers',
    image: <LaptopMacIcon />,  // MUI Icon for computers
  },
  {
    category: 'Headsets',
    value: 'headsets',
    image: <HeadsetIcon />,  // MUI Icon for headsets
  },
  {
    category: 'Watches',
    value: 'watches',
    image: <WatchIcon />,  // MUI Icon for watches
  },
  {
    category: 'Tablets',
    value: 'tablets',
    image: <TabletMacIcon />,  // MUI Icon for tablets
  },
  {
    category: 'TVs',
    value: 'tvs',
    image: <TvIcon />,  // MUI Icon for TVs
  },
  {
    category: 'Cameras',
    value: 'cameras',
    image: <CameraAltIcon />,  // MUI Icon for cameras
  },
  {
    category: 'Gaming',
    value: 'gaming',
    image: <SportsEsportsIcon />,  // MUI Icon for gaming
  },
];

export default CategoriesTypes;
