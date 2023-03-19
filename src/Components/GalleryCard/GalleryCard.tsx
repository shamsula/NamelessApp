import React from "react";
import styled from "styled-components/macro";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { ImageData } from "../../Views/Posts/Posts";

type Props = {
  data: ImageData;
};
export function GalleryCard({ data }: Props): JSX.Element {
  const { title, media, description, externalUrl } = data;
  return (
    <StyledCard style={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={media?.url} alt={title} />
      <CardContent>
        <Heading>{title}</Heading>
        <CardDesc>{description}</CardDesc>
      </CardContent>
      <CardActions>
        <StyledLink href={externalUrl}>
          <StyledButton size="small">View on Artstation</StyledButton>
        </StyledLink>
      </CardActions>
    </StyledCard>
  );
}

export default GalleryCard;

const StyledCard = styled(Card)<{ colour?: string }>`
  background-color: ${({ theme, colour }) =>
    colour ? theme.colours[colour] : theme.colours.desertSand};
  position: relative;
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
  font-family: ${({ theme }) => theme.fontFamilies.body};
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colours.mountainMeadow};
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colours.prussianBlue};
  font-family: ${({ theme }) => theme.fontFamilies.body};
  letter-spacing: 0.5px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  span.MuiButton-label {
    color: ${({ theme }) => theme.colours.blueSapphire};
    font-weight: 800;
    text-transform: capitalize;
    &:hover {
      color: ${({ theme }) => theme.colours.orangePeel};
    }
  }
`;

const StyledLink = styled.a`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -12px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colours.platinum};
  }
  text-decoration: none;
  position: absolute;
  bottom: 0;
  left: 12px;
  width: 100%;
  padding: 5px 0;
`;
