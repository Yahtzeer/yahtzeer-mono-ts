export type Player = {
  id: number;
  name: string;
};

export const GameMode = {
  Classic: 'Classic',
} as const;

export const ClassicScoreField = {
  Ones: 'Ones',
  Twos: 'Twos',
  Threes: 'Threes',
  Fours: 'Fours',
  Fives: 'Fives',
  Sixes: 'Sixes',
  OnePair: 'OnePair',
  TwoPairs: 'TwoPairs',
  ThreeOfAKind: 'ThreeOfAKind',
  FourOfAKind: 'FourOfAKind',
  SmallStraight: 'SmallStraight',
  LargeStraight: 'LargeStraight',
  FullHouse: 'FullHouse',
  Chance: 'Chance',
  Yahtzee: 'Yahtzee',
} as const;

export type ClassicFields =
  (typeof ClassicScoreField)[keyof typeof ClassicScoreField];

export type ScoreField = ClassicFields;

export type PlayerScore = Record<Player['id'], number | null>;

export type Scores = Record<ScoreField, PlayerScore>;

export type EditableRow = { field: ScoreField };

export type ComputedRow = {
  field: string;
  compute: (scores: Scores, playerId: number) => number | null;
};

export type RenderableRow = EditableRow | ComputedRow;
