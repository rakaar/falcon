import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../styles/TrendingCard.css';

const TrendingCard = (props) => {
  const {
    albumArt, songName, artistName, listId, cardId, videoId, onPlayButton
  } = props;
  return (
    <div className="TrendingCard" key={cardId}>
      <div className="TrendingCardImage">
        <img src={albumArt} alt="Album Art"/>
      </div>
      <div className="TrendingSongDetails">
        <div className="TrendingSongName">
          {songName}
        </div>
        <div className="TrendingSongArtistName">
          {artistName}
        </div>
      </div>
      <div className="TrendingCardButtons">
        {/* <div className="TrendingCardButton">
          <FontAwesomeIcon icon={faPlus} color="#4c4c4c"/>
        </div> */}
        <div className="TrendingCardButton"
          onClick={() => onPlayButton(listId, cardId, videoId)}>
          <FontAwesomeIcon
            icon={faPlay}
            color="#4c4c4c"
            id="playButton"/>
        </div>
        {/* <div className="TrendingCardButton">
          <FontAwesomeIcon icon={faEllipsisV} color="#4c4c4c"/>
        </div> */}
      </div>
    </div>
  );
};

export default TrendingCard;