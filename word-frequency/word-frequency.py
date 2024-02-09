import re
import matplotlib.pyplot as plt

def count_words_and_characters(file_path):
    # Read the file
    with open(file_path, 'r') as file:
        text = file.read()

    # Count words and characters
    words = re.findall(r'\b\w+\b', text)
    num_words = len(words)

    num_characters = len(text)

    # Count word frequency
    word_freq = {}
    for word in words:
        word_freq[word] = word_freq.get(word, 0) + 1

    # Print words and characters
    print(f"{num_words} words")
    print(f"{num_characters} characters\n")

    # Print word frequencies
    for word, freq in word_freq.items():
        print(f"{word}: {freq}")

    # Plot histogram
    plt.bar(word_freq.keys(), word_freq.values())
    plt.xlabel('Words')
    plt.ylabel('Frequency')
    plt.title('Word Frequency Histogram')
    plt.xticks(rotation=45)
    plt.show()

count_words_and_characters('lumu-text.txt') 

# computational complexity O(n)
