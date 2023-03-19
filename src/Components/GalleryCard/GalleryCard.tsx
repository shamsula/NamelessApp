import React from "react";
import styled from "styled-components/macro";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { ImageData } from "../../Views/Posts/Posts";

type Props = {
  // refactor legacyportfolio
  data: ImageData; // change from any to the correct type
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
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
  margin-bottom: 25px;
  letter-spacing: 1.5px;
  font-size: 22px;
  line-height: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colours.orangePeel};
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colours.prussianBlue};
  font-family: ${({ theme }) => theme.fontFamilies.body};

  letter-spacing: 2px;
`;

const StyledButton = styled(Button)`
  span.MuiButton-label {
    color: ${({ theme }) => theme.colours.blueSapphire};
    font-weight: 800;
    text-transform: capitalize;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;
