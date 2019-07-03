Classes:
 - User:
    - Id                -    String
    - Password          -    String (Better Store a Hash and recheck with hash only)
    - Name              -    String
    - Email             -    String
    - Points            -    Int
    - DoneProjects      -    List<Project>
    - CurrentProjects   -    List<UserProject>
    - Friends           -    List<User>

- Project
    - Id                -    String
    - Steps             -    List<Step>
    - Author            -    User
    - NoDone            -    Int

- UserProject
    - Id                -    String
    - Project           -    Project
    - Mentor            -    User  
    - StepsDone         -    Int
    - StepsVerified     -    Int

- Step
    - Id                -    String
    - Title             -    String
    - Text              -    String
    - Photo             -    String