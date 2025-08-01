export type Player = {
  id: number;
  name: string;
};

export enum GameMode {
  Classic = 'Classic',
}

export enum ClassicScoreField {
  Ones = 'Ones',
  Twos = 'Twos',
  Threes = 'Threes',
  Fours = 'Fours',
  Fives = 'Fives',
  Sixes = 'Sixes',
  OnePair = 'OnePair',
  TwoPairs = 'TwoPairs',
  ThreeOfAKind = 'ThreeOfAKind',
  FourOfAKind = 'FourOfAKind',
  SmallStraight = 'SmallStraight',
  LargeStraight = 'LargeStraight',
  FullHouse = 'FullHouse',
  Chance = 'Chance',
  Yahtzee = 'Yahtzee',
}

export type ScoreField = ClassicScoreField;

export type PlayerScore = Record<Player['id'], number | null>;

export type Scores = Record<ScoreField, PlayerScore>;

export type EditableRow = { field: ScoreField };

export type ComputedRow = {
  field: string;
  compute: (scores: Scores, playerId: number) => number | null;
};

export type RenderableRow = EditableRow | ComputedRow;
