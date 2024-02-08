Feature: count words, characters and check keyword density
    
    Scenario: Count Words and characters
        Given The user opens the wordcounter application
        When The user puts the text "Hello word is my real name but i want to say hello to my word and is´t time to believe in the word because i feel to say hello is from another word"
        Then The system shows the number of words "33" and the number of characters "147"

    Scenario: Check keyword density
        Given The user opens the wordcounter application
        When The user puts the text "Hello word is my real name but i want to say hello to my word and is´t time to believe in the word because i feel to say hello is from another word"
        Then The keyword density section shows
        | words |density|
        | word  | 4     |
        | hello | 3     |
        | say   | 2     | 