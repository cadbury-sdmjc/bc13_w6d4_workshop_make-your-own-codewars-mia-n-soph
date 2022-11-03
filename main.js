/* 

👨‍🏫💥🥊👧 Playground Fight 👶💥🥊👩‍🏫

Inspired by a conversation I once overheard between a couple on a date.

'Oh, you teach Year 3? How many Year 3s do you reckon you could take?'

1 teacher can win a fight against up to 8 year three kids.

Each function will take in teachers, kids, a lunchbox array (which may or may not contain pies) and the optional ball.

👩🏾‍🏫Teachers - Will always be a whole number (Integer).
🧒🏼Kids - Will always be a whole number (Integer)
🍱Lunchbox - Will always be an array, which may or may not contain pies. e.g ['Crisps', 'Carrots', 'Hummus', 'Pie']
         For every 'Pie' present in the Lunchbox; Kids will receive a boost.
         1 whole pie = πBoost
         If your lunchbox contains 1 pie; and you have 4 kids, each kid will recieve 1/4 of the πBoost value.
⚽️Ball - If a ball is added, teachers receive a boost, as some kids will be distracted by ball.
         This means teachers can take on 50% more kids than prior.
         The ball may or may not be present, this is indicated by a true boolean value.

Your function will need to return the winners (either kids or teachers).

If there is no winner, return 'FIGHT FIGHT FIGHT'

If either the kids or teachers input is equal to 0, return "Nominate fighter"

If the ball is entered as any non-boolean value, return "You've Ballsed Up!"

*/

//👉 Write the function your CodeWarriors will start with below here:

export function fightKid(teachers, kids, lunchbox, ball) {
        ball = ball || false;
        if (teachers <= 0 || kids <= 0) {
      return "Nominate fighter";
    }
    let pieCount = 0;
    for ( let i=0; i < lunchbox.length; i++){
       if (lunchbox[i] === "Pie" ) {
        pieCount++;
       }
    }
      let pieBoost = (pieCount * Math.PI) / kids
       kids *= (pieBoost+1);
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