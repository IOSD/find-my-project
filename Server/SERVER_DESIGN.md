Classes:
 - User:
    - Id                -    String
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