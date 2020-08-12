import { uniq } from 'ramda';
import { ONES, TWOS, THREES, FOURS, FIVES, SIXES, KIND3, KIND4, KIND5, FULL_HOUSE, SM_STRAIGHT, LG_STRAIGHT, CHANCE } from '../constants/game';

const rollDie = () => Math.floor(Math.random() * 6) + 1;

export const rollDice = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const rolls = [];
  for (let i = 0; i < 5; i++) {
    rolls.push(rollDie());
  }

  return rolls;
};

const countOccurrences = (roll, num) => {
  let count = 0;
  for (const die in roll) {
    roll[die] === num && count++;
  }

  return count;
};

const calculateNumScore = (roll, num) => {
  let score = 0;

  for (const die in roll) {
    if (roll[die] === num) {
      score += num;
    }
  }

  return score;
};

const addAllDice = roll => {
  let score = 0;
  for (const die in roll) {
    score += roll[die];
  }

  return score;
};

const calculateKindScore = (roll, kindNum) => {
  const counts = uniq(roll).filter(die => countOccurrences(roll, die) >= kindNum);

  if (kindNum < 5) {
    return counts[0] ? addAllDice(roll) : 0;
  }

  return counts[0] ? 50 : 0;
};

const calculateFullHouseScore = roll => {
  const uniqueRoll = uniq(roll);
  if (uniqueRoll.length === 2) {
    const firstOcc = countOccurrences(roll, uniqueRoll[0]);
    const secondOcc = countOccurrences(roll, uniqueRoll[1]);

    return firstOcc === 3 || secondOcc === 3 ? 25 : 0;
  }

  return 0;
};

const calculateSmallStraightScore = roll => {
  const sortedRoll = uniq(roll).sort();
  const smStraightRolls = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6]
  ];

  const straightRoll = smStraightRolls.find(sr => {
    for (const r in sr) {
      if (!sortedRoll.includes(parseInt(sr[r]))) {
        return false;
      }
    }
    return true;
  });

  return straightRoll ? 30 : 0;
};

export const calculateLargeStraightScore = roll => {
  const sortedRollString = uniq(roll).sort().join('');
  const largeStraightRolls = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6]
  ];

  for (const lsr in largeStraightRolls) {
    if (sortedRollString === largeStraightRolls[lsr].join('')) {
      return 40;
    }
  }

  return 0;
};

export const calculateScores = roll => ({
  ones: calculateNumScore(roll, 1),
  twos: calculateNumScore(roll, 2),
  threes: calculateNumScore(roll, 3),
  fours: calculateNumScore(roll, 4),
  fives: calculateNumScore(roll, 5),
  sixes: calculateNumScore(roll, 6),
  kind3: calculateKindScore(roll, 3),
  kind4: calculateKindScore(roll, 4),
  fullHouse: calculateFullHouseScore(roll),
  smStraight: calculateSmallStraightScore(roll, 4, 30),
  lgStraight: calculateLargeStraightScore(roll, 5, 40),
  kind5: calculateKindScore(roll, 5),
  chance: addAllDice(roll)
});

export const getNumValue = num => num < 0 ? 0 : num;

export const getNumberTotal = (playerScores = {}) =>
  getNumValue(playerScores[ONES]) +
  getNumValue(playerScores[TWOS]) +
  getNumValue(playerScores[THREES]) +
  getNumValue(playerScores[FOURS]) +
  getNumValue(playerScores[FIVES]) +
  getNumValue(playerScores[SIXES]);

export const getLeftTotal = (playerScores = {}) => {
  const numberTotal = getNumberTotal(playerScores);
  return numberTotal >= 63 ? numberTotal + 35 : numberTotal;
};

export const getSpecialTotal = (playerScores = {}) =>
  getNumValue(playerScores[KIND3]) +
  getNumValue(playerScores[KIND4]) +
  getNumValue(playerScores[KIND5]) +
  getNumValue(playerScores[FULL_HOUSE]) +
  getNumValue(playerScores[SM_STRAIGHT]) +
  getNumValue(playerScores[LG_STRAIGHT]) +
  getNumValue(playerScores[CHANCE]);

export const getTotal = playerScores => getLeftTotal(playerScores) + getSpecialTotal(playerScores);
