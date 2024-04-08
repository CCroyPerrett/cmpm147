// project.js - A murder mystery Story Generator
// Author: Chase Croy-Perrett
// Date:4/7/2024

const fillers = {
  location: ["the town's spooky mansion", "the local park", "the highest skyskraper in the city", "your own home", "the school", "a cabin in the woods", "a train", "the victim's birthday party", "a cosplay convention", "a secret government complex"],
  protagonist: ["detective", "comissioner", "lieutenant", "officer", "investigator", "curious child"],
  victim: ["Sir Nickelbottom the 2nd", "The mayor, Can Townings", "Your best friend", "A visiting billionaire, Melon Tusk", "The cafeteria manager, Yume Nikki", "The chief of police, Yuki Tsurugi ", "The local college's dean, Sara Stevens", "The most disliked teacher John Lemmings", "Knight Peko Pekoyama"],
  body_state: ["decapitated", "scorched", "strangled", "drowned", "electrocuted", "hung", "on a crucifix", "without a single wound", "with blood coming up the mouth", "buried", "exploded", "crushed", "shot", "pierced through the heart", "bludgeoned", "bitten", "claiming to still be alive, which I personally do not believe"],
  item: ["a bloody axe", "a gun", 'a pipebomb', "a love confession letter", "your wallet", "a heavy pipe", "100 thousand dollars", "a  sword", "a red glove", "a sack of toys", "a pool noodle", "the death note", "a broken computer", "rope", "librarian card", "an adorable puppy", "my lunch", "a fake police bade", "a pair of bloody sissors", "a metal bat", "a cease and disist"],
  suspect: ["Asahina", "Togami", "Hagakure", "Naegi", "Kigiri", "Hinata", "Kuzuryu", "Souda", "Owari", "Saionji", "Saihara", "Harumaki", "Yumeno", "Keebo", "Teruya", "Kinjo", "Mekaru", "Gill", "Nichole", "Tabitha", "Eliza", "Moose", "Walter", "Jaiden", "Zoey", "Edgeworth", "Mia", "Ibuki", "Joe", "Alex", "Steve", "William", "Mike"],
  profession: ["librarian", "fireman", "serial killer", "police officer", "bulter", "priest", "lifeguard", "baseball star", "chef", "maid", "astronaught", "clown", "gambler", "fashion icon", "lucky student", "piano player", "nurse", "animal tamer", "gamer", "anthropologist", "entomologist", "detective", "my mom", "teacher", "merchant", "lawyer", "repairperson", "mailperson", "senator", "rock star", "theif", "CEO"],
  trait: ["shy", "confident", "kind", "manical", "studious", "psycho", "egotistical", "eccentric", "lazy", "mysterious", "cruel", "adventerous", "creative", "optimistic", "depressed", "confident", "flirty", "intelligant", "obnoxious", "sleepy", "scared", "creepy", "energetic", "silly", "mean", "boisterous"],
  emotion: ["dismayed", "distressed", "confused", "overjoyed", "saddened", "frothing"],
  reward: ["the key to the city", "my wallet", "my hand in marrage", "an ice cream", "a really cool hat", "19 dollar fortnite card", "a new car", "the big cheese", "a real life pikachu", "a nintendo switch", "scp-999"]
  
  
  
};

/*const template = `$adventurer, heed my $message!

I have just come from $pre$post where the $people folk are in desperate need. Their town has been overrun by $baddies. You must venture forth at once, taking my $item, and help them.

It is told that the one who can rescue them will be awarded with $num $looty $loots. Surely this must tempt one such as yourself!
`;*/

const template = `Thank goodness you are here $protagonist! I am $emotion to announce... a body has been discovered!\t

There has been a murder! $victim has been killed at $location. Their body was $body_state, and we found $item at the location.\n\n

Luckily, we have captured 3 suspects at the scene of the crime! $suspect, a $trait $profession. $suspect, a $trait $profession. $suspect, a $trait $profession.\n\n

If you solve the murder, we will give you $reward. Please! You are our only hope!
`;


// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;

function replacer(match, name) {
  let options = fillers[name];
  if (options) {
    return options[Math.floor(Math.random() * options.length)];
  } else {
    return `<UNKNOWN:${name}>`;
  }
}

function generate() {
  let story = template;
  while (story.match(slotPattern)) {
    story = story.replace(slotPattern, replacer);
  }

  /* global box */
  $("#box").text(story);
}

/* global clicker */
$("#clicker").click(generate);

generate();
