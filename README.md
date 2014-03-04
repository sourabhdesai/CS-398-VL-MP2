 This is a radial tree that represents the relations between words used in the book "Once and Future King".
 The tree starts with a sentinel node labeled "root" in the center of the circle and branches outwards to the ten most common words in the corpus.
 From these ten words, I used Wordnet to find all synonyms to each word that was also used in the corpus.
 This was recursively repeated on for three levels of iteration. I could have gone longer but would have sacrificed the cleanliness of the tree.
 To extract this data, I did not use the NLTK library. I decided I wanted to try out the Natural Module for Node.js. This module has a lot of similair features as NLTK. It has tokenization, porter stemming, stopwords removal, word distance calculation, phonetical analysis, and complete a complete WordNet interface.
 It also made sense to use Javascript in the Natural Language analysis as I was dealing with JSON data right from the beginning so it was a much smoother transition to get the data into the format I wanted.
 The biggest problem I had was in the fact that I had unintentionally made asynchronous calls. I was trying to access the data before it was done processing and there was no clear way of telling when it would be done. My HORRIBLE solution was to use a delay funcion to delay retrieving my data for a set period of time after which my data would undoubtedly be finished processing.
 I enjoyed using this library as I know Javascript better than Python and now know a powerful tool I can use in Node.js applications.
 You can view the code for this site at: https://github.com/sourabhdesai/CS-398-VL-MP2
 The code for the NLP analysis is in the ["MP2_NodeApp"](https://github.com/sourabhdesai/CS-398-VL-MP2/MP2_NodeApp) directory which can be found from the root directory