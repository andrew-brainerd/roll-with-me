import React, { useEffect } from 'react';
import { bool, arrayOf, shape, string, func } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { SOLO_GAME } from '../../../constants/game';
import { GAME_ROUTE } from '../../../constants/routes';
import Loading from '../../common/Loading/Loading';
import styles from './PlayerGames.module.scss';
import Button from '../../common/Button/Button';

const PlayerGames = ({ isLoadingUser, isLoadingGames, games, loadPlayerGames, navTo }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    isAuthenticated && !isLoading && !isLoadingUser && loadPlayerGames();
  }, [isAuthenticated, isLoading, isLoadingUser, loadPlayerGames]);

  return (
    <div className={styles.playerGames}>
      {isLoadingGames ? <Loading isActive /> : (games || []).map(game => (
        <div
          className={[
            styles.game,
            game.isGameOver ? styles.gameOver : ''
          ].join(' ')} key={game._id}
        >
          {console.log('Game', game)}
          {game.type === SOLO_GAME ? 'Solo' : 'VS'}
          <Button
            text='Play'
            onClick={() => navTo(GAME_ROUTE.replace(':gameId', game._id))}
          />
        </div>
      ))}
    </div>
  );
};

PlayerGames.propTypes = {
  isLoadingUser: bool,
  isLoadingGames: bool,
  games: arrayOf(shape({
    _id: string,
    createdBy: string,
    type: string,
    currentPlayer: string,
    players: shape({
      player1: string,
      player2: string
    })
  })),
  loadPlayerGames: func.isRequired,
  navTo: func.isRequired
};

export default PlayerGames;
