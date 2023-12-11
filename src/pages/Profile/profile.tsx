import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

export const ProfilePage = () => {
  return (
    <div className="wrapper">
      <IconLabelTabs />
    </div>
  );
};

function IconLabelTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<EventNoteIcon />} label="БРОНИРОВАНИЯ" />
      <Tab icon={<FavoriteIcon />} label="ИЗБРАННЫЕ" />
      <Tab icon={<LogoutIcon />} label="ВЫХОД" />
    </Tabs>
  );
}
