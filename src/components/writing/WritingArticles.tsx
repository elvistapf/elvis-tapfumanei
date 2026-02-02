"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArticleCard } from "@/components/ui/Card";
import Link from "next/link";

const poems = [
  {
    title: "The Funeral for Fairy Tales",
    excerpt: "Burying the myths that keep us waiting for rescue instead of saving ourselves.",
    category: "Poetry",
    date: "Read more",
    content: `Today we bury happily ever after
in a shallow grave beside the tracks.
No eulogy, no flowers, no laughter—
just the sound of illusions breaking their backs.

I came to mourn the Prince Charming lie,
the myth that rescue rides a white horse,
the fantasy that someone from the sky
descends to save you as a matter of course.

Cinderella died of exposure last winter,
still waiting for the glass slipper to fit.
Snow White choked on the poisoned splinter
of trusting strangers who smile and sit

too close, too friendly, too interested.
Sleeping Beauty never woke—
learned too late that being the fairest
is just another way to get broke

by those who profit from your dreaming,
who sell you castles made of smoke.
The happy ending's just the screening
process for who survives the joke.

We're burying the notion
that good things come to those who wait,
that patience is a magic potion
instead of just another name for fate

deciding you're too passive to matter,
too gentle to be taken seriously.
We're lowering into earth the patter
of "everything happens for a reason"—mysteriously

hopeful garbage sold to keep you docile,
to make you think your suffering has meaning,
when really it's just random, just hostile
chaos disguised as destiny leaning

toward justice, toward balance, toward right.
There is no cosmic accountant tallying scores.
There's just the day and then the night
and what you take before someone takes yours.

I'm saying Kaddish for Santa Claus,
who taught me that rewards come free
if you just follow all the laws,
if you're good, if you believe, if you see

the world as moral meritocracy
instead of what it is: a cage
where nice guys finish last, actually,
and kindness doesn't pay or age

like wine into wisdom.
It just makes you a mark,
a target for the system
that eats the light and keeps the dark.

So here's the funeral procession:
every bedtime story that lied,
every parable with a lesson
that doesn't help you when you've tried

everything right and still lost,
still bled, still broke, still fell.
I'm burying hope that doesn't count cost—that's not hope, that's a shell

designed to make you manageable,
to keep you believing in tomorrow
while they make today unbearable.
I'm done outsourcing my sorrow

to fairy godmothers who never arrive.
I'm my own rescue now.
The only way I'm staying alive
is if I figure out how

without magic, without wishes,
without happy accidents.
I'm filling in the ditches
where fairy tales made residence.

And maybe this sounds bitter,
maybe this sounds cold—
but I'd rather be the quitter
of beautiful lies than the sold

believer who keeps waiting
for a story to come true.
This funeral is liberating:
I bury them so I can bury you—

the version of me that needed fables,
that couldn't face the raw.
Now I'm setting my own tables.
Now I'm writing my own law.

Rest in peace, fairy tales.
You did your damage, had your run.
Now I'm beyond your veils—the funeral's over.
I'm the only one

who rises from this grave.`
  },
  {
    title: "My First Philosopher Was Hunger",
    excerpt: "How survival teaches philosophy better than books ever could.",
    category: "Poetry",
    date: "Read more",
    content: `Before I read Descartes, I learned "I think, therefore I am"
translated differently: I eat, therefore I survive.
My first philosopher was hunger, persistent as a scam,
teaching me that needs are the only truths that stay alive.

Hunger taught epistemology at 3 a.m.—
how do we know what's real? Your stomach answers first.
Before metaphysics, before the abstract theorem,
there's the immediate, the physical, the thirst

that makes philosophy concrete, makes questions simple:
not "what is the good?" but "where's the next meal?"
Not Plato's forms or Kant's categorical principle—
just the raw data that tells you how to feel

your way through darkness toward something solid,
something that'll quiet the void inside.
Hunger made me empiricist, made me squalid
in my methods: test everything, verify, take what's verified.

I learned logic from an empty fridge:
if A (no food) and B (no money), then C (consequences).
The syllogism of the street, the bridge
between theory and practice, between pretences

and survival. Hunger taught me to strip away
the unnecessary, to focus on what matters.
Maslow before Hegel, every single day—
lower needs before the higher ladders.

My philosopher spoke in stomach growls,
in the clarity that comes from deprivation.
No flowery language, no academic howls—
just the pure, uncut sensation

of want transforming into will,
of lack becoming motivation,
of emptiness you have to fill
or face your own negation.

Hunger taught me existentialism young:
existence precedes essence, sure—but first, existence needs to be hung
on something more than theory, more than pure

ideas floating in academic space.
You are what you do to stay alive,
not what you think while sitting safe
in places where you never had to strive

for basics, for the ground floor of being.
Hunger gave me authenticity—
there's no pretending, no agreeing
to conventions when you're living in the city

of need, where philosophy meets pavement,
where Nietzsche's will to power is just
the will to eat, the will to save rent,
the will to not become the dust

that everyone you know becomes
when they stop fighting, stop believing
not in fairy tales but in the sums
that add up to achieving

one more day, one more meal.
Hunger made me pragmatist:
truth is what works, what's real
is what keeps you on the list

of the living, of the fed,
of those who wake tomorrow.
Philosophy's useless if you're dead—
hunger taught me that, and sorrow

taught me that comfort
creates the space for questions
that don't matter in the fort
of those still learning lessons

from the original teacher,
the first philosopher,
the one whose reach you
can't avoid or defer:

Hunger, pure and simple,
teaching you that before you think,
before your mind can ripple
with ideas, you need the link

between body and being,
between matter and mind.
My first philosopher was seeing
clearly what theorists find

after decades of study:
we are animals first,
consciousness gets muddy
when it's not immersed

in the fundamental truth
that survival precedes thought,
that comfort in your youth
is the luxury that bought

you the privilege to wonder
about meaning, about why.
My first philosopher was hunger.
Everything else was a lie

told by the full
to the empty,
by the comfortable
to the needy.

Hunger taught me everything
before I read a single word.
The rest was just the dressing
on a truth I'd already heard.`
  },
  {
    title: "The Art of the Necessary",
    excerpt: "Survival doesn't negotiate with morality—it just demands action.",
    category: "Poetry",
    date: "Read more",
    content: `Necessity has no morality—it has only teeth,
and it will eat your personality,
your ethics, your beliefs beneath

the weight of what must be done.
This is the art I mastered:
doing what can't be undone
in moments that moved too fast,

too urgent for philosophy,
too immediate for debate.
The art of the necessary
doesn't negotiate, doesn't wait

for you to feel comfortable,
to make peace with the choice.
It makes you accountable
without giving you a voice

in the matter. You act,
or you suffer the consequence
of inaction. That's the pact
you sign with circumstance

when you're born into the fire,
when survival's not a given
but something you acquire
by being unforgiven

in your methods, in your means.
The art of the necessary
is painted in extreme scenes
that would make the ordinary

person flinch, would make them turn away.
But I'm the artist here,
and my canvas is today,
and my palette's made of fear,

hunger, desperation, need—
colours that don't blend pretty,
but create the guaranteed
outcome: staying in the city

of the living, of the breathing.
I perfected the technique
of doing while they're seething,
while they critique

from positions of never having had to choose
between two evils, two hells,
two ways to lose
everything. The art excels

when executed without hesitation,
without the luxury of time
to weigh each permutation,
to check if you're in line

with your values, with your code.
The art of the necessary
rewrites that code, unloads
the unnecessary

weight of should and ought and might.
It deals in is and must,
in the fight
for survival that adjusted

my moral compass to magnetic north—
staying alive, protecting mine.
The art brought forth
a version of me designed

to do what needed doing,
without the paralysis
that comes from viewing
every choice through the prism

of right and wrong, good and bad.
The art sees only outcomes:
did you get what you had
to get? Did you overcome

the obstacle, the threat, the challenge?
Then the art succeeded.
The historians can savage
your methods if they needed

villains for their narrative,
but the art doesn't care
about comparative
morality. It's there

in the moment, in the split
second between action and consequence.
The art's legitimate
in the dense

reality of survival,
even if it looks ugly
from outside. The arrival
at tomorrow is the only

metric that matters in the moment.
Later, you can process,
atone, foment
revolution against the stress

that made you do what you did.
But in the moment, the art
is what kept you amid
the chaos, kept your heart

beating, your lungs breathing.
I'm a master now—an artist in the wreathing
of necessary actions around the brow

of survival like a crown,
a technique passed down
from every ancestor who found
themselves in the profound

darkness where choice becomes simple:
do or die, act or fall.
The art's not gentle,
but it answers the call

when everything else—
your morals, your beliefs, your fears—
goes silent. It compels
you through the years

of having to choose
between bad and worse,
between what you'll lose
and what you'll rehearse

as justification later,
when you have the luxury
of being an investigator
of your own history.

But in the moment, there's no time
for investigation, for regret.
In the moment, the crime
is hesitation. I met

every necessary moment
with action, decisiveness,
the component
of survival that's remiss

in those who've never had to practice
the art, who judge from safety,
who think tactics
are chosen shapely,

carefully, with time to reflect.
The art laughs at reflection.
The art's direct,
immediate—a deflection

of death, of harm, of loss.
I'm the artist of the necessary,
and the cost
of my gallery

is measured in what I kept—
my life, my family, my tomorrow—
not in what I wept
about after. The sorrow

comes later, if at all.
In the moment, there's just
the art, the call,
the necessary thrust

forward through whatever barrier,
whatever line, whatever rule
stood between me and the carrier
of my future. I'm no fool—

I know what I've done,
know what I've become.
But I'm alive, and my son
eats, and that sum

is the only mathematics
that mattered when I executed
the art. The dramatics
of guilt can be rooted

out later, processed, understood.
But first, I had to survive
by any means I could,
by any means to arrive

at this moment where I can
even afford to contemplate
the moral span
between what's right and what's great—

timing, execution, effect.
The art of the necessary
doesn't genuflect
to contemporary

moralists who never needed
to practice it, never stood
at the crossroads where succeeded
means you did what you could—

not what you should.
I mastered the art.
I understood
that the part

of me that's good
had to take a back seat
when survival stood
in the street

demanding a decision.
I made it.
I'm here with precision,
with the merit

of still breathing.
That's the art's masterpiece:
me, still being—me, at peace
with what had to be done.
The art of the necessary—I didn't just learn it. I won
first place in the contemporary
exhibition of survival.
My work hangs in no museum,
but my arrival
at today's the premium
proof that the art works—that necessity's brushstrokes
can paint around the quirks
of morality when stakes
demand it, when the canvas
is your life and the painting's
due now. The advantage
of the art is its constraining
simplicity: do what must be done.
Everything else is commentary.
The art and I are one.
The art of the necessary—
I am its living gallery.`
  },
];

export function WritingArticles() {

  return (
    <Section background="light" id="articles">
      <SectionHeader
        eyebrow="Articles & Essays"
        title="Thoughts & Explorations"
        description="Writing on creativity, technology, leadership, and the human experience."
      />

      {/* Substack Articles Row */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-charcoal mb-6">Recent Substack Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            <a 
              href="https://triestoohard.substack.com/p/funny-you-think-its-a-you-problem"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden border border-warm-gray-100 hover:shadow-lg hover:border-terracotta/30 transition-all duration-300 group"
            >
              <div className="aspect-[16/9] overflow-hidden bg-warm-gray-100">
                <img 
                  src="/funny-article.webp"
                  alt="Funny You Think It's a 'You' Problem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-medium rounded-full">
                    Article
                  </span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-warm-gray-400 group-hover:text-terracotta transition-colors"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                  Funny You Think It's a "You" Problem
                </h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed mb-4">
                  Why your "imposter syndrome" is actually pattern recognition
                </p>
                <div className="flex items-center text-terracotta text-sm font-medium">
                  Read on Substack
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 border border-warm-gray-100 hover:shadow-lg transition-shadow flex items-center justify-center min-h-[280px]">
              <div className="text-center w-full">
                <div className="p-3 bg-terracotta/10 rounded-full w-fit mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">Subscribe to Try Too Hard</h4>
                <p className="text-warm-gray-600 text-sm mb-4">Get new articles delivered to your inbox</p>
                <iframe 
                  src="https://triestoohard.substack.com/embed" 
                  width="100%" 
                  height="120" 
                  style={{ border: "1px solid #EEE", background: "white", borderRadius: "8px" }}
                  frameBorder="0" 
                  scrolling="no"
                  title="Subscribe to Try Too Hard Newsletter"
                />
                <a 
                  href="https://triestoohard.substack.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors mt-6"
                >
                  Read more on Substack
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a 
              href="https://triestoohard.substack.com/p/the-silence-after-you-spoke"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden border border-warm-gray-100 hover:shadow-lg hover:border-terracotta/30 transition-all duration-300 group"
            >
              <div className="aspect-[16/9] overflow-hidden bg-warm-gray-100">
                <img 
                  src="/silence-article.webp"
                  alt="The Silence After You Spoke"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-medium rounded-full">
                    Article
                  </span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-warm-gray-400 group-hover:text-terracotta transition-colors"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                  The Silence After You Spoke
                </h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed mb-4">
                  Finding words for what the room did
                </p>
                <div className="flex items-center text-terracotta text-sm font-medium">
                  Read on Substack
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Poems Row */}
      <div>
        <h3 className="text-xl font-semibold text-charcoal mb-6">Poetry</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {poems.map((poem, index) => {
            const slugs = [
              "the-funeral-for-fairy-tales",
              "my-first-philosopher-was-hunger",
              "the-art-of-the-necessary"
            ];
            
            return (
              <motion.div
                key={poem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/poetry/${slugs[index]}`}>
                  <ArticleCard
                    title={poem.title}
                    excerpt={poem.excerpt}
                    category={poem.category}
                    date={poem.date}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link 
          href="/poetry"
          className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors"
        >
          View all poetry
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </Link>
      </div>
    </Section>
  );
}
