import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { EmojiEmotions, Favorite, FavoriteBorder, Grade, ThumbDown } from "@mui/icons-material";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Beautiful Stray Cat"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/18536198/pexels-photo-18536198/free-photo-of-animal-bicho-felino-pele.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Took a photo of this lovely cat while doing my morning walk
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              color="secondary"
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography paragraph>Appreciate the small things in life</Typography>
          <Typography>
            Tip: don't approach them too fast, they will runway.
          </Typography>
          <Stack direction="row" gap={1} mt={5} mb={3}>
            <EmojiEmotions color="secondary" />
            <Favorite color="secondary" />
            <Grade color="secondary" />
            <ThumbDown color="secondary" />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Feed;
