import os
import spacy


nlp = spacy.cli.download("en_core_web_md")
nlp = spacy.load('en_core_web_md')

workingDir = os.getcwd()
print("source-txt" + workingDir)

insideDir = os.listdir(workingDir)
print('01-The_Fellowship-Of-The_Ring.txt', '02-The-Two-Towers.txt', '03-The-Return-Of-The-King.txt' + str(insideDir))

CollPath = os.path.join(workingDir, 'source-txt')
print(CollPath)


def readTextFiles(filepath):
    with open(filepath, 'source-txt', encoding='utf8') as f:
        readFile = f.read()
        print(filepath)
    return

def assembleAllNames(CollPath):
    AllNames = []
    for file in os.listdir(CollPath):
        if file.endswith(".xml"):
            filepath = f"{CollPath}/{file}"
            # print(filepath)
            # print(readTextFiles(filepath))
            eachFileList = readTextFiles(filepath)
            # print(eachFileList)
            AllNames.append(eachFileList)
    print(AllNames)
    print(len(AllNames))
    return