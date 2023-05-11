from ..strings import *

def test_length_of_string():
    assert length_of_string("hello") == 5
    assert length_of_string("python") == 6
    assert length_of_string("") == 0
    
# return the last character of a string
def test_last_char(value):
    assert last_char("hello") == "o"
    assert last_char("python") == "n"
    assert last_char("") == ""

# return the first n characters of a string
def test_first_n_chars(value, n):
    assert first_n_chars("hello", 2) == "he"
    assert first_n_chars("python", 3) == "pyt"
    assert first_n_chars("", 2) == ""

# return the last n characters of a string
def test_last_n_chars(value, n):
    assert last_n_chars("hello", 2) == "lo"
    assert last_n_chars("python", 3) == "hon"
    assert last_n_chars("", 2) == ""

def test_reverse_string():
    assert reverse_string("hello") == "olleh"
    assert reverse_string("python") == "nohtyp"
    assert reverse_string("") == ""

def test_count_letters_alphabet():
    assert count_letters_alphabet("hello") == [('e', 1), ('h', 1), ('l', 2), ('o', 1)]
    assert count_letters_alphabet("python") == [('h', 1), ('n', 1), ('o', 1), ('p', 1), ('t', 1), ('y', 1)]
    assert count_letters_alphabet("") == []

def test_count_letters_freq():
    assert count_letters_freq("hello") == {'h': 1, 'e': 1, 'l': 2, 'o': 1}
    assert count_letters_freq("python") == {'p': 1, 'y': 1, 't': 1, 'h': 1, 'o': 1, 'n': 1}
    assert count_letters_freq("") == {}

def test_count_words():
    assert count_words("hello world") == 2
    assert count_words("I am a Python developer") == 5
    assert count_words("") == 0

def test_left_rotate_string():
    assert left_rotate_string("hello", 2) == "llohe"
    assert left_rotate_string("python", 3) == "honpyt"
    assert left_rotate_string("", 1) == ""

def test_right_rotate_string():
    assert right_rotate_string("hello", 2) == "lohel"
    assert right_rotate_string("python", 3) == "thonpy"
    assert right_rotate_string("", 1) == ""

def test_search_char_in_string():
    assert search_char_in_string("hello", 'h') == True
    assert search_char_in_string("python", 'z') == False
    assert search_char_in_string("", 'a') == False

def test_search_substring_in_string():
    assert search_substring_in_string("hello world", "world") == True
    assert search_substring_in_string("python programming", "java") == False
    assert search_substring_in_string("", "abc") == False

def test_sort_string():
    assert sort_string("hello") == "ehllo"
    assert sort_string("python") == "hnopty"
    assert sort_string("") == ""

def test_swap_chars_in_string():
    assert swap_chars_in_string("hello", 0, 4) == "oellh"
    assert swap_chars_in_string("python", 1, 5) == "pythno"
    assert swap_chars_in_string("a", 0, 0) == "a"

def test_insert_chars_in_string():
    assert insert_chars_in_string("hello", 5, " world") == "hello world"
    assert insert_chars_in_string("python", 0, "I love ") == "I love python"
    assert insert_chars_in_string("", 0, "hello") == "hello"

def test_remove_char_in_string():
    assert remove_char_in_string("hello", 'l') == "heo"
    assert remove_char_in_string("python", 'p') == "ython"
    assert remove_char_in_string("", 'a') == ""

def test_remove_all_char_in_string():
    assert remove_all_char_in_string("hello", 'l') == "heo"
    assert remove_all_char_in_string("python", 'p') == "ython"
    assert remove_all_char_in_string("", 'a') == ""
