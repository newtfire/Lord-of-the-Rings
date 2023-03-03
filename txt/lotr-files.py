import spacy
import os

nlp = spacy.load('en_core_web_md')

workingDir = os.getcwd()
print("source-txt" + workingDir)

insideDir = os.listdir(workingDir)
print('01-The_Fellowship-Of-The_Ring.txt', '02-The-Two-Towers.txt', '03-The-Return-Of-The-King.txt' + str(insideDir))

CollPath = os.path.join(workingDir, 'source-txt')
print(CollPath)
