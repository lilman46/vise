// Vise tools content: Follow-up Playbook. Added Oct 14, 2026.
window.VISE_FOLLOWUP={
  STAGES:[
   {
    id:"reopen",
    name:"Reopen the call",
    time:"30 sec",
    goal:"Sound like you're picking up a conversation, not starting a cold one.",
    tech:["Priming","Commitment and consistency"],
    say:[
     {l:"Open",t:"Hey [Client Name], it's [Your Name] with Evolution Drafting, following up on your [project type] — we talked on [day]. Good timing?"},
     {l:"If voicemail first, then they call/text back",t:"Hey, got your message — glad you called back. Where were we: you were going to [their stated next step]. How'd that go?"},
     {l:"If a decision-maker is now on the line",t:"Hey [name], good to finally get you both on — [Client Name] filled me in that you two talked it over. What'd you land on?"}
    ],
    coach:[
     "Open Vise and read the scope before you dial: their exact goal words, the blocker, and what you promised to send.",
     "Never ask 'did you get a chance to look it over?' as your opener. It invites 'not yet.' Ask about the thing they were deciding, not the homework.",
     "If it's been more than a few days, say so honestly: 'it's been a bit, so let's get you back up to speed' — don't pretend no time passed."
    ],
    check:["I opened by naming the project, not just my name","I referenced their exact last step, not a generic check-in"],
    miss:"Starting over like it's a cold call. If you re-pitch from scratch, you lose the ground you already won."
   },
   {
    id:"recap",
    name:"Recap & re-confirm the goal",
    time:"1 min",
    goal:"Get them nodding again before you touch price or the blocker.",
    tech:["Labeling","Commitment and consistency","Endowment effect"],
    say:[
     {l:"Quote them back",t:"So last time, you told me [their goal in their words] — is that still the plan?"},
     {l:"Re-confirm the timeline",t:"And you were hoping to break ground by [their date] — still on track for that?"},
     {l:"If yes to both",t:"Perfect, nothing's changed on our end either — your designer's ready to go as soon as we are."}
    ],
    coach:[
     "This is a mini version of discovery: get two or three yeses before you get anywhere near the blocker or the price.",
     "If their timeline slipped, don't correct them — ask what changed. That's data for the close, not a problem to fix yet.",
     "Say 'your designer' here too. Ownership doesn't reset between calls."
    ],
    check:["I quoted their goal back and got a yes","I re-confirmed the timeline before moving on"],
    miss:"Jumping straight to 'so did you want to move forward?' with no recap. There's no commitment to stand on yet."
   },
   {
    id:"update",
    name:"Handle what's changed — find the real blocker",
    time:"2–3 min",
    goal:"Find out what actually happened since the last call, not what they say happened.",
    tech:["Mirroring","Labeling","Tactical empathy"],
    say:[
     {l:"Direct ask",t:"What's the one thing that needs to happen before you're ready to get started?"},
     {l:"If 'still thinking'",t:"Thinking it over... Usually there's one piece people are missing to make the call. What's the piece for you?"},
     {l:"If spouse/partner hasn't fully signed off",t:"Got it — what did [name] think when you two talked about it?"},
     {l:"If they talked to competitors",t:"Makes sense to look around. What stood out about what you heard elsewhere?"},
     {l:"If money's tighter than the last call",t:"Totally fair. Is it the total, or is it more about getting started today specifically?"}
    ],
    coach:[
     "Mirror their last words, then go quiet. Let them fill the silence — that's where the real blocker comes out.",
     "A vague answer ('just been busy') usually means the real blocker is price or the spouse and they haven't said so yet. Ask the decision-maker question again if you didn't lock them down last time.",
     "Write down whatever they say. You'll use their own words in the close."
    ],
    check:["I found a specific blocker, not a vague one","I know who else still needs to be convinced"],
    miss:"Accepting 'just been busy' as the answer and moving on. Busy is never the real blocker — ask one more question."
   },
   {
    id:"reanchor",
    name:"Re-anchor before you re-quote",
    time:"1 min",
    goal:"Put the price back in context before you say it again.",
    tech:["Anchoring","Loss aversion","Framing"],
    say:[
     {l:"Re-anchor",t:"Just so we're thinking about this the same way as last time — on a build like yours, plans run 2 to 3 percent of total construction cost, and nothing else moves until they're done."},
     {l:"If time has passed and costs may have shifted",t:"Quick heads up, material and permit review times have been creeping up this year, so the sooner your set is in the queue, the sooner your actual start date locks in."},
     {l:"Only requote the number if they ask or if it changed",t:"Your number's the same as last time: [price]. Nothing's changed there."}
    ],
    coach:[
     "Don't re-pitch all three tiers again unless they ask. Go straight back to the one they were leaning toward.",
     "If weeks have passed, a gentle urgency line is honest, not a fake deadline — review times and designer capacity really do shift.",
     "Never apologize for the price or hint it's negotiable. Same price, same confidence as call one."
    ],
    check:["I re-anchored before saying the number again","I didn't requote all three tiers unless asked"],
    miss:"Re-explaining the whole pricing structure from scratch. They already heard it; you're reminding, not re-pitching."
   },
   {
    id:"close2",
    name:"Close on this call",
    time:"1–2 min",
    goal:"Assume they're ready. Use whichever close matches the blocker you just found.",
    tech:["Assumptive close","Alternative close","Scarcity (real)","Reactance"],
    say:[
     {l:"Default — assumptive",t:"So let's get you started today. Your two-week queue begins as soon as the deposit's in. Which card would you like to use for [amount]?"},
     {l:"Blocker was spouse/partner",t:"Since [name]'s on board now, let's lock in your designer spot today — which card works?"},
     {l:"Blocker was money — alternative close",t:"Let's get your queue started — do you want to do [smaller amount] down today, or split it into three payments of [amount]?"},
     {l:"Blocker was 'shopping around' and they came back",t:"Good — you did your homework and you're still here. Let's get your designer on the calendar. Which card would you like to use?"},
     {l:"Real scarcity, only if checked",t:"Just so you know, our designers have room for [N] more starts this month; after that the next kickoff is [date]."},
     {l:"If still hesitant",t:"Would it be a bad idea to get the deposit in today so your two-week queue starts now instead of waiting another week?"}
    ],
    coach:[
     "Pick the close that answers the blocker you just uncovered, not your default. A spouse objection needs the spouse close, not scarcity.",
     "Ask for the card, then stop talking. Silence is the close on a second call even more than the first — don't fill the gap with reassurance.",
     "A second call is your best shot at urgency: they've had time to think, so a soft 'whenever you're ready' here usually means a third call, and a fourth."
    ],
    check:["I matched the close to the blocker I found","I asked for the card or the payment choice directly","I stayed quiet after asking"],
    miss:"Ending the second call the same soft way as the first — 'take your time, let me know.' A second call with no decision is how leads go cold."
   },
   {
    id:"stillno",
    name:"If they still won't close",
    time:"1 min",
    goal:"Get a real next step and a real date — never a vague 'I'll check back.'",
    tech:["Scarcity (real)","Reciprocity","Commitment and consistency"],
    say:[
     {l:"Ask for a no",t:"Totally fine if the timing's not right — I'd rather know now. Is this still something you want to do, just not yet, or has it changed?"},
     {l:"If 'not yet' with a real reason",t:"Got it. What has to happen first, and about when do you expect that?"},
     {l:"Set the next call yourself",t:"Let's put something on the calendar so this doesn't fall through the cracks — does [specific day/time] work, or is [other day/time] better?"},
     {l:"Give something before you go",t:"One thing worth knowing either way: [free fact from Give stage or a timely update]. Talk soon."}
    ],
    coach:[
     "Never leave a second call with 'I'll follow up.' Get a day and a time from them, same as the first call's wrap-up.",
     "A lead that's gone quiet for a real reason (money, timing, a bank loan) gets a follow-up date tied to that reason, not a generic one-week bump.",
     "Log the real blocker in Victor so the next follow-up call starts from where this one ended, not from scratch again."
    ],
    check:["I got a specific day/time for the next call","I logged the real blocker, not 'no answer' or 'thinking it over'"],
    miss:"Letting 'I'll think about it and call you' end the call. That's them closing you, not the other way around."
   }
  ]
};
