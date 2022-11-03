/* 

👨‍🏫💥🥊👧 Playground Fight 👶💥🥊👩‍🏫

Inspired by a conversation I once overheard between a couple on a date.

'Oh, you teach Year 3? How many Year 3s do you reckon you could take?'

1 teacher can win a fight against up to 8 year three kids.

Each scenario will take in the number of teachers and the number of kids.

Your function will need to return the winners (either kids or teachers).

If there is no winner, return 'FIGHT FIGHT FIGHT'

If either the kids or teachers input is equal to 0, return "Nominate fighter"

---If a ball is added, teachers can take on 1.5* max students as before.
    //Ball is added randomly through true/false statement
    //User selects the use of a ball
---Add specific teachers/specific students who have + or - strength
---If a leader is nominated, increase student power
---Add sweets > either distracts or increases student power
---supply teachers and kids as an object (playgroundFodder)

*/

//👉 Write the function your CodeWarriors will start with below here:

//export
    function fightKid(teachers, kids, ball) {
        ball = ball || false;
        if (teachers <= 0 || kids <= 0) {
      return "Nominate fighter";
    }
        if (typeof ball !== "boolean") {
            console.log(typeof ball);
        return "You've ballsed up!"
    }
    if (ball === true) {
        teachers *= 1.5;
    }
    if (teachers * 8 == kids) {
      return "FIGHT FIGHT FIGHT";
    }
    if (teachers * 8 > kids) {
      return "teachers";
    } else {
      return "kids";
    }
}