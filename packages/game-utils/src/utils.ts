import {
  ClassicScoreField,
  type Player,
  type Scores,
  type RenderableRow,
  ComputedRow,
  ScoreField,
} from '@repo/game-utils/types';

export const createInitialPlayers = (amountOfPlayers = 5): Player[] => {
  return Array.from({ length: amountOfPlayers }, (_, index) => ({
    id: index,
    name: '',
  }));
};

export const createInitialScores = (): Scores => {
  return Object.keys(ClassicScoreField).reduce((acc, field) => {
    acc[field as ClassicScoreField] = {};
    return acc;
  }, {} as Scores);
};

const upperSectionFields = [
  ClassicScoreField.Ones,
  ClassicScoreField.Twos,
  ClassicScoreField.Threes,
  ClassicScoreField.Fours,
  ClassicScoreField.Fives,
  ClassicScoreField.Sixes,
];

const lowerSectionFields = Object.values(ClassicScoreField).filter(
  (field) => !upperSectionFields.includes(field as ClassicScoreField)
);

const sum = (scores: Scores, playerId: number, fields: ScoreField[]) =>
  fields.reduce((total, field) => {
    const score = scores[field]?.[playerId] ?? 0;
    return total + (typeof score === 'number' ? score : 0);
  }, 0);

export const isComputedRow = (row: RenderableRow): row is ComputedRow =>
  'compute' in row;

export const getRenderableRows = (): RenderableRow[] => {
  return [
    ...upperSectionFields.map((field) => ({
      field,
    })),
    {
      field: 'Bonus',
      compute: (scores: Scores, playerId: number) => {
        const upperSum = sum(scores, playerId, upperSectionFields);
        return upperSum >= 63 ? 50 : 0;
      },
    },
    {
      field: 'Sum',
      compute: (scores: Scores, playerId: number) =>
        sum(scores, playerId, upperSectionFields),
    },
    ...lowerSectionFields.map((field) => ({
      field,
    })),
    {
      field: 'Total',
      compute: (scores: Scores, playerId: number) => {
        const upperSum = sum(scores, playerId, upperSectionFields);
        const lowerSum = sum(scores, playerId, lowerSectionFields);
        const bonus = upperSum >= 63 ? 50 : 0;
        return upperSum + lowerSum + bonus;
      },
    },
  ];
};
