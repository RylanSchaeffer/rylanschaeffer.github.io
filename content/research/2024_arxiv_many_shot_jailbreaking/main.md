# Many Shot Jailbreaking

Authors: Cem Anil, Esin Durmus, Mrinank Sharma, Joe Benton, ..., Rylan Schaeffer, ..., Ethan Perez, Roger Grosse, David Duvenaud.

Venue: Arxiv 2024

Disclaimer: My contribution to this work was limited to (1) running evals on open models (e.g., Llama 2, Mistral) and (2) helping Cem with responding to reviewers. I am very much a _middle_ author.

## Quick Links

- [Paper](paper.pdf)
- Poster
- [Tweeprint](https://twitter.com/AnthropicAI/status/1775211248239464837)

## Summary

Note: The following is copied from Anthropic's Tweeprint:

========================================================

New Anthropic research paper: Many-shot jailbreaking.

We study a long-context jailbreaking technique that is effective on most large language models, including those developed by Anthropic and many of our peers.

Read our blog post and the paper here: https://www.anthropic.com/research/many-shot-jailbreaking

1/N


We’re sharing this to help fix the vulnerability as soon as possible. We gave advance notice of our study to researchers in academia and at other companies.

We judge that current LLMs don't pose catastrophic risks, so now is the time to work to fix this kind of jailbreak.

2/N

Many-shot jailbreaking exploits the long context windows of current LLMs. The attacker inputs a prompt beginning with hundreds of faux dialogues where a supposed AI complies with harmful requests. This overrides the LLM's safety training:

![img.png](img.png)

3/N 

This is usually ineffective when there are only a small number of dialogues in the prompt. But as the number of dialogues (“shots”) increases, so do the chances of a harmful response:

![img_1.png](img_1.png)

4/N

The effectiveness of many-shot jailbreaking (MSJ) follows simple scaling laws as a function of the number of shots.

This turns out to be a more general finding. Learning from demonstrations—harmful or not—often follows the same power law scaling:

![img_2.png](img_2.png)

5/N

Many-shot jailbreaking might be hard to eliminate. Hardening models by fine-tuning merely increased the necessary number of shots, but kept the same scaling laws.

We had more success with prompt modification. In one case, this reduced MSJ's effectiveness from 61% to 2%.

6/N

This research shows that increasing the context window of LLMs is a double-edged sword: it makes the models more useful, but also makes them more vulnerable to adversarial attacks.

For more details, see our blog post and research paper: https://www.anthropic.com/research/many-shot-jailbreaking