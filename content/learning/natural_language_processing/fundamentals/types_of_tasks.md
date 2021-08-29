# Types of Tasks

## Next Sentence Prediction

## Masked Language Modeling (MLM)

Mask tokens in a sequence, and ask the model to fill them in. This differs from causal language
modeling in that MLM has access to both the left and right contexts, not just the left context.

## Causal Language Modeling (CLM)

Mask tokens in a sequence, and ask the model to predict them. This differs from masked language 
modeling in that CLM has access only to the left context, not the right context.

## Text Generation

Given a context, generate a continuing portion of text that coherently follows the given context.
TODO: how is this different from causal language modeling?

## Named Entity Recognition

Classify tokens according to a class e.g. a person, place or thing.
- [CoNLL-2003](../datasets/conll.md)

## Summarization

Given a text, generate a shorter text that contains the essential information.
- CNN / Daily Mail

## Sequence Classification

Classify a sentence. For instance, sentiment analysis might ask whether a sentence has a positive or
negative connotation, or whether two sentences are rephrasings of one another.

## Extractive Question Answering 

Also known as __reading comprehension__, this task entails receiving a question, reading a passage and 
extracting an answer to that question from the passage. Examples:
- [SQuAD](../datasets/squad.md)
- [NewsQA](../datasets/newsqa.md)


## Translation

Given a sequence in one language, convert it to a sequence in another language with the same meaning.

- []