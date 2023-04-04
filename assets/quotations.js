const quotations = [
    "“So we seem to find, in our selves, unity over time, unity of function, unity in space. Yet " +
    "each of these unities is contingent. In pathology or in thought experiment, the integrity of" +
    "our memories can be compromised, the connectivity of our brains can be split or fragmented, " +
    "and our bodies can be broken apart and rebuilt. What then am I?“",

    "“We have to go. I'm almost happy here. I've lived too long with pain. I won’t know who I am without it.“",

    "“Both convey different types of pain. One is the pain of a person who feels they are beyond redemption. The other is the pain of a man who hopes he is not beyond redemption.“",

    "“Humanity does not ask us to be happy. It merely asks us to be brilliant on its behalf.“",

    "“Be a better friend to yourself“",

    "“If we're not in pain, we're not alive.“",

    "“'O my son Absalom,' Bean said softly, knowing for the first time " +
    "the kind of anguish that could tear such words from a man’s mouth'",

    "“Remember, the enemy's gate is down.“",

    "“I think it's impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves.“",

    "“Human beings are free except when humanity needs them. Maybe humanity needs you. To do something. " +
    "Maybe humanity needs me—to find out what you're good for. We might both do despicable things, " +
    "Ender, but if humankind survives, then we were good tools.“",

    "“But that, that distance — that chronic sense of being an alien among your own kind — it's not entirely a bad thing.“",

    "“Today you... tomorrow me.“",

    "“We all make choices, but in the end, our choices make us.“",

    "“My strength is not in steel and fire, but in my intellect and will.”",

    "”Now that you don't have to be perfect, you can be good.”",

    "“Your heart ain't cold 'cause it burns<br/>" +
    "a desire to leave the mire“",

    "“Who imprisoned me here? Who keeps me here? " +
    "Who can release me? Who's controlling and constraining my life except...me?”",

    "I shall see her again. I know that in my heart. One last time.<br/>" +
    "Until then, I shall continue to send people to her.",

    "“Yet, he thought, if I can die saying 'Life is so beautiful,' then nothing else is important.“",

    "“I know I can<br/>" +
    "be what I want to be<br/>" +
    "if I work hard at it<br/>" +
    "I'll be what I want to be.“",

    "“My body might collapse<br/>" +
    "If I carry one more dream.“",

    "“For you are life, rarer than a quark and unpredictable beyond the dreams of Heisenberg.“",

    "“Our freedom to doubt was born of a struggle against authority in the early days of science. It was " +
    "a very deep and strong struggle. Permit us to question - to doubt, that's all - not to be sure.“",

    "“It measures everything, in short, except that which makes life worthwhile. And it can us everything " +
    "about America, except why we are proud that we are Americans.“",

    "“It never gets easier. You just go faster.“",

    "“A lesson without pain is meaningless, for you cannot gain anything without sacrificing something " +
    "else in return. But once you have overcome it and made it your own, you will gain an irreplaceable " +
    "fullmetal heart.“",

    "“Don't take your eyes off them for a second. And don't ever forget them, " +
    "because I promise that they won't forget you.“",

    "“Someone once told me the definition of hell: the last day you have on earth, the person " +
    "you became meets the person you could have become.“",

    "“We all need mirrors to remind ourselves who we are. I’m no different.“",

    "“You be good. I love you.“",

    "“Do not wait for the Last Judgment. It takes place every day.“",

    "“Champion is not just a noun.“",

    "“Rage, my soldiers. Scream, my soldiers.“",

    "“That's why the people who push themselves into hell see a different hell from the rest of us.“",

    "“Then let me start again, I cried<br/>" +
    "Please let me start again<br/>" +
    "I want a face that's fair this time<br/>" +
    "I want a spirit that is calm“",

    "“Then one day you find<br/>" +
    "ten years have got behind you<br/>" +
    "no one told you when to run<br/>" +
    "you missed the starting gun“",

    "“Time, it took the most of me<br/>" +
    "And left me with no key<br/>" +
    "To unlock the chest of remedy“",

    "“Encumbered forever by desire and ambition<br/>" +
    "There's a hunger still unsatisfied“",

    "“Where were you when I was burned and broken<br/>" +
    "While the days slipped by from my window watching<br/>" +
    "And where were you when I was hurt and I was helpless?“",

    "“Ad astra per aspera“",

    "“Marry someone who makes you laugh because life is hard.“",

    "“Because everything here must still be accomplished. It depends only on him to " +
    "participate in this privileged act of creation.“",

    "\"Lonely? You have yourself. Your infinite selves. " +
    "It's a nonstop party where all the guests are the only person we like.\"",

    "“Structurally, there's no discernible difference. Life and death are " +
    "unquantifiable abstracts. Why should I be concerned?“",

    "“All we ever see of stars are their old photographs.”",

    "“Through my blue fingers, pink grains are falling, haphazard, random, a" +
    " disorganized stream of silicone that seems pregnant with the possibility " +
    "of every conceivable shape... But this is illusion. Things have their shape" +
    " in time, not space alone.“",

    "“Ad majora“",

    "“Why should the race always be to the swift, or the jumble to the quick-witted? " +
    "Should they win merely because of the gifts God gave them? Well, I say cheating " +
    "is the gift man gives himself.“",

    "“Remember, in the burning heart<br/>" +
    "There can never be surrender at all.“",

    "“This is pretty lazy, seeing as you always talk such a big game. Quit laying' down " +
    "on the job.“",

    "“You bear witness to the end of your journey. It is not always a happy thing.",

    "“The only thing all humans are equal in is death.“",

    "“People have so many important things to communicate throughout their lives. They " +
    "have so many things to talk about over a good beer.“",

    "“For the blood is running still<br/>" +
    "From the roots of Yggdrasil“",

    "“When the tears are in your eyes<br/>" +
    "You sing a drunken lullaby<br/>" +
    "And the weight of the world<br/>" +
    "Comes crashing on your spine“",

    "“I want you to feel what I felt. I want you to know why a story-truth is truer sometimes " +
    "than happening truth.“",

    "“Other stories were passed down like legends from old-timer to newcomer. Mostly, though, we " +
    "had to make up our own. Often they were exaggerated, or blatant lies, but it was a way " +
    "of bringing body and soul back together, or a way of making new bodies for the souls to inhabit.“",

    "“Stories are for joining the past to the future. Stories are for those late hours in the night when" +
    " you can't remember how you got from where you were to where you are. Stories are for eternity, when " +
    "memory is erased, when there is nothing to remember except the story.”",

    "“I can feel a storm near<br/>" +
    "The dream won't go away<br/>",

    "“You know Mr. Burns, you're the richest guy I know.“<br/>" +
    "“Ah yes, but I'd trade it all for a little more“",


    "“World-class skill requires world-class discipline.“",

    "“To martyr yourself to caution<br/>" +
    "Is not gonna help at all<br/>" +
    "Cause there'll be no safety in numbers<br/>" +
    "When the Right One walks out of the door“",

    "“I am thinking about something much more important than bombs; I am thinking about computers.“"
];