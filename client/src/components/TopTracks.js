import React from 'react';
import PropTypes from 'prop-types';
import { formatDuration } from '../utils';
import styled from 'styled-components/macro';
import { theme, mixins, Section } from '../styles';

const Container = styled(Section)`
  width: 50%;
  margin-bottom: ${theme.spacing.xl};
`;
const Title = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: ${theme.spacing.lg};
`;
const TracksContainer = styled.div``;
const Track = styled.div`
  ${mixins.flexBetween};
  margin-bottom: ${theme.spacing.md};
`;
const TrackLeft = styled.span`
  display: flex;
`;
const TrackRight = styled.span``;
const TrackArtwork = styled.span`
  width: 50px;
  min-width: 50px;
  margin-right: ${theme.spacing.base};
`;
const TrackImage = styled.img``;
const TrackMeta = styled.span`
  max-width: 80%;
`;
const TrackName = styled.a`
  margin-bottom: 5px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${theme.colors.white};
  }
`;
const ArtistAlbum = styled.div`
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.sm};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const TrackDuration = styled.span`
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.sm};
`;

const TopTracks = ({ topTracks }) => (
  <Container>
    <Title>Top Tracks</Title>
    <TracksContainer>
      {topTracks.items.map((track, i) => (
        <Track key={i}>
          <TrackLeft>
            <TrackArtwork>
              <TrackImage src={track.album.images[2].url} alt="" />
            </TrackArtwork>
            <TrackMeta>
              <TrackName href={track.external_urls.spotify} target="_blank">
                {track.name}
              </TrackName>
              <ArtistAlbum>
                {track.artists[0].name}
                &nbsp;&middot;&nbsp;
                {track.album.name}
              </ArtistAlbum>
            </TrackMeta>
          </TrackLeft>
          <TrackRight>
            <TrackDuration>{formatDuration(track.duration_ms)}</TrackDuration>
          </TrackRight>
        </Track>
      ))}
    </TracksContainer>
  </Container>
);

TopTracks.propTypes = {
  topTracks: PropTypes.object,
};

export default TopTracks;