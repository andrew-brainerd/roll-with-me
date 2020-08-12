import React from 'react';
import { object, string, func } from 'prop-types';
import styles from './Scoreboard.module.scss';
import {
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXES,
  KIND3,
  KIND4,
  FULL_HOUSE,
  SM_STRAIGHT,
  LG_STRAIGHT,
  KIND5,
  CHANCE
} from '../../../constants/game';
import { getNumberTotal, getTotal } from '../../../utils/game';

const Scoreboard = ({ playerScores, currentScores, selectedSlot, setSelected }) => {
  const hasCurrentScores = Object.values(currentScores).filter(score => score !== 0).length > 0;

  const numberScores = [
    {
      slot: ONES,
      label: 'Ones',
      score: playerScores[ONES],
      availableScore: currentScores[ONES] || 0
    },
    {
      slot: TWOS,
      label: 'Twos',
      score: playerScores[TWOS],
      availableScore: currentScores[TWOS] || 0
    },
    {
      slot: THREES,
      label: 'Threes',
      score: playerScores[THREES],
      availableScore: currentScores[THREES] || 0
    },
    {
      slot: FOURS,
      label: 'Fours',
      score: playerScores[FOURS],
      availableScore: currentScores[FOURS] || 0
    },
    {
      slot: FIVES,
      label: 'Fives',
      score: playerScores[FIVES],
      availableScore: currentScores[FIVES] || 0
    },
    {
      slot: SIXES,
      label: 'Sixes',
      score: playerScores[SIXES],
      availableScore: currentScores[SIXES] || 0
    }
  ];

  const specialScores = [
    {
      slot: KIND3,
      label: '3 of a Kind',
      score: playerScores[KIND3],
      availableScore: currentScores[KIND3]
    },
    {
      slot: KIND4,
      label: '4 of a Kind',
      score: playerScores[KIND4],
      availableScore: currentScores[KIND4]
    },
    {
      slot: FULL_HOUSE,
      label: 'Full House',
      score: playerScores[FULL_HOUSE],
      availableScore: currentScores[FULL_HOUSE]
    },
    {
      slot: SM_STRAIGHT,
      label: 'SM Straight',
      score: playerScores[SM_STRAIGHT],
      availableScore: currentScores[SM_STRAIGHT]
    },
    {
      slot: LG_STRAIGHT,
      label: 'LG Straight',
      score: playerScores[LG_STRAIGHT],
      availableScore: currentScores[LG_STRAIGHT]
    },
    {
      slot: KIND5,
      label: '5 of a Kind',
      score: playerScores[KIND5],
      availableScore: currentScores[KIND5]
    },
    {
      slot: CHANCE,
      label: 'Chance',
      score: playerScores[CHANCE],
      availableScore: currentScores[CHANCE]
    }
  ];

  const numberTotal = getNumberTotal(playerScores);
  const total = getTotal(playerScores);

  return (
    <div className={styles.scoreboard}>
      <div className={styles.section}>
        {numberScores.map(({ slot, label, score, availableScore }) => (
          <div
            key={label}
            className={[
              styles.scoreLine,
              selectedSlot === slot && score < 0 ? styles.selected : ''
            ].join(' ')}
            onClick={() => hasCurrentScores && setSelected(slot, score, availableScore)}
          >
            <div className={styles.scoreLabel}>{label}</div>
            <div className={styles.scoreValue}>{score >= 0 ? score : ''}</div>
            <div className={styles.scoreAvailable}>{availableScore >= 0 ? availableScore : ''}</div>
          </div>
        ))}
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Bonus</div>
          <div className={styles.scoreValue} style={{ width: '30%' }}>{numberTotal >= 63 ? 35 : ''}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Num. Total</div>
          <div className={styles.scoreValue} style={{ width: '30%' }}>{numberTotal > 0 ? numberTotal : ''}</div>
        </div>
      </div>
      <div className={styles.section}>
        {specialScores.map(({ slot, label, score, availableScore }) => (
          <div
            key={label}
            className={[
              styles.scoreLine,
              selectedSlot === slot && score < 0 ? styles.selected : ''
            ].join(' ')}
            onClick={() => hasCurrentScores && setSelected(slot, score, availableScore)}
          >
            <div className={styles.scoreLabel}>{label}</div>
            <div className={styles.scoreValue}>{score >= 0 ? score : ''}</div>
            <div className={styles.scoreAvailable}>{availableScore >= 0 ? availableScore : ''}</div>
          </div>
        ))}
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Total</div>
          <div className={styles.scoreValue} style={{ width: '30%' }}>{total > 0 ? total : ''}</div>
        </div>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  playerScores: object,
  currentScores: object,
  selectedSlot: string,
  setSelected: func.isRequired
};

export default Scoreboard;
