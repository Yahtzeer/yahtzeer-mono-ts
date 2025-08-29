# Yahtzeer Mono repo

# Database structure

```mermaid
erDiagram
    USER ||--o{ SCORECOLUMN : has
    USER ||--o{ TURN : has
    GAME ||--o{ TURN : has
    GAME ||--o{ SCORECOLUMN : has
    SCORECOLUMN ||--o{ SCOREFIELD : has
    SCORECOLUMN ||--o{ TURN : has

    USER {
        int id PK
        string username
    }

    GAME {
        int id PK
        string slug
    }

    TURN {
        int id PK
        int gameId FK
        int playerColumnId FK
        int? userId FK
    }

    SCORECOLUMN {
        int id PK
        int playerId FK
        int gameId FK
    }

    SCOREFIELD {
        int id PK
        int columnId FK
        string type
    }