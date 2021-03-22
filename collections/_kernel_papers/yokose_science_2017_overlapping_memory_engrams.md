---
layout: post
author: Yokose, ..., Inokuchi (Science 2017)
title: Overlapping memory trace indispensable for linking, but not recalling, individual memories
date: 2021-03-21
tags: memory-engrams amygdala auditory-fear-conditioning conditioned-taste-aversion optogenetics
---

## Research Questions

Previous work ([Rashid et al. 2016](../_kernel_papers_drafts/rashid_science_2016_competition_memory_engrams.md),
[Cai et al. 2016](cai_science_2016_shared_memory_engrams.md)) showed that conditioning
two unrelated conditioned stimuli (CSes) close in time would result in an overlapping memory engram
(which I call an __entangled__ engram).

- If two fear conditionings use separate modalities (here, taste and tone), can we entangle the memories
 through repeat co-exposure? Answer: yes.
- What is the neural basis of the entangled memories? The two engrams have overlapping neurons.
- Are the overlapping neurons necessary to retrieve either memory separately? No.
- Are the overlapping neurons necessary to retrieve the linked memory? Yes.

"Memory traces for two independent 
emotional memories in the brain partially overlapped when the two memories were retrieved 
synchronously to create a linkage. Suppressing the activity of the overlapping memory
trace interrupted the linkage without damaging the original memories."

## Experiments

### Exp 1 (Behavior)

- Mice trained conditioned taste aversion (CTA) Days 5-6, then auditory fear conditioning (AFC) on Day 10.
- On Day 11, some mice had CS1 (taste) and CS2 (tone) paired during repeated coretrieval sessions (RCS)
- Control mice did not hear tone during retrieval sessions

![1A](yokose_science_2017_overlapping_memory_engrams/1A.png)

- During subsequent CTA test, mice froze, indicating taste had become linked to fear of tone-predicting shock
- During subsequent CTA test, control mice froze less
- Takeaway: Co-presenting stimuli links two already-formed memory engrams

![1EF](yokose_science_2017_overlapping_memory_engrams/1EF.png)

### Exp 2 (Behavioral & Neural)

- Perform conditioned taste aversion (CTA) and auditory fear conditioning (AFC). I could not find
  the spacing between these two conditioning events in the paper or in the supplement.
- Inject protein synthesis inhibitor anisomycin (or vehicle, control)
  after Test 1 (day 12)

![1G](yokose_science_2017_overlapping_memory_engrams/1G.png)  

- Anisomycin disrupted CTA aversion 24 hours later (H) and AFC aversion 48 hours later (I)

![](yokose_science_2017_overlapping_memory_engrams/1HI.png)

- For control group that wasn't presented with CTA and AFC simultaneously, anisomycin impaired
CTA retrieval 24 hours later (J) but did not affect AFC aversion 48 hours later (K)

![](yokose_science_2017_overlapping_memory_engrams/1JK.png)

- Percentage of the coshared neuronal population in amygdala between CTA and AFC
  to total ensembles activated during retrieval was 15.2% (coretrieval), 9.1% (control), 
  and 8.2% (no-reactivation).

![2A](yokose_science_2017_overlapping_memory_engrams/2A.png)

![2F](yokose_science_2017_overlapping_memory_engrams/2F.png)

- Takeaway: Impairing one engram only affects the other engram if the two engrams have been linked
  by co-presentation of the taste and tone stimuli
  
### Exp 3 (Neural)

- Optogenetically suppress AFC neurons during repeated coretrieval sessions

![3J](yokose_science_2017_overlapping_memory_engrams/3J.png)  

- Optical silencing of AFC engram during repeated coretrieval sessions had no effect on retrieval
  of the original CTA and AFC memories

![3KL](yokose_science_2017_overlapping_memory_engrams/3KL.png)

- Optical silencing of AFC engram during repeated coretrieval sessions prevented freezing in
response to CTA (animal was no longer terrified of bitter water)

![3M](yokose_science_2017_overlapping_memory_engrams/3M.png)

- Ratio of overlapping cells was significantly reduced by optical silencing
- Takeaway: Optogenetic silencing of one engram while the other is acquired prevents
the two engrams from becoming linked

![3O](yokose_science_2017_overlapping_memory_engrams/3O.png)

### Exp 4 (Neural)

- Don't understand

### Exp 5 (Neural)

- Test whether overlapping neurons cause taste-induced freezing by silencing
only overlapping neurons

- Two groups were subjected to the CTA retrieval test with or without
  optical silencing (CTA-paired or CTA-unpaired,
  respectively)
  
- Two other groups were subjected to the AFC retrieval test
  with or without optical silencing (AFC-paired or AFC-unpaired,
  respectively).

![4H](yokose_science_2017_overlapping_memory_engrams/4H.png)

- CTA aversion unaffected by silencing overlapping neurons (J)
- AFC freezing unaffected by silencing overlapping neurons (K)
- Silencing overlapping neurons significantly reduced taste-induced freezing(I)

![4IJK](yokose_science_2017_overlapping_memory_engrams/4IJK.png)

- Takeaway: overlapping neurons link one engram (shock and freezing) to another engram
  (taste). Silencing overlap doesn't impair either separate memory, but does impair link
