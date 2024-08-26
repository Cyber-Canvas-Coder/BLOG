import { styled, Box, Typography } from "@mui/material";
const Image = styled(Box)`
  position: relative;
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Black overlay with 50% opacity */
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG</Heading>
    </Image>
  );
};

export default Banner;
