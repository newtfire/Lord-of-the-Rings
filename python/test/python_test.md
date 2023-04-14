# Python and Documentation Test

- Like most python scripts you first `import os` `import spacy` `import re as regex`
and for this nlp python script we import `import PySaxonProcessor`. 

- For `nlp = spacy.load('en_core_web_lg')` we used to sort from large text documents for the lord of the rings.

- Then we set the `CollPath` variable to reach into the `source-xml` directory. 

- Then we defined the nlp output variable collection to `xmltagger`.

- to configure this BEFORE we send the tokens off to nlp() for processing we declared a variable `config` which 
used a boolean string of data. 

- Next we used an `add_pipe` function and declared it ruler for all of the rules we needed 
to add to the processor. 

- Next we made a list called `patterns` which recognizes a wrong entity tag and corrects it with the span_ruler. 

- Next we set a definition function to bind `readTextFiles` to import each individual file.

- In `with PySaxonProcessor(license=False) as proc:` we changed to the Saxon processor to read files with XPath.

- Then we used `xpath = xp.evaluate('//book//p ! normalize-space() => string-join()')` to 
get the string() value of all the <p> elements that are descendants of <book>. Then it sends the `xpath` variable to a string function called `str(xpath)`.

- Then we sent the str function into a ` regex.sub()` function, which we called `cleanedUp`. 


- Next on the python file we used another definition called `entitycollector` which we're printing out as much we can from spaCy's classification of named entities.

- The next definition function we used is called `writeSortedEbntries` which concatenates the output. 

- Next definition is the most crucial aspect of the file which takes the regex we cleanedup and outputs the XML tags the NER algorithm specifies in the books. 

    - This definition is called `xmlTagger(sourcePath, SortedDict)`.
    
- Lastly, we use the `assembleAllNames(CollPath)` which just delivers the collection path up to the first function in the sequence.
