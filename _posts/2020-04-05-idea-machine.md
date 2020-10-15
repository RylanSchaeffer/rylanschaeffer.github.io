---
layout: post
title:  The Idea Machine 
tags: idea-machine 2020 MIT Harvard
---

## Learning at Harvard and MIT in the Age of Artificial Intelligence

### Background

One of my favorite books is <a href="https://mitpress.mit.edu/books/idea-factory">
The Idea Factory: Learning to Think at MIT</a> by Pepper White. It tells Pepper's story
as a student earning his Master's in Mechanical Engineering at MIT in the 1980s,
capturing his research, experiences and feelings of inadequacy first-hand. Forty years
later, as a Master's student at Harvard conducting research in MIT's Brain and Cognitive
Science Department, these posts are my stories, inspired by Pepper and in tribute to
those who came before. To paraphrase my favorite quote, "If I could see \[...\] an insight,
a new way of looking at it that would maybe, just maybe, find its way into future generations
\[...\] In the Eiffel tower of technology, I would be a rivet."


### Remote Learning

Because my grad dorm, my home department, and my lab building at MIT
 closed, I moved back home to California.
To support the exodus of students from campus, Harvard and MIT both switched
to remote learning, relying heavily on Zoom. The new system has its advantages and disadvantages.
On the plus side, lectures and meetings are recordable, I can hold private conversations
with other participants, and I can tune out if the speaker is uninteresting or wasting time.
On the negative side, I now wake up at 6 AM for my 9 AM MATH 110 lecture; speakers are unable
to read the room, and consequently blow through material
much more quickly than they would otherwisel no one respects meeting end times. Nearly every meeting
I've had since returning home has ran 15-45 minutes over, and people are quite shameless.

One perk of using Zoom is that if you have a green screen, you can display background images; using
red poster board paper, I did exactly that. So far my favorite background images to display
include screenshots of Professor Slotine mid-lecture (left) and Andrew Ryan's
Welcome to Rapture sign (right).

![](/assets/2020-04-05-idea-machine/slotine_2.png)

![](/assets/2020-04-05-idea-machine/bioshock.jpg)

Another difference between being present and being remote is that the likelihood of chance
encounters falls essentially to zero. This has forced me to be much more intentional with
how I socialize. If I don't reach out, the only people I see during a day are my parents.
If I do reach out, I need to do so days in advance, and with specific time intervals in
mind. It's honestly quite nice, but there's something insufficient about online interaction.


### Moral Dilemmas In the Face of Coronavirus

On Wednesday, Harvard Hillel hosted <a href="https://en.wikipedia.org/wiki/Michael_J._Sandel">
Professor Michael Sandel</a> and <a href="https://en.wikipedia.org/wiki/Shai_Held">Rabbi
Shai Held</a> for a discussion titled "Moral Dilemmas In the Face of Coronavirus: A
Conversation Between Michael Sandel and Shai Held." My parents and I watched the conversation
and enjoyed it tremendously. Both guests were incredibly well spoken.
I submitted the following question, which unfortunately went unasked and thus unanswered:
"As a young adult, some my age view society's largest challenges (economic inequality,
climate change, etc.) as the direct consequence of older generations enriching themselves
at our expense.  Now we're expected to further harm our already impoverished well-being
for these same older generations - why is this a fair request to impose on us?" I emailed
the question to Sandel - if he answers, I'll provide an update.

Two insights stuck with me, both made by Shai Held. The first was a comment that
while feminism has made great strides in
transforming traditional male jobs into respectable professions for women, very little
progress has been made towards making traditional female jobs (e.g. nurse) into respectable
professions for men.
The second was a comment about an insidiousness implication of meritocracy, that
"a perfectly meritocratic society is devoid of compassion," because if society is truly
perfectly meritocratic, then you deserve exactly what you have - nothing less and nothing
more. Both he and Sandel connected this back to the prevailing American sentiment that
the wealthy deserve their wealth because they earned it, which conversely implies that
the poor deserve their poverty.


### Coursework

On Thursday, I had my midterm for 2.152/9.110, Professor Slotine's Non-Linear Control
course. Topics cover different definitions of stability, proofs for showing the (in)stability
of systems, and robust/adaptive control. It was my first MIT graduate midterm,
and it went okay. Each problem on the exam was certainly solvable, but the
combined duration I would need to solve each problem
exceeded the available time. What was surprising for me is that while everything was
derivable (and indeed, that's how I approached each problem), it seemed to me
that in order to finish on time, one needed to have memorized/internalized the end
statement of most results. For instance, one problem asked us to design a switching
controller to track a specific trajectory $x_d$ in the third order system:

$$\dddot{x} + \ddot{x} + (1 + b^3)\dot{x} + 2 \cos(c) \cos(x)x^2  = u$$

where $$u = u(t, x, \dot{x}, \ddot{x}, \dddot{x}, \dot{x}_d, \ddot{x}_d, \dddot{x}_d)$$
is the control law. This is no different than the second order case: we start by defining our error
$$\tilde{x} = x - x_d$$ and a simplified system $$s = (\frac{d}{dt} + \lambda)^2 \tilde{x}$$
and then use Barbalat's Lemma on the the Lyapunov function candidate $$V(x,
\dot{x}, \ddot{x}) = \frac{1}{2}s^2$$ to show that with the right control law $$u$$,
the sliding condition is met, meaning $$s \rightarrow 0$$. But writing out the entire
derivation to design the right control law $$u$$ is time consuming.

I told myself that even if I don't receive top marks on the midterm, I went from having
never thought about a differential equation 8-9 years to at least receiving a passing
grade in a non-linear control course, and I can take pride in that.


### Dating Troubles

Before I moved to Harvard at the end of August, I had a chance encounter with an
acquaintance of
mine from undergrad. I asked her if she wanted to catch up, but we couldn't find time
with our busy schedules. Fast forward to Christmas break, and I reached out again. She
expressed interest in seeing me, but just when we were supposed to hang out, she
texted to say she had come down with strep throat. I figured if she was desperate enough
to feign strep throat to avoid seeing me, I should take a hint, so I didn't push the point.
I returned to Cambridge on December 30th, but surprisingly, we kept texting back and
forth. Eventually, she said she was feeling better and asked if I wanted to hang out,
so I told her that I was already gone. We continued chatting until we were
basically texting for an hour a day, every day, before bed. This continued for three
months or so, and we started calling, maybe two or three times a week, with longer text
conversations stretching into hours.

When coronavirus shuttered campus and forced me home, I was quite excited to see her.
I saw her once, but then California's shelter-in-place took effect and I haven't seen
her since. I can't tell whether I was so distasteful in our first in-person reunion
or whether the situation combined with personal details of her life has placed her
on edge, but she has stopped putting effort into responding to my texts and has declined
any effort I've made to call. I'm not sure of what I did wrong, but I'm
taking the hint. I jokingly tell myself that dating is the hardest unsupervised learning
problem.
