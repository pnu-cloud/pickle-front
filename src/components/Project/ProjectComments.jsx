import React, { useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
  Stack,
  Container,
  InputAdornment,
} from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
const ProjectComments = (props) => {
  const commentsData = props.projectComments;
  const [comments, setComments] = useState(commentsData);
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      // Create a new comment object
      const date = new Date();

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;

      const newComment = {
        commentId: comments.length + 1, // Incrementing the id for simplicity
        writerId: 10, // Assuming new user ID, you can change this logic as per your need
        writerName: 'New User', // Change this based on the actual user
        writerProfile: 'https://example.com/default-profile.jpg', // Default profile image
        createTime: formattedDate, // Current time
        comment: commentText,
      };

      // Add new comment to the list
      setComments([...comments, newComment]);
      setCommentText(''); // Clear the input
    }
  };

  return (
    <Container
      sx={{
        width: '95%',
      }}
    >
      <TextField
        label="댓글을 작성해보세요."
        //placeholder="댓글을 작성해보세요."
        multiline
        fullWidth
        rows={4}
        value={commentText}
        onChange={handleCommentChange}
        variant="outlined"
        //등록 버튼
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Stack sx={{ height: '100%' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCommentSubmit}
                  style={{ marginTop: '10px' }}
                  sx={{
                    marginLeft: '10px',
                    bottom: 1,
                    marginBottom: 1,
                    padding: '5px 10px',
                    color: 'white',
                    width: 153,
                    height: 36,

                    boxShadow: '0px 3px 4.5px rgba(0, 0, 0, 0.15)',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: 16,
                    background: PICKLE_COLOR.pointOrange,
                    '&:hover': {
                      backgroundColor: PICKLE_COLOR.subOrange,
                    },
                  }}
                >
                  등록
                </Button>
              </Stack>
            </InputAdornment>
          ),
        }}
        sx={{
          height: 140,

          '& .MuiOutlinedInput-root': {
            '&:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #858585',
              borderRadius: '10px',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${PICKLE_COLOR.pointOrange}`,
              borderRadius: '10px',
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: PICKLE_COLOR.pointOrange,
            },
          },
        }}
      />
      <Box sx={{ marginTop: 2 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 22,
          }}
        >
          댓글 {comments.length}개
        </Typography>
      </Box>
      <List>
        {comments.map((comment, index) => (
          <>
            <ListItem
              key={comment.commentId}
              sx={{ marginTop: 2, marginBottom: 0, padding: 0.5, borderBottom: '1px solid #F0F0F0' }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="writer profile"
                  src={comment.writerProfile}
                  sx={{
                    width: 54,
                    height: 54,
                    background: `1px solid white`,
                    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
                    marginRight: 3,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'flex-start', alignItems: 'flex-end', alignItems: 'center' }}
                  >
                    <Typography
                      sx={{
                        marginRight: 1,
                        fontWeight: 600,
                        fontSize: 15,
                        display: 'flex',
                      }}
                    >
                      {comment.writerName}
                    </Typography>
                    <Typography
                      sx={{
                        marginRight: '8px',

                        width: 200,
                        height: 19,
                        fontWeight: 400,
                        fontSize: 12,
                        color: '#858585',
                        display: 'flex',
                      }}
                    >
                      {comment.createTime}
                    </Typography>
                  </Stack>
                }
                secondary={
                  <Box sx={{ marginTop: 0.5 }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: '22px',
                        color: '#858585',
                        marginRight: 1,
                        marginBottom: 1,
                      }}
                    >
                      {comment.comment}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
};

export default ProjectComments;
