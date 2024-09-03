import React, { useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PICKLE_COLOR } from 'constants/pickleTheme';

const SearchBox = ({ onChange }) => {
  const debouncedOnChange = useMemo(() => debounce(onChange, 300), [onChange]);

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  return (
    <TextField
      onChange={(e) => debouncedOnChange(e.target.value)}
      className="border-middleGray"
      sx={{
        height: 40,
        width: 450,
        fontSize: '42px',
        '& .MuiOutlinedInput-root': {
          border: 'none',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${PICKLE_COLOR.middleGray}`,
          borderRadius: '9999px',
        },
        '& .MuiSvgIcon-root': {
          color: PICKLE_COLOR.pointOrange,
        },
      }}
      placeholder="Please enter your search term."
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
