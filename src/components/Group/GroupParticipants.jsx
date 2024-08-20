import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const GroupParticipants = (props) => {
  const rows = props.groupParticipants.map((participant) => ({
    id: participant.participantId,
    participantId: participant.participantId,
    participantName: participant.participantName,
    participantEmail: participant.participantEmail,
    participantAuthority: participant.participantAuthority,
  }));
  const columns = [
    { field: 'participantId', headerName: 'ID', width: 90 },
    { field: 'participantName', headerName: 'Name', width: 150, editable: true },
    { field: 'participantEmail', headerName: 'Email', width: 200, editable: true },
    { field: 'participantAuthority', headerName: 'Authority', width: 150, editable: true },
  ];
  return (
    <Box sx={{ height: 269, width: 795, borderRadius: 10 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default GroupParticipants;
