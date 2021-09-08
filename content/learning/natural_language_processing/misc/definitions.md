# Definitions

### Hill ACL 2016

proposed using Word2Vec embeddings to train RNNs, in supervised manner,
to predict words given their definitions.

# Dhingra 2017

(Dhingra et al., 2017) proposed to represent OOV words by fixed random vectors. While this has
shown to be effective for machine comprehension, this method does not account for word semantics
at all, and therefore, does not cover the same ground as the method that we propose.

### Long et al 2016

Another related work by Long et al. (2016) uses dictionary definitions to provide initialization to a
database embedding method, which is different from directly learning to use the definitions like we
do.

### Bahdanau Arxiv 2017

https://arxiv.org/pdf/1706.00286.pdf

Never published, called trivial by reviewers.

Proposed method for predicting embedding of out-of-vocabulary (OOV) words.
Works better than network trained end-to-end on reading comprehension, recognizing
textual entailment and language modeling.

Idea: compute embeddings of rare words on the fly using auxiliary data i.e. word definitions
(definition reader). Use pretrained GLoVE vectors, 300d trained on 840 billion words. Consider
3 definition readers:

1. mean pooling i.e. average of definition words' embedding
2. mean pooling + linear transformation
3. LSTM


### Bosc  Empirical Methods in Natural Language Processing (2018)

https://aclanthology.org/D18-1181.pdf

Train embeddings using dictionary and recursiveness. Use LSTM to process definition of word
to predict its corresponding word embedding. Train in supervised manner.

Oddly, use input embeddings and output embeddings, and add loss to minimize inconsistency.

good background

"Extremely data-efficient, as it creates representations of new words in one-shot
(i.e the definition)"



### Nishida ACL Workshop on Representation Learning for NLP 2018

(https://aclanthology.org/W18-3007.pdf)
Built off Bahdanau 2017. proposed adding attention mechanism and using definitions for all words, not just
out-of-vocabulary words. 

### Pappas, Mulcaire and Smith Arxiv 2020

Grounded Compositional Outputs for Adaptive Language Modeling

https://arxiv.org/pdf/2009.11523.pdf

Motivation: don't want predetermined vocabulary size. Propose compositional output embedding layer
that uses info from structured lexicon (wordNet).

Claim: Show that performance gains are driven by increased accuracy on low-frequency words.

Idea: We can think of last layer as being "output embedding," where each row is an embedding
for a particular word. Rather than having a fixed number of rows, we can build rows on the fly
using our input embedding matrix combined with definitions from WordNet combined with semantically
related words.

Encoding word using character sequence + external knowledge base (structured lexicon WordNet) +
defintiions. Train neural network to output a word's embedding.

Hypothesized that main benefit comes from rare words in training data. Based on word frequency,
Groc performs best on rare words.

### Kim and Jeong IEEE Access 2021

Mirroring Vector Space Embedding for New Words

Propose way to embed new words in learnt embedding model, without retraining it.

Idea:
1. When new word detected, get semantic data for new word from other sources; filter
  for data that contains only known words
2. Embedding of semantic data passed to second model to predict embedding of new word
3. Train model by pretending known words are unknown and using MSE on predicted embedding vs actual
  embeddings 


predict embedding value of a word by learning vector space using explanations
of the word.

Advantages: flexibility for external resources, reusability for training, portability 
to work with other models