import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

interface Poem {
  title: string;
  content: string;
}

// Hardcoded poems data for now
const poems: Poem[] = [
  {
    title: "The Funeral for Fairy Tales",
    content: `Today we bury happily ever after
in a shallow grave beside the tracks.
No eulogy, no flowers, no laughter—
just the sound of illusions breaking their backs.

I came to mourn the Prince Charming lie,
the myth that rescue rides a white horse,
the fantasy that someone from the sky
descends to save you as a matter of course.

But the ground was already occupied
by the bones of those who waited too long,
who traded their power for a promise,
who believed in rescue over being strong.

So I dance on the grave of expectation,
spit on the tombstone of "someday,"
and walk away from the fairy-tale station
toward the dawn of my own damn way.

No glass slipper, no magic wand,
no kiss from a stranger to make me whole—
just the calloused hands of experience
and the fierce rhythm of my own soul.

The funeral's over. The fairy tales are dead.
Good. Now we can begin.
The real story starts where you are,
not where you wish you'd been.`
  },
  {
    title: "My First Philosopher Was Hunger",
    content: `Before I read Descartes, I learned "I think, therefore I am"
translated differently: I eat, therefore I survive.
My first philosopher was hunger, persistent as a scam,
teaching me that needs are the only truths that stay alive.

Hunger taught epistemology at 3 a.m.—
how do we know what's real? Your stomach answers first.
Before metaphysics, before the abstract theorem,
there's the immediate, the physical, the thirst

that defines existence in the most basic terms:
the body knows what the mind tries to deny.
Hunger was my first, my most honest teacher,
showing me the line between living and the lie

that comfort tells. Hunger taught me ethics—
when you're starving, morality becomes a luxury.
The right and wrong of well-fed people
don't apply when your belly's in mutiny.

Hunger taught me economics before I knew the word:
scarcity creates value, need creates drive.
It taught me that abundance is a fiction,
that survival is the most alive

thing you can feel. Hunger taught me politics:
the powerful have food, the hungry have dreams.
It taught me that power is the ability
to fulfill or withhold the means

to existence. But most of all, hunger taught me art—
the art of the necessary, the beauty of the raw,
the poetry of an empty stomach,
the clarity that comes when you've hit

the bottom and realize there's nowhere lower
to go. Hunger was my first, my truest muse.
It stripped away everything non-essential,
showed me what I had to lose

and what I was without the extras.
Hunger taught me everything
before I read a single word.
The rest was just the dressing
on a truth I'd already heard.`
  },
  {
    title: "The Art of the Necessary",
    content: `Necessity has no morality—it has only teeth,
and it will eat your personality,
your ethics, your beliefs beneath

the weight of what must be done.
This is the art I mastered:
doing what can't be undone
in moments that moved too fast,

too urgent for philosophy,
too desperate for prayer.
When necessity knocks,
you don't have the luxury

to debate the ethics of the door.
You open it or you die.
Simple as that.
The art of the necessary

is the art of the now,
the art of survival,
the art of becoming

what you must become
to become what you are.
It's not pretty.
It's not poetic.

It's just necessary.
And in that necessity,
there's a kind of beauty—
the beauty of truth,

the beauty of action,
the beauty of doing
what must be done
when it must be done,

regardless of what you thought
you would do,
regardless of who you thought
you were.

The art of the necessary
doesn't care about your feelings,
your plans, your dreams.
It only cares about

the next breath,
the next step,
the next moment
when you choose

to live or to die.
And in that choice,
you find yourself—
not who you wanted to be,

but who you had to be.
Which, in the end,
is the only self
that ever really mattered.

The art of the necessary—
I didn't learn it in a book.
I learned it in the trenches,
in the moments when I looked

at the abyss
and the abyss looked back
and I had to decide
whether to blink

or to become
the abyss myself.
I chose to become.

And that's the art's final lesson:
necessity doesn't just make you do things,
it makes you become things—
harder, stronger, more real

than you ever thought
you could be.
The art of the necessary
is the art of becoming

who you were always meant to be,
not in the fairy-tale sense,
but in the real sense—
the sense of survival,

the sense of truth,
the sense of being
exactly who you need to be
exactly when you need to be it.

Nothing more.
Nothing less.
And in that nothing,
everything.

The art of the necessary
is the art of letting go
of everything you thought you knew
about yourself

to become what you must become.
It's the art of the clean break,
the art of the sharp decision,
the art of the moment

when everything changes
and nothing changes
and you are finally,
truly,

free.

Not free in the way
you imagined,
but free in the way
that matters—

free to survive,
free to choose,
free to be

what you must be.
That's the art.
That's the necessity.
That's the truth

that saves you
not from death,
but from lying
to yourself

about who you are
and what you need.
The art of the necessary
is the art of the real.

And the real is always
what saves us
in the end.

Not the pretty,
not the polite,
not the popular—

but the real.
The necessary.
The art.

I learned it.
I lived it.
I am it.

And in that being,
there's a kind of peace—
the peace of knowing

exactly who you are
when everything else
falls away.

The art of the necessary.
Learn it.
Live it.
Love it.

It's the only art
that ever truly matters.`
  }
];

// Generate static params for all poems
export async function generateStaticParams() {
  
  const slugs = [
    "the-funeral-for-fairy-tales",
    "my-first-philosopher-was-hunger", 
    "the-art-of-the-necessary"
  ];
  
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each poem
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const slugToTitle: Record<string, string> = {
    "the-funeral-for-fairy-tales": "The Funeral for Fairy Tales",
    "my-first-philosopher-was-hunger": "My First Philosopher Was Hunger",
    "the-art-of-the-necessary": "The Art of the Necessary"
  };
  
  const title = slugToTitle[slug];
  
  return {
    title: `${title} | Poetry | Elvis Tapfumanei`,
    description: `Read "${title}" from Republic of Wolves - a poetry collection by Elvis Tapfumanei.`,
  };
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const slugToIndex: Record<string, number> = {
    "the-funeral-for-fairy-tales": 0,
    "my-first-philosopher-was-hunger": 1,
    "the-art-of-the-necessary": 2
  };
  
  const poemIndex = slugToIndex[slug];
  
  if (poemIndex === undefined || !poems[poemIndex]) {
    notFound();
  }
  
  const poem = poems[poemIndex];
  const prevPoem = poemIndex > 0 ? poems[poemIndex - 1] : null;
  const nextPoem = poemIndex < poems.length - 1 ? poems[poemIndex + 1] : null;
  
  const indexToSlug: Record<number, string> = {
    0: "the-funeral-for-fairy-tales",
    1: "my-first-philosopher-was-hunger",
    2: "the-art-of-the-necessary"
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-6">
          <Link 
            href="/poetry" 
            className="inline-flex items-center gap-2 text-warm-gray-600 hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Poetry
          </Link>
        </div>
      </section>

      {/* Poem Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <div className="flex-1">
                <div className="flex justify-center mb-8">
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl w-96 md:w-[500px] lg:w-[600px]">
                    <img 
                      src="/rol-image.webp"
                      alt="Republic of Wolves - Poetry Collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal text-center">
                  {poem.title}
                </h1>
              </div>
              
              <div className="hidden lg:block w-64 pl-8 text-right">
                <p className="text-warm-gray-600 mb-4">
                  From the collection <em>Republic of Wolves</em>
                </p>
                <a 
                  href="https://www.amazon.com/Republic-Wolves-Elvis-Tapfumanei/dp/B0DFKJY2WJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors text-sm"
                >
                  Buy the complete collection
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {poem.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                return (
                  <p key={index} className="text-lg leading-relaxed text-warm-gray-700 mb-6 font-serif">
                    {paragraph}
                  </p>
                );
              })}
            </div>
            
                        
            {/* Navigation */}
            <div className="mt-16 flex items-center justify-between">
              {prevPoem && (
                <Link
                  href={`/poetry/${indexToSlug[poemIndex - 1]}`}
                  className="flex items-center gap-2 text-warm-gray-600 hover:text-charcoal transition-colors"
                >
                  <ArrowLeft size={20} />
                  <div>
                    <div className="text-sm text-warm-gray-500">Previous</div>
                    <div className="font-medium">{prevPoem.title}</div>
                  </div>
                </Link>
              )}
              
              {nextPoem && (
                <Link
                  href={`/poetry/${indexToSlug[poemIndex + 1]}`}
                  className="flex items-center gap-2 text-warm-gray-600 hover:text-charcoal transition-colors ml-auto"
                >
                  <div className="text-right">
                    <div className="text-sm text-warm-gray-500">Next</div>
                    <div className="font-medium">{nextPoem.title}</div>
                  </div>
                  <ArrowRight size={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
