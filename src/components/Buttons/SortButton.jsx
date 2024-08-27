import React, { useState } from 'react';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import { Box, FormControl, Select, MenuItem } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Sort = () => {
  const [sort, setSort] = useState('like');
  const handleChange = (e, sorted) => {
    setSort(e.target.value);
  };

  return (
    <Box className="flex flex-col">
      <FormControl>
        <Select
          value={sort}
          onChange={handleChange}
          IconComponent={open ? ExpandLess : ExpandMore}
          sx={{
            borderRadius: 999,
            height: 40,
            width: 130,
            border: `1px solid ${PICKLE_COLOR.middleGray}`,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '& .MuiSelect-select': {
              display: 'flex',
              fontWeight: 500,
              justifyContent: 'center',
            },
            '& .MuiSelect-icon': {
              marginRight: '0.5rem',
            },
          }}
        >
          <MenuItem value="like">Like</MenuItem>
          <MenuItem value="view">View</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default Sort;
