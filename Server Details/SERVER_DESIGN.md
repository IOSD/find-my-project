Database Models Schema Design:
 - User:
    - Name              -    String
    - Email             -    String
    - Password          -    String (Better Store a Hash and recheck with hash only)
    - TechStack         -    List<String>
    - Points            -    Int
    - Projects          -    List<Project>
    - Friends           -    List<User>

- Project
    - Name              -    String
    - TechStack         -    List<String>
    - Authors           -    List<User>
    - Steps             -    Int
    - NumDone           -    Int

- UserProject
    - Project           -    Project
    - Mentors           -    List<User>  
    - StepsDone         -    Int
    - StepsVerified     -    Int
    - Complete          -    Boolean