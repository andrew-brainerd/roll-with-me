import React from 'react';
import { object, string, number, func } from 'prop-types';
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

const Scoreboard = ({ player1, currentScores, selectedSlot, selectedScore, selectedAvailableScore, setSelected }) => {
  const {
    [ONES]: ones,
    [TWOS]: twos,
    [THREES]: threes,
    [FOURS]: fours,
    [FIVES]: fives,
    [SIXES]: sixes,
    [KIND3]: kind3,
    [KIND4]: kind4,
    [FULL_HOUSE]: fullHouse,
    [SM_STRAIGHT]: smStraight,
    [LG_STRAIGHT]: lgStraight,
    [KIND5]: kind5,
    [CHANCE]: chance
  } = player1;

  const {
    [ONES]: availableOnes,
    [TWOS]: availableTwos,
    [THREES]: availableThrees,
    [FOURS]: availableFours,
    [FIVES]: availableFives,
    [SIXES]: availableSixes,
    [KIND3]: availableKind3,
    [KIND4]: availableKind4,
    [FULL_HOUSE]: availableFullHouse,
    [SM_STRAIGHT]: availableSmStraight,
    [LG_STRAIGHT]: availableLgStraight,
    [KIND5]: availableKind5,
    [CHANCE]: availableChance
  } = currentScores;

  console.log({ currentScores, selectedSlot, selectedScore, selectedAvailableScore });

  const hasCurrentScores = Object.values(currentScores).filter(score => score !== 0).length > 0;

  const numberScores = [
    {
      slot: ONES,
      label: 'Ones',
      score: ones,
      availableScore: availableOnes
    },
    {
      slot: TWOS,
      label: 'Twos',
      score: twos,
      availableScore: availableTwos
    },
    {
      slot: THREES,
      label: 'Threes',
      score: threes,
      availableScore: availableThrees
    },
    {
      slot: FOURS,
      label: 'Fours',
      score: fours,
      availableScore: availableFours
    },
    {
      slot: FIVES,
      label: 'Fives',
      score: fives,
      availableScore: availableFives
    },
    {
      slot: SIXES,
      label: 'Sixes',
      score: sixes,
      availableScore: availableSixes
    }
  ];

  const specialScores = [
    {
      slot: KIND3,
      label: '3 of a Kind',
      score: kind3,
      availableScore: availableKind3
    },
    {
      slot: KIND4,
      label: '4 of a Kind',
      score: kind4,
      availableScore: availableKind4
    },
    {
      slot: FULL_HOUSE,
      label: 'Full House',
      score: fullHouse,
      availableScore: availableFullHouse
    },
    {
      slot: SM_STRAIGHT,
      label: 'SM Straight',
      score: smStraight,
      availableScore: availableSmStraight
    },
    {
      slot: LG_STRAIGHT,
      label: 'LG Straight',
      score: lgStraight,
      availableScore: availableLgStraight
    },
    {
      slot: KIND5,
      label: '5 of a Kind',
      score: kind5,
      availableScore: availableKind5
    },
    {
      slot: CHANCE,
      label: 'Chance',
      score: chance,
      availableScore: availableChance
    }
  ];

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
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  player1: object,
  currentScores: object,
  selectedSlot: string,
  selectedScore: number,
  selectedAvailableScore: number,
  setSelected: func.isRequired
};

export default Scoreboard;
