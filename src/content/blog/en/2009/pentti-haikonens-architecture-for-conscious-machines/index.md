---
title: "Pentti Haikonen's architecture for conscious machines"
date: 2009-12-10
categories: 
  - "artificial-intelligence"
  - "cognitive-science"
  - "machine-consciousness"
tags: 
  - "haikonen"
---

### Pentti Haikonen's architecture for conscious machines

By Trung Doan (doanviettrung a\_t gmail dot com).

Haikonen's contribution to the machine-consciousness endeavor is an architecture based on cognitive principles. He also developed some electronic microchips as a first step to building a machine based on that architecture.

Below, we look at how a Haikonen machine might achieve consciousness once built, by examining some of its cognitive capabilities, and in the process will briefly discuss the Haikonen architecture.

The Haikonen machine perceives

Say the Haikonen machine's cameras are  focusing on a yellow ball. The cameras' pixel pattern is fed into a preprocessor circuit which produces an array of, say, 10,000 signals, each signal carried by, for example, a wire. One wire is the output from the preprocessor's "roundness" circuitry and, in this case, the signal is On. Another wire, from the "squareness" circuitry, would be Off, i.e. carrying no voltage. A group of wires is the output from the spectrum-analysis circuitry, the wire corresponding to frequencies which we humans recognise as "yellow" is On while "red", "blue", etc., wires are Off. There would be many other groups of wires depicting size, brightness, edges, etc.

The machine does not internally represent the ball as a round graphic, nor a set of numbers representing diameter, color, etc., but by this signal array. Haikonen calls this a "distributed signal representation".

Suppose the machine is shown several balls of different sizes, colors, etc., one at a time, and each time its microphone hears the sound pattern we humans understand as the word "ball". Because they appear at the same time repeatedly, the machine associates the sound pattern and the visual pattern together. The making of associations is how the machine's perception is done.

After several different balls are associated with that sound pattern, the machine finally learns to associate the "ball" sound pattern with anything that is round.

<!--more-->

#### It learns, remembers, and recalls

A word of warning: This Section is somewhat heavy going, but once understood will give a fairly good understanding of the machine's architecture and cognitive capabilities.

For Haikonen's associative machine, learning, memorising, and recalling are just a few different aspects among many of the one thing it does - making associations.

When the utterance "ball" is heard, the microphone's aural preprocessor circuit translates the sound vibrations into a signal array at its output side. Again, this is a bunch of, say, 1,000 signal lines, in which some wires indicate the various harmonic frequencies detected by the circuit's spectrum analyser, and some indicate the temporal pattern, etc. This signal array is broadcast to large numbers of "neuron groups", several of which will store this signal pattern, using one of 2 methods.

## The circulation method:

Some neuron groups store the "ball" utterance this way: Each input line feeds straight through one collection of several dozen transistors, diodes, etc., (a Haikonen "neuron" in this "neuron group") and appears at the output side. Hence, these 1,000 neurons' outputs have the "ball" utterance's pattern of On's and Off's. But this pattern doesn't disappear when the preprocessor processes the next utterance. Each output signal line is, the way it is built, wired back to its own input. Thus the pattern just circulates itself indefinitely until some external control signal turns it off.

The above method suits limited-capacity and short-time working memories, it is expensive because each memory occupies a whole neuron group and keeps its circuits running hot. Another method, suitable for long term and vast memory stores, is related to learning, and it uses "synapses", explained below.

## The synaptic method:

Apart from the above-mentioned collection of transistors and diodes, a typical neuron also has thousands of input lines, each coming from another neuron in a neuron group elsewhere. The job of these thousands of input lines is to help the neuron decide whether to pass the main input signal to the output side. Each of these thousands of "associative inputs" connects to the neuron via a transistor  playing the role of a "synapse". Every time the main input signal and a particular associative input signal go On or Off at the same time, its synapse transistor is fed higher and higher voltage. After a sufficient number of consecutive times, the synapse transistor's output permanently latches from no voltage to positive voltage. Thus, the neuron has learned to associate an associative input with this main input, via this associative input's synapse. Scores of other associative inputs, via their own synapses, can do that too. From now on, whenever the associative input on any of these synapses is On, the neuron will want to turn On. The more of them, the more likely it will turn On.

For example, if this neuron has 15,000 associative inputs, and 500 of them have synapses that have latched On, then with 1 such associative input sending an On signal to its synapse, the neuron wants to turn On, and with all such 500 associative inputs On, it will turn On (unless inhibited by some external control signal). When the neuron does turn On, it produces an output pulse just like the one on the main input signal that was used during the learning-to-associate time.

Consider a neuron group among those receiving the broadcast from the aural preprocessor. It has 1,000 neurons receiving the aural preprocessor's 1,000 output signal lines as its main inputs, and from near and far there are 15,000 associative inputs coming into this neuron group's each and every neuron, as above. Unlike many others, however, this particular neuron group receives its associative inputs from, among other sources, the visual preprocessor (which takes up 10,000 out of the 15,000 associative input lines). Therefore, it associates the visual pattern of a ball with the aural pattern of the utterance "ball", by relevant synapses (out of the neuron group's 15,000 \* 1,000 = 15 million synapses) latching On.

From now on, whenever the above 10,000 associative inputs carry the visual representation of a ball, the neuron group turns On, producing the "ball" utterance pattern. Say this pattern consists of 1,000 lines, of which 270 particular lines are On and the other 730 are Off. It is the neuron group's relevant 270 neurons turning On, producing a voltage pulse, and the other 730 staying Off that produces this pattern.

Thus, by the above synaptic method, this utterance has been stored then later recalled by association.

## The versatile neuron group

Can other patterns, apart from the visual representation of a ball, evoke the "ball" utterance representation from the above neuron group? Yes, they can. Say among the neuron group's 5,000 remaining associative inputs , 500 come from the preprocessor circuit of the right hand's skin sensors. If a ball was repeatedly put on this hand while the word "ball" was spoken, this neuron group will have made the association, and now a corresponding skin sensor pattern will activate the above 270 neurons to turn On this utterance representation.

Can this same neuron group store and recall aural output patterns other than "ball"? Yes it can. The above 270 neurons turning On will produce the "ball" utterance representation, but another 270, or 681, etc., neurons turning On will produce another pattern. Theoretically there could be 2 (each line is Off or On) raised to the power of 1,000 (lines) distinct output patterns, however the practical number will be far less to avoid interference between patterns, and to avoid putting all eggs in one neuron group basket.

#### It can speak, and it has inner speech

If the above utterance pattern is fed to the Haikonen machine's vocalising circuit, the circuit's speaker can produce the sound pattern we recognise as the utterance "ball".

Furthermore, if this pattern is fed to the output side of the aural preprocessor circuit, then the effect is similar to that of the machine hearing the utterance, except in this case it is hearing its own "inner speech".

#### Revisiting perception: How memory helps perception

Even if the Haikonen machine does nothing but gazes at and listens to the world, it continually stores things in its memory and builds up its knowledge of the world.

It has stored its representation of a yellow ball. If it has seen a blue ball, this visual memory would be stored too, together with an episodic memory of when it saw it. If it has seen a ball rolling, this bit of general knowledge would also be stored.

Every time the machine detects a ball, its instantaneous internal representation of this object is broadcast around the brain and this evokes all of its other internal representations to do with balls. Together, they represent the Haikonen machine's knowledge of the world, and evoking them is how the machine perceives.

Compare this: A computer with a camera attached sees a yellow ball. The pixel pattern is processed to detect boundaries, etc., in the end producing sets of numbers representing diameter, size, etc. If this is a quality-control computer on a ball-production line, it checks whether the roundness, diameter, etc., are within specifications, then runs If-Then statements to decide what to do. This is what its 1s and 0s do.

When a young Haikonen machine sees a yellow ball, what the 1s and 0s in its electronics do is to evoke patterns representing "Have seen it before", "Scared of hurling balls", "Have seen a blue ball, too", "Have seen ball rolling", "Have heard the 'ball' utterance". As it accumulates life experience, and makes deductions and decisions, even more representations get created, stored and now evoked: "Have previously accidentally touched it with hand, thus rolling it", "Therefore hand can roll it", etc.

Haikonen calls this perception with "grounded meaning", i.e. the meaning is grounded to the world.

#### It perceives its own body and innards

Assuming that its hands and skin are endowed with touch sensors, then when its hand touches its skin, the concurrence of the 2 sets of signals would allow the machine to deduce that the thing being touched is its skin, rather than something external to it. Likewise, early in the Haikonen machine's cognitive life, as its hand moves in front of its cameras, its camera would, probably like babies discovering their hands and feet, discover that this object does not belong to the world out there but sends the brain sensations from inside.

The battery's preprocessing circuit will also output a signal array, but with far fewer signals. Processing it gives a perception of the machine's own battery level. This then adds to the collection of all the percepts that the electronic brain has about its body, from skin to hands to innards.

#### It imagines

The Haikonen machine can readily imagine things it has never observed. For example, having learned what a yellow ball is and having seen it rolling down a slope, next time it sees (or thinks of) a yellow ball, it can imagine a ball of a different color or a ball rolling up a slope. This imagination happens as follows: the distributed signal representation "yellow ball" evokes another distributed signal representation "ball", but the "yellow" signal line in the signal array is turned Off and another is turned On. Or, a "ball rolling" sequence is evoked from memory, then the machine reverses the temporal sequence.

#### It has flows of mental images

Say the machine's camera is now focusing on a yellow ball in front of it. From afar, all we see is a machine whose built-in cameras focus on a ball, it seems to do nothing much. But move closer, look at the machine's electronic brain (by watching signals on probes which the machine's builder has attached to signal lines in the brain), and we will see a busy series of events taking place all over the brain. The first thing that happens, is the emergence of a signal pattern from the camera's preprocessor circuit, whose "roundness" and "yellow" lines are on, among others. The next thing is the "ball" sound pattern, the "ball rolling" knowledge, and the visual memory of a "blue ball" which it has seen before, etc. Then these representations themselves may in turn evoke yet others: the "roll faster down a steeper slope" knowledge, the "ball rolling uphill" imagination, the "several balls rolling together" imagination, etc.

Say previously a yellow ball was hurled at the machine, damaging its skin. As part of the building of the machine, it was given a rule that says "If faced with something that has the potential to cause damage, then be prepared to move away from it". The pattern of the yellow ball evokes from memory the pattern depicting this unhappy encounter, and in turn this pattern will condition the machine's motors to move the machine backwards, by associatively evoking a distributed signal representation priming such a move. This priming, in turn, causes results which some internal sensors report to the brain (a motor sensor reports that higher current is pouring in, a brake sensor reports that the brake is tensing up, etc.).

The first wave of associative evocations from the visual preprocessing circuitry, and the evocations from them in turn, and the next wave of evocations, and so on, as exemplified above, constitute the machine's flow of mental imagery.

A cow probably has a limited flow of inner images too, triggered by blades of grass. But if it does not know about this flow, then the cow is not conscious. Does the Haikonen machine know that it has this flow, or at least some parts of it,? We shall see, further below.

#### It has emotions

At any given time, in any situation, numerous distributed signal representations are active because they come in from sensors or evoked or imagined. Lots are happening now. We know that the machine should pay more attention to the possibility of the ball being hurled at it, rather than on imagining non-existent purple balls rolling uphill. But how does the machine know that? The main part of the answer, in cases like this, is emotions.

Haikonen sets out the basics for the emoting by a combination of neuron-level rules and global rules.

The neuron-level rules are about Match, Mismatch, and Novelty. Say the machine is watching a yellow ball, and nothing happens. The neuron group processing this signal array outputs a "Match" signal, in addition to the signal array itself. This is because a signal array fed to its associative inputs represents a yellow ball seen a split second before, and this associative input matches the main input array. Now the ball starts to move away. Immediately after it starts moving, the new input array is different to (smaller than) the pattern at the associative input, and a Mismatch signal is generated, at least for a while, attracting attention. If now the machine looks at a square box, something it has never seen, then the associative inputs contain nothing. With nothing to compare to, the neuron group outputs a Novelty signal.

Apart from Match, Mismatch, and Novelty, the machine also has rules to build its capability to know what is pain and what is pleasure, plus what is good and what is bad. A few rules are something like: "Pain is Bad", "Tearing of skin's sensors is Pain", and "Avoid Bad things". Another set of  rules, which gets evoked when the battery is getting charged, reads something like: "Battery level getting from low to higher, is Pleasure", "Pleasure is Good", and "If it feels Pleasure, keep on doing it ".

In nature, presumably these rules are from evolution, with individuals and species stumbling upon such rules thriving and passing on in their genes as they reproduce. Whether the Haikonen machine can learn these rules by evolving, or they must be given by its builder, is not clear. The former would be more satisfying.

Together, these reactions form the machine's emotions and their associated behaviours - from Fear (Bad and Pain => Withdraw) to Curiosity (Good and Novelty => Approach) to Desire (Good and Pleasure => Approach), etc.

#### It pays attention to what's important to it

The memory patterns representing the past unhappy "hurling ball tears skin" encounter is not stored in a neutral way. What is stored is not just the internal representations of the ball, of visual memory of the ball hurling at the machine, and of the skin sensors' reports, but also the fact that the tearing reported by the sensors was Pain, and that this was Bad, plus the machine's reactions of withdrawal at that time. All these representations are usually bound together. The Pain and Bad representations give the memory patterns a high emotional significance value.

This high emotional significance, when the above memory patterns are evoked by the pattern of the yellow ball, leads to the machine's brain giving high attention to them. What this means is that these patterns stay around for longer, the voltages on the signal arrays' signal lines stay high, while other signal arrays (such as the "purple ball rolling up" imagination) die out.

Due to its associative nature, just about every signal pattern in the brain will evoke every other, and the result is a huge collection of signal arrays being activated. If the machine does not select a subset to pay attention to, it will probably day-dream all day. Emotional significance is a factor modulating attention.

An aside about the "everything evokes everything else" above: If each possible representation (a particular knowledge, imagination, motion, etc.) were thought of as a point, and we draw lines connecting points that relate to one another, then this is a "social network graph". The human social network graph is said to have about 6 degrees of separation. This graph is likely to be much denser, with far fewer degrees of separation. Just about anything will quickly evoke everything else.

#### It introspects

So far, the inputs to the perception process are from sensors that sense external information (e.g. camera) or internal (e.g. joint). But what if the various signal arrays floating around in the brain (as they are output by perception processes, or evoked from memory, or made up by the imagination process) get connected to the input side of perception circuits? Nothing stops this, and Haikonen's architecture mandates it.

The result is that the machine's perception neuron groups not only help it to perceive the outside world or the body's internal hardware, and help initiate a flow of mental images as discussed above, but these circuits also let it perceive this very flow. This is introspection, this is the machine examining and perceiving its own mental flow. Unlike a cow or a traditional computer, the machine perceives what goes on in its brain.

#### Is the Haikonen machine conscious?

The Haikonen machine's claim to consciousness starts with its ability to perceive the outside world and its body. Each of these percepts is grounded to the world in its meaning.

More importantly, it has a flow of imagery in its electronic brain. Perhaps most importantly, it perceives that flow by looping images in the flow to the circuits involved in perception.

What if the machine can speak, and tell us of that mental flow and its perception of that?

Haikonen does have a theory for the machine to learn to understand natural language (the learning of the word "ball", mentioned above, is an example). This theory also enables the machine to form elementary sentences such as "ball round" or "ball not purple". We do not know if this is a good enough foundation for the machine to grow up - cognitively speaking - then one day say, on its own, "There is a flow of images inside, and I can perceive it". But then neither can preschoolers say such a sophisticated sentence.

Outwardly, the Haikonen machine is able to behave in some of the ways which humans interpret as emotional or motivated (e.g. withdrawing from sources of pain, cameras' gaze turn to and focus on unexpected events). If we look inside, we can see its motors tense up in response to fear, we can probe to see that its brain is introspecting, and we can recognise mental patterns as the emotions of fear, curiosity, surprise, etc. But if we can only watch its external behaviours, will we dismiss it as just a non-conscious computer carrying out its programmer's instructions? Perhaps we will be less dismissive if it rushes over, grabs our phone charger, and tries to charge its hungry battery.

#### The Haikonen machine on ConsScale

{mosimage} If consciousness is an all-or-nothing thing and the threshold is not set too high at human adults' level, then the Haikonen machine is conscious. If consciousness is a continuum, then putting the Haikonen machine on Raul Arrabales' [ConsScale](/en/pages/discontinued-resource/) would place it at about 6 o'clock on the ConsScale graph, scoring below the level of young human toddlers, and possibly on a par with some animals which we humans suspect to be minimally conscious.

{mosimage} Having said that, Haikonen's theory does not clearly show a path for the concept of "I" to emerge. Sure, the machine can perceive the world, its body, its mental flow. If it sees one person after another standing in front of it, finger pointing at himself/herself, saying "I", it probably can deduce that each person is an "I". In front of a mirror, it probably can even recognise itself. But from all of this, how does the machine eventually deduce the "I" as itself, then know that the perceptions and emotions going on are its own qualia? Haikonen comes tantalizingly close, but he has not provided the final step to answer this question.

For the answer, we just have to wait until a steel-and-silicon Haikonen machine is built then goes through the motions of learning and cognitively growing up. Building the machine is an extremely difficult engineering and intellectual feat, one that requires the attitude like the quote at the top of Haikonen's website, "Only the impossible is difficult enough".

#### REFERENCES

• Pentti O Haikonen: The Cognitive Approach to Conscious Machines. Imprint Academic, UK 2003 • Pentti O Haikonen: Robot Brains; circuits and systems for conscious machines. Wiley and Sons, UK 2007 • Haikonen's website at [http://personal.inet.fi/cool/pentti.haikonen/](http://personal.inet.fi/cool/pentti.haikonen/)

(It is better to go straight to the Robot Brains book, as many concepts in the 2003 book are repeated here. If the sight of a few diagrams showing AND gates and diodes seems scary, just ignore them. I am lucky to have Haikonen's 1999 thesis book at the Helsinki University of Technology, and actually I find it to be the best, but it is not available online or can be purchased).

\- Book Review: [Robot Brains](en/reviews/consciousness-books-reviews/book-review-robot-brains.html).

\- Consciousness based cognitive scale: [ConsScale](/en/pages/discontinued-resource/).
