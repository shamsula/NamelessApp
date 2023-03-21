import React, { useMemo } from "react";
import styled from "styled-components/macro";
import { styled as mstyled } from "@mui/material/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { ImageData } from "../../Views/Posts/Posts";
import breakpoints from "../Common/breakpoints";
import { format } from "date-fns";
import { useSelector } from "react-redux";

type Props = {
  data: ImageData;
};

export function StoryCard({ data }: Props): JSX.Element {
  const { title, media, description, externalUrl, sys } = data;
  const artist = useSelector((state: any) => state.artGallery.artists);
  const FeaturedArtist = useMemo(
    () =>
      artist
        ? artist.find((item: any) => data.authorId.sys.id === item.sys.id)
        : [],

    [artist, data]
  );
  const firstPublished = format(
    new Date(sys?.firstPublishedAt),
    "MMMM dd, yyyy"
  );
  return (
    <StyledCard>
      <StyledCardContent>
        <Heading>
          {title} <span className="date">{firstPublished}</span>
        </Heading>
      </StyledCardContent>
      <StyledCardMedia component="img" image={media?.url} alt={title} />
      <StyledCardContent>
        <h5 className="author">
          {" "}
          by{" "}
          <i>
            {FeaturedArtist?.fname} {FeaturedArtist?.lname}
          </i>
        </h5>
        <CardDesc>{description}</CardDesc>
      </StyledCardContent>
      <StyledCardActions>
        <StyledLink href={externalUrl}>
          <StyledButton size="small">View on Artstation</StyledButton>
        </StyledLink>
      </StyledCardActions>
    </StyledCard>
  );
}

export default StoryCard;

const StyledCard = mstyled(Card)<{ colour?: string }>`

  position: relative;
  width: 100%;
  min-height: 400px;
  padding: 0 20px;
  background: "hsl(167, 98%, 39%)"; //unfortunately, couldnt get theme colours to work here
  
  @media only screen and (min-width: ${breakpoints.size.lg}px) {
      padding: 0 50px;
    min-height: 800px;
  }
`;

const StyledCardMedia = styled(CardMedia)<{
  component: any;
  image: any;
  alt: any;
}>`
  min-height: 450px;
  border-radius: 5px;

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    min-height: 600px;
    border-radius: 10px;
  }
`;

const StyledCardContent = mstyled(CardContent)`
  padding: 16px 0 5px;
  .author {
    text-align: right;
    margin-left: auto;
    color: hsl(215, 50%, 23%);
    margin-bottom: 10px;
    font-weight: 200;
    i {
      font-weight: 800;
    }
    margin-bottom: 25px;
    margin-right: 5px;
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
  font-family: ${({ theme }) => theme.fontFamilies.body};
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 5px;
  padding: 0;
  display: block;
  display: flex;
  flex-direction: column;

  .date {
    font-size: 14px;
    color: ${({ theme }) => theme.colours.prussianBlue};
  }

  @media only screen and (min-width: ${breakpoints.size.md}px) {
    font-size: 28px;
    line-height: 32px;
  }

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    font-size: 36px;
    line-height: 40px;
    text-align: left;

    align-items: baseline;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 0 10px;
  }
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colours.prussianBlue};
  font-family: ${({ theme }) => theme.fontFamilies.body};
  margin-bottom: 20px;

  @media only screen and (min-width: ${breakpoints.size.md}px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    font-size: 18px;
    line-height: 22px;
  }
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

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    left: 50px;
    &:before {
      left: -50px;
    }
  }
`;

const StyledCardActions = mstyled(CardActions)`
    margin-top: 20px;
 `;
