import React, { useState } from 'react';
import group from 'constants/groupInfo';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const GroupNav = ({ group }) => {
  const [open, setOpen] = useState(false);

  return (
    <ListItem className="flex flex-col gap-2" disablePadding>
      <ListItemButton selected={open} className="w-full" onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        <ListItemText primary={group.name} />
      </ListItemButton>
      <Collapse className="w-full" in={open} timeout="auto">
        {group.project.map((project) => (
          <ListItemButton key={project.id} sx={{ pl: 4 }}>
            <ListItemText primary={project.name} />
          </ListItemButton>
        ))}
      </Collapse>
    </ListItem>
  );
};

export default GroupNav;
