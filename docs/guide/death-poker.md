---
title: Any% Glitchless — Death's Poker (1.07)
---

# Any% Glitchless — Death's Poker (1.07)

Hello!

This [route sheet](https://docs.google.com/spreadsheets/d/1gnmUKSnFf3odiySNua3vSO472feMbHxfyAMrHEXhMUw/edit?gid=0#gid=0) gives you a good overview of the Any% Glitchless Death's Poker route (patch 1.07), designed for both new runners and those looking to improve their SOB and PB.

This is not a complete minute-by-minute guide, but rather a list of tips and useful links. To learn the lines and get a global view of the run, nothing beats watching a run to make sure you don't miss anything.

Complete details of the run: [route sheet](https://docs.google.com/spreadsheets/d/1gnmUKSnFf3odiySNua3vSO472feMbHxfyAMrHEXhMUw/edit?gid=0#gid=0) (EN / FR / CN).

## What should I do first?

1. Read all the [category rules](https://www.speedrun.com/eldenring?h=Any-glitchless&rules=category&x=02qr00pk-7891zr5n.qj740p3q)
2. [Downpatch](https://soulsspeedruns.com/eldenring/downpatching) to 1.07, EAC off, and test a character creation
3. Get all the tools listed in the route sheet. [Here's a video of the whole process (FR)](https://youtu.be/sRiX9s1Br60)
4. Follow the [route](https://docs.google.com/spreadsheets/d/1gnmUKSnFf3odiySNua3vSO472feMbHxfyAMrHEXhMUw/edit?gid=0#gid=0) and create a save before each boss / skip / cheese.
5. Configure LiveSplit, SoulSplitter and [get a .lss splits file](https://therun.gg/karlitto__/Elden%20Ring/Any%25%20Glitchless$platform%3Apc$variables%3Aroute%3Ddeath'spoker%2Cversion%3D1.07) (click the cloud next to Splits (IGT), rename the splits as you wish).
6. Make sure it's in-game time (right click, Compare Against, Game Time).
7. Always end a run manually at the credits. We use LiveSplit IGT (in-game time) at the credits as the final leaderboard time.
8. Train the bird and the bosses.
   - The bird: until you can survive more than 1 minute on the cliff's ledge.
   - The bosses: until you can kill them regularly 3 times in a row and understand their backups (strategies other than the gold RNG).
   - To learn a boss's patterns quickly, go naked, no-death, no weapons, and just try not to get hit for 5 minutes straight.
9. When a bit confident, do segmented runs after the bird: you'll get your SOB and a reference run that becomes your first PB to beat. You don't need to do all the skips, especially not the bridge skip, which is the most punishing one.
10. When more confident (you can do a full boss rush without dying), start your first real run. Take every site of grace available on your path, and spend your levels as soon as possible so you lose a minimum of runes if you die and don't get stuck (example: before Gideon, you can level intelligence to deal more damage and maximize your chances of getting past him).
11. When aiming for around 58 minutes, remove several sites of grace. I recommend keeping Margit's, the Queen's Bedchamber before Morgott, the Bird skip and Godfrey's.
12. Remove everything and practice bow cancels if aiming for a sub 55.

### Reference videos

**Skips 1:**

<iframe width="100%" height="400" src="https://www.youtube.com/embed/wujQ-QFOp6c" title="Skips 1" frameborder="0" allowfullscreen></iframe>

**Skips 2:**

<iframe width="100%" height="400" src="https://www.youtube.com/embed/9C-Ns7TBp_w" title="Skips 2" frameborder="0" allowfullscreen></iframe>

**Bow cancels:**

<iframe width="100%" height="400" src="https://www.youtube.com/embed/xgikTOA3lOw" title="Bow cancels" frameborder="0" allowfullscreen></iframe>

## Frequently Asked Questions

### What are the differences between BHF and Death's Poker? Which is better for a beginner?

It's up to personal preference. What I feel, having done both:

- **BHF is more rewarding**, technically very precise with challenging fights and less punishing RNG. The setup is around 20 minutes; even though you're not idle, you're mainly riding. If you just want to have fun and not aim for the top of the leaderboard, it's a great choice. Major downside: it's consumable dependent, so if you die the backup is very different.
- **Death's Poker (DP) is overall easier**, with a very short setup but much more RNG dependent if you're aiming for the top of the leaderboard. You don't need to reset every 6 minutes if the bird goes badly: you can do segmented runs until you're confident. However, to enter the top 5 and get a clean run with 0 deaths and okay RNG.

### Keyboard-mouse or controller?

The top runners use both, so it's your choice. If you started on controller, I recommend sticking to it.

- **KBM**: straighter lines, very precise control of positioning and bow shots. If you aim for the best SOB possible, it's KBM. Ex: Forsa, Kemist, Yuta or me.
- **Controller**: some skips are much easier on controller, and no need to rebind your keyboard like a monkey. Ex: Poleuky or Iridium.

### Why patch 1.07?

For two reasons:

1. The Phalanx from Rogier's Rapier deals 40 poise damage, and this is so massively powerful that we use it for almost all bosses after the Fire Giant.
2. When running, you can just crouch/uncrouch (I call it a squat) to regain a lot of stamina (don't block). We use this to run constantly, and also in combat to have enough stamina to execute the boss scripts.

### About the FPS Patch

- The tool was initially created by Virazy for the Elden Ring TAS. It turned out it could also completely eliminate FPS-related inconsistencies, for example in Legasus setups and zips. Over time we found more cases where it makes a difference, so it's allowed wherever FPS affects the outcome of our executions.
- The FPS patch removes FPS as a factor from execution. It makes the game always think it's running at a certain frame rate, which gives a constant jump distance.
- The rule is to stay within the 20 to 60 range. This is useful for skips and Gideon: for skips, since jump distance is always the same, they become regular and less hardware dependent; for Gideon, at 60 FPS the script works 100% of the time (it affects the way Gideon is frozen).
- Since the patch is not natively included in LiveSplit, we have to use a CheatEngine table. The table is in the Rules section of the leaderboard.
- Activation process: launch Elden Ring, then LiveSplit, then the patch. Attach the patch to the eldenring.exe process, then open the patch table.
- Always capture the table in OBS and never minimize it. It must be visible through the whole run.
- It's recommended to assign two hotkeys:
  1. to toggle the script ON and OFF;

  ![ON/OFF hotkey](https://www.speedrun.com/static/blob/yzr9dwgz.png)

  2. to change the value for skips before Gideon (20 to 59, do some tests and see what works best), and for Gideon (60). After Gideon, remember to deactivate the script.

  ![FPS value hotkey](https://www.speedrun.com/static/blob/5ngk3j4z.png)

- The choice to use the patch on certain sections is up to the runner, but be aware that only some skips benefit from it in this category, mainly:
  1. Raya Lucaria Skips (Door Jump, Drop to Abductor)
  2. Volcano Manor Cliff Jump
  3. Leyndell Balcony Skip
  4. Leyndell Broken Bridge Skip
  5. Farum Azula Bird Skip

### How to practice and create saves?

1. Usually we just watch the WR or a top runner's PB, launch a save organizer (SoulsSpeedruns), create a new character, launch a [training tool](https://github.com/karlittoSR/TarnishedTool) and progressively save all the key steps: bosses, skips and any tricky part of the route.
2. I suggest you **create all your saves first before practicing anything** (just go *nodeath* and one-shot the bosses). If you practice hard on 50% of the route without saving anything after, you'll already have spent many hours practicing, and the remaining 50% will feel like an eternity — which can be discouraging.
3. It's not interesting to take someone else's saves. You'll have their in-game settings, and you won't learn the lines to get to the bosses/skips, which is a shame. Taking the time to make your own saves also familiarizes you with the route.

### Why do you sometimes run immediately after an interaction ends?

Because we use a **"buffer sprint"**. Take Iji as an example:

1. Run at him, press the interaction button to speak and **keep the run button pressed** (in my overlay, you can see I keep the spacebar pressed at all times). While speaking to him, move closer to the site of grace.
2. Buy the stones and do the upgrades, **all while keeping the button pressed**. It takes a bit of practice.
3. Once finished, you don't need to exit the menu manually: just head toward the site of grace. You'll see your character go full speed almost instantly, with no acceleration phase.

We use this for skips and all sorts of interactions, for example with Gostoc or right after the Radagon fight.

### How do you open the map while lighting a site of grace?

You need to touch the grace **at an angle** (position your character slightly left or right of it). Immediately after touching it, press the map button and teleport. We use the few frames where the character turns toward the grace to open the map.

### I struggle with lots of skips — are they all necessary?

I insist: go **step by step**, otherwise you'll give up. If you're a beginner, avoid skips as much as you can.

- Start by making saves in front of each skip.
- Train with my visual cues: [first video](https://youtu.be/wujQ-QFOp6c), [second video](https://youtu.be/9C-Ns7TBp_w).

1. Here's a Tierlist :

   ![Skips tierlist](/images/tierlist-skips.svg)

   The Leyndell bridge can be skipped: just go right after the balcony skip and ride the dragon. The Lake skip can be avoided by going past Borealis and around the lake. Same for the stone 8 beetle, you can shoot the arrow from further back without attracting the one-shot hand.
2. Skips to avoid at the beginning: Leyndell Bridge, Lake skip, Leyndell Balcony, Sellia skip. The only skip really worth learning early is the Marika Skip going to Radahn, as it's simple and saves 2 minutes.
3. Take the time to slow down my videos and watch my virtual keyboard closely. Some details you're missing will appear.

## Boss tips with RNG levels /10

### Death Rite Bird — 4/10

**I'm having trouble with the bird. Sometimes it doesn't jump for over a minute — is that normal? Or is my positioning off?**

He has 3 patterns that make him fall. It's entirely possible that he does none of those 3 patterns for a long time. The RNG part is: **when** is he going to do one of those three. We can influence it a bit but it takes some code reading and hours of practice.

To train efficiently: save your position on the ledge of the cliff, no-death, and if he doesn't fall, come back to the cliff and continue until he does. Then QO and reload the save. You can train at a very fast pace this way.

These days I have about 40% very bad RNG = either I get killed and could do nothing about it, or I waited too long (1 min 30). That means a 60% chance to continue the run. I'm not the best at the bird, so you can do better. If you're not under 55 minutes yet, you can wait until at least 7 minutes. The top 3 aim for around 6:15 or less, so even 7:30 is runnable.

If you both die at the same time and you're not aiming for a sub 56, go pick up your runes and continue.

[Bird video](https://youtu.be/hXJzlhgcRw0)

### Abductors — 2/10 (bad opener = time loss)

In very rare cases, both maidens attack at the same time: it's usually a death or at least a 30 s loss.

I recommend **always** using a mana potion before breaking the first one's poise. It's slower but safer for beginners. When confident, you can skip it on good RNG and finish with an R1.

> I'm having a lot of trouble with the abductors, they do weird openers…

The main problem is people not going far enough left (you need to touch the stone). After your WAR1, go to the left side of your ice trail, about midway. To avoid the grab, keep running a bit after your roll.

There are **3 openers** that are easy to spot. When you do your first WAR1, look closely at the maiden on the left:

1. **Her stomach is open** and she's ready to do her charge: that's the normal RNG, so normal script.
2. **Her stomach is closed**, she's ready to charge: careful, she's going to attack very quickly. We don't have time to wait on the trail we just placed — roll fast and do the rest of the script as normal. She'll take more damage, so watch out for her grab.
3. **She does nothing.** The worst RNG. Attack the maiden on the right with an R1, roll her counterattack toward the right, then place a WA that will stun her. After that, react to the maiden on the left, who will either attack or grab you — the idea is to always roll the grabs to line up both maidens, then WAR1 to hit them both.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=34" title="Abductors" frameborder="0" allowfullscreen></iframe>

Some bad RNG cases:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/HPkGELH8OMY" title="Abductors bad RNG" frameborder="0" allowfullscreen></iframe>

### Gilika — 0/10

I tried to skip this talisman: you gain ~40 s but you lose several seconds in all the other fights and add RNG. So a **big NO**.

There's a small timing if you want to speed the fight up by a few frames by ending with a WAR2, but it's not worth training.

### Radahn — 2/10 (opener can be slow)

You can summon Okina on the way (nobody else) — he can deal a lot of damage and save you an input. If you summon too many, they'll get in your way when dodging Radahn's AOE during his P1.5 transition. If he gets too close, just go to the other side before the P1.5 transition.

[Here's how to deal with his rain of arrows.](https://youtu.be/9ooCgKzFjJ8)

You don't need to get off the horse before the cinematic: just QO in front of Alexander (the pile of debris at the bottom of the pack of 2).

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=420" title="Radahn" frameborder="0" allowfullscreen></iframe>

### Margit — 1/10 (opener can be slow)

There's only one bad opener: he circles you for 10 s. Turn around and wait until he attacks. If you're greedy he can kill you. [Worst Margit RNG.](https://youtu.be/DdbV2yOwOYc?t=4506) When the fight ends, check your health: it determines how many potions to take.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=655" title="Margit" frameborder="0" allowfullscreen></iframe>

### Godrick — 1/10 (the one-cycle isn't consistent)

The [one-cycle](https://youtu.be/wByGqYZ3LyM?t=1925) is theoretically always possible on both of his openers, but sometimes you just don't get enough damage. Don't spend too much time perfecting it.

On the second opener (the one where he jumps), take one more step then go directly into continuous WAR1. There's a timing to learn to not get hit. You can keep sprinting through this whole process, since we're supposed to squat right after the end of the stairs anyway.

Always aim your WAR1 trails at his P2 spawn point, so you don't lose 10 s running to him.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=764" title="Godrick" frameborder="0" allowfullscreen></iframe>

### Goldfrey — 3/10 (bad RNG = up to 30 s lost)

This one needs a lot of practice to capitalize on the gold RNG. Otherwise, take your time and you'll always get the kill. The spin has a 60% chance of happening — nothing can influence it.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=867" title="Goldfrey" frameborder="0" allowfullscreen></iframe>

### Morgott — 2/10 (the geysers kill you about 20% of the time)

Apart from the backstep, every opener is regular. Get the stun and be full health, don't take too many risks. If you're new, do R1 R1 instead of JR2 for the stun — it's safer.

All the openers and how to handle them:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/LpV7vCm9Nk0" title="Morgott openers" frameborder="0" allowfullscreen></iframe>

When breaking the poise, [crouch and take a step back before the WAR1](https://youtu.be/9a0XocTjluA?t=2343). This matters because when Morgott enters Phase 2, his hitbox shifts slightly backward.

Don't wait too long (my marker: when my character starts the crouch animation, I press WAR1). If you delay, he may start the arrow attack. If that happens, the fight gets harder because he'll attack right after the geysers.

*Distance or rush in P2?* Stay at distance if you're full health. I tested ~50 times: 19% deaths at distance versus 33% trying to close in.

If you're low on mana or health, close the distance, avoid the geysers and finish with WAR1 WAR2. Don't hesitate to commit to that last WAR2: even if you die, it's only 15 s lost.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=1198" title="Morgott" frameborder="0" allowfullscreen></iframe>

### Fire Giant — 3/10 (one opener is very bad, the rest is fine; same in P2)

There are several openers. I usually go with JR2 JR2 R1, but sometimes JR2 R1 JR2 works better. Train and see what you prefer.

At the end of the fight, don't go between his legs — you can receive a magma rock right next to you and explode. [aim for the left part of his right leg](https://youtu.be/9a0XocTjluA?t=3164) and stay there:

![Fire Giant positioning](https://www.speedrun.com/static/blob/7z33j29z.png)

Positioning in P2 is very important because he'll be less likely to trigger bad patterns.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=1657" title="Fire Giant" frameborder="0" allowfullscreen></iframe>

### Godskin Duo — 5/10 (almost undoable with bad RNG)

I have a 45% reset rate on the Duo. If you play like a god with inhuman reflexes, you can probably avoid 80% of the bad RNG and still get the kill. But usually it's at least 30 seconds of time loss.

There's a small timing after your first WAR1 to trigger an attack from the Noble (get closer to him then immediately step back). We want him to attack so we can trigger his P2 and stay safe.

To handle the Apostle, nothing beats staying at range, doing the Phalanx twice, and the second time preparing to run when the Phalanx leaves your body. That way you won't trigger the Apostle's attacks and he'll stay still. Worst case, he prepares a fireball, which is fine.

For the last Godskin, I recommend [2 WAR1 and 1 Phalanx to be safe](https://youtu.be/9a0XocTjluA?t=3595) and possibly get an early kill (if it's the Noble, he tends to run at you). If it's the Apostle, prepare a mana potion — you'll need to stun him with a second Phalanx.

Watch the respawn timing of the last Godskin: it depends on when the previous one died. If you finish the Apostle very fast and use his death to chain a WAR1 on his corpse, the next Godskin will respawn faster than usual — don't get caught off guard. You'll generally only have time for 1 mana potion then Phalanx + trail or double trails, no more.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=2055" title="Godskin Duo" frameborder="0" allowfullscreen></iframe>

### Maliketh — 10/10

The only 10/10 RNG fight. If he doesn't run, it's a death or, at best, a huge time loss and probably a reset, because your BPT (best possible time for this run) just exploded.

[Here's a video of the fight.](https://youtu.be/6iQ1FQALROQ) The positioning for the first WAR1 is very precise because it avoids some poise or damage problems in P2.

[Backup strat if he doesn't run immediately.](https://youtu.be/vLTfQ4nTTPs)

[Backup if you die and have to redo the fight.](https://www.youtube.com/watch?v=80Dte6NSVoc)

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=2276" title="Maliketh" frameborder="0" allowfullscreen></iframe>

### Gideon — 1/10

If you follow the [most recent strategy](https://youtu.be/asSD-qzF2CI), there's a 90% chance you kill him. If he double/triple rolls, unfortunately just run R1 and pray.

Visual marks (first the foot, then the hat):

![Gideon visual marks](https://www.speedrun.com/static/blob/rnqvwdxe.png)

IMPORTANT: [move forward right before the last WAR2](https://youtu.be/9a0XocTjluA?t=3904) (you can just run at him or crouch) — just one step if he doesn't move, a bit more if he steps back, so you stay close to him. Why: it interrupts his animation (the blood mist spell) at exactly the right timing for him to be staggered just long enough that you can WAR2 and avoid most of his rolls.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=2423" title="Gideon" frameborder="0" allowfullscreen></iframe>

### Godfrey — 1/10 (bad RNG can be slow but never fatal)

If he doesn't do the right opener, [just add a JR1 and wait for an opener for the WAR1 stun](https://youtu.be/9a0XocTjluA?t=4005).

"I keep getting stomped in P2…"

- It's due to insufficient damage. Make sure you [crouch a little then WA](https://youtu.be/9a0XocTjluA?t=4020), roll, WA, and the freeze effect should trigger. It's always due to not enough damage.
- End your P1 with a WA. When he spins, don't sprint — run normally to avoid losing stamina. Otherwise you won't have enough in P2 to avoid his last attack.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=2553" title="Godfrey" frameborder="0" allowfullscreen></iframe>

### Radagon — 1/10 (worst case: a bad opener costing around 5 to 8 s)

**Phase 1:**

Always check that your initial damage is 4000 after the 2 WA (he goes to P2 at 4003 damage dealt). To regulate this, always roll to the right side behind him. That way he'll rotate and take all the ticks.

If he spams close-combat attacks, find a window to just do an R1 and prepare to continue the strategy as usual. He'll instantly go to P2. If you have time, do an R1 with the rapier before the JR2 to secure the stun.

**Phase 2:**

Always lock onto him in P2. That way your visual cue stays consistent. The roll timing is the most important thing in this fight:

![Radagon roll timing](https://www.speedrun.com/static/blob/1n7vxp5n.png)

If you roll too early, you die.

If you roll too late, you stun him 60% of the time, but 40% of the time he'll have time to teleport and spam his P2 attacks and you're dead.

With a perfect roll, you'll start to see the teleport animation, but you'll be able to stop it in time. The window is about 5 frames, so it's doable regularly with some practice. The visual cue is the hammer pointing vertically down as in the screenshot.

Even if he teleports back, at that point just lay down 2 WAR1 and roll his first slam. He should be dead right after.

Training tip: you can save your position right at the start after the cinematic. Then reload the save and only press your teleport key to instantly face him. This skips the flashbang and lets you practice faster.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=2804" title="Radagon" frameborder="0" allowfullscreen></iframe>

### Elden Beast — 3/10 (bad opener and bad Elden Stars)

This one is tricky and harder than it looks. Some beginner tips:

1. After killing Radagon, have your mana bar full.
2. Buffer sprint before the cinematic to get better positioning. Before doing the Phalanx, take just 2 steps to benefit from the buffer. Your Phalanx should be leaving your body exactly when you start your first WAR1.
3. When you go behind the beast, you can stop at his feet — don't go too far or you'll have a hard time landing the JR2.
4. After your WAR1, keep sprinting and JR2 to the position where the beast should dive. This makes a difference in canceling his ring animation properly.
5. Regenerate your stamina 2 times, not more. Otherwise you won't break the poise. When the beast goes down, you should be almost full stamina.
6. I recommend staying at the center, slightly right side of the beast during the 2 WAR1. Then crouch sprint for 0.5 seconds and do the last WAR1 diagonally left so the beast takes ticks while diving. [Here's an example.](https://www.youtube.com/watch?v=y2JZOD4s8f4) If you managed your stamina perfectly, you won't even need to crouch anymore.
7. Training tip: same as Radagon, save your position right in front of Radagon. Load your save, nodeath + onehit, teleport R1. Remove nodeath and onehit, take two mana potions to replicate the end of the Radagon fight.

Fight breakdown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/GwM2SCEX1dQ?start=2944" title="Elden Beast" frameborder="0" allowfullscreen></iframe>

**Why am I not getting enough damage on Elden Beast before he does the ring?**

Because you need to lay down your WAR1 trail diagonally so that when he steps back to dive, he continuously takes tick damage. Same idea to end the fight when he does the Elden Stars attack.

---

The RNG in this route is heavier than BHF, but still manageable. Maliketh remains the real troublemaker, while the bird — often the biggest concern for new runners — is actually quick to learn. With about 10 hours of practice you'll start to understand it, and after a few days you should succeed roughly half the time, even if it takes up to 8 or 9 minutes into the run.

Good RNG and, most important of all, have fun practicing AND running!

[YouTube channel — Karlitto__](https://www.youtube.com/@karlittosr)

For any other question, you can ask me on Discord: `karlitto__` (attach a clip of your problem to help me). You can also go to **er-help** on the speedrun community Discord.
