import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { Stack, Button, Box, Collapse, Avatar } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ParticipantNav from './ParticipantNav';

import EditIcon from '@mui/icons-material/Edit';

const ParticipantSelect = ({ participants }) => {
  const [isOpen, setIsOpen] = useState(false);
  const debouncedToggleNav = useCallback(
    debounce(() => {
      setIsOpen((prev) => !prev);
    }, 300),
  );

  return (
    <Stack gap={1} direction="column" height="100%">
      <Button
        variant="outlined"
        className="h-[45px] text-transform-none"
        sx={{
          border: `1px solid ${PICKLE_COLOR.middleGray}`,
          borderRadius: '10px',
          justifyContent: 'space-between',
          color: PICKLE_COLOR.middleGray,
          '& .MuiSvgIcon-root': {
            color: PICKLE_COLOR.pointOrange,
            fontSize: '25px',
          },
          fontWeight: '400',
        }}
        endIcon={<EditIcon />}
        onClick={debouncedToggleNav}
      >
        Add participant(s)
      </Button>
      <Collapse in={isOpen} timeout="auto">
        {isOpen && <ParticipantNav subjects={participants} />}
      </Collapse>
      <Box
        className="relative h-full"
        sx={{
          border: `1px solid ${PICKLE_COLOR.middleGray}`,
          borderRadius: '10px',
          overflow: 'hidden',
          padding: 1,
          gap: 2,
        }}
      >
        {participants.map((participant) => (
          <Avatar key={participant.participantId} src={participant.participantImage} />
        ))}
      </Box>
    </Stack>
  );
};

export default ParticipantSelect;
