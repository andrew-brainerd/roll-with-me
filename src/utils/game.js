const rollDie = () => Math.floor(Math.random() * 6) + 1;

export const rollDice = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const rolls = [];
  for (let i = 0; i < 5; i++) {
    rolls.push(rollDie());
  }

  return rolls;
};
