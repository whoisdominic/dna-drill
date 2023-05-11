# test_dictionaries.py

from ..dictionaries import *

def test_length_of_dict():
    assert length_of_dict({}) == 0
    assert length_of_dict({'a': 1, 'b': 2, 'c': 3}) == 3
    assert length_of_dict({'apple': 'red', 'banana': 'yellow'}) == 2

def test_get_value():
    assert get_value({'a': 1, 'b': 2, 'c': 3}, 'b') == 2
    assert get_value({'apple': 'red', 'banana': 'yellow'}, 'banana') == 'yellow'
    assert get_value({'a': 1, 'b': 2, 'c': 3}, 'd') == None

def test_add_or_update_key_value():
    dct = {'a': 1, 'b': 2}
    add_or_update_key_value(dct, 'c', 3)
    assert dct == {'a': 1, 'b': 2, 'c': 3}
    add_or_update_key_value(dct, 'a', 10)
    assert dct == {'a': 10, 'b': 2, 'c': 3}

def test_remove_key_value():
    dct = {'a': 1, 'b': 2, 'c': 3}
    remove_key_value(dct, 'b')
    assert dct == {'a': 1, 'c': 3}
    remove_key_value(dct, 'd')
    assert dct == {'a': 1, 'c': 3}

def test_get_all_keys():
    assert get_all_keys({'a': 1, 'b': 2, 'c': 3}) == ['a', 'b', 'c']
    assert get_all_keys({'apple': 'red', 'banana': 'yellow'}) == ['apple', 'banana']
    assert get_all_keys({}) == []

def test_get_all_values():
    assert get_all_values({'a': 1, 'b': 2, 'c': 3}) == [1, 2, 3]
    assert get_all_values({'apple': 'red', 'banana': 'yellow'}) == ['red', 'yellow']
    assert get_all_values({}) == []

def test_key_exists():
    assert key_exists({'a': 1, 'b': 2, 'c': 3}, 'b') == True
    assert key_exists({'apple': 'red', 'banana': 'yellow'}, 'grape') == False
    assert key_exists({}, 'a') == False

def test_count_key_occurrences():
    assert count_key_occurrences({'a': 1, 'b': 2, 'c': 3}) == {'a': 1, 'b': 1, 'c': 1}
    assert count_key_occurrences({'a': 1, 'b': 2, 'c': 3, 'a': 4}) == {'a': 1, 'b': 1, 'c': 1}
    assert count_key_occurrences({}) == {}

def test_remove_duplicate_values():
    assert remove_duplicate_values({'a': 1, 'b': 2, 'c': 1, 'd': 2}) == {'a': 1, 'b': 2}
    assert remove_duplicate_values({'apple': 'red', 'banana': 'yellow'}) == {'apple': 'red', 'banana': 'yellow'}
    assert remove_duplicate_values({}) == {}
