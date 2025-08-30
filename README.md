# Yahtzeer Mono repo

# Database structure

```mermaid
classDiagram
    class User {
        +int id
        +string username
    }

    class Game {
        +int id
        +string slug
        +GameState status
        +GameMode mode
    }

    class Turn {
        +int id
        +int rolls
        +json dice
        +int gameId
        +int playerColumnId
        +int? userId
    }

    class ScoreColumn {
        +int id
        +int playerId
        +int gameId
    }

    class ScoreField {
        +int id
        +string type
        +int? score
        +int columnId
    }

    %% Relationships
    User "1" --> "*" ScoreColumn : has
    User "1" --> "*" Turn : has
    Game "1" --> "*" Turn : has
    Game "1" --> "*" ScoreColumn : has
    ScoreColumn "1" --> "*" ScoreField : has
    ScoreColumn "1" --> "*" Turn : has