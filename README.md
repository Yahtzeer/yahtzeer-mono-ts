# Yahtzeer Mono repo

# Database structure

```mermaid
erDiagram
    User ||--o{ ScoreColumn : has
    User ||--o{ Turn : has
    Game ||--o{ Turn : has
    Game ||--o{ ScoreColumn : has
    ScoreColumn ||--o{ ScoreField : has
    ScoreColumn ||--o{ Turn : has

    User {
        Int id PK
        String username
        String password
        DateTime createdAt
        DateTime updatedAt
    }

    Game {
        Int id PK
        String slug
        GameState status
        GameMode mode
        DateTime createdAt
        DateTime updatedAt
    }

    Turn {
        Int id PK
        Int rolls
        Json dice
        Int gameId FK
        Int playerColumnId FK
        Int userId FK nullable
        DateTime createdAt
        DateTime updatedAt
    }

    ScoreColumn {
        Int id PK
        Int playerId FK
        Int gameId FK
        DateTime createdAt
        DateTime updatedAt
    }

    ScoreField {
        Int id PK
        ScoreFieldType type
        Int score nullable
        Int columnId FK
        DateTime createdAt
        DateTime updatedAt
    }
```
