import pytest
from ..arrays import *

def test_length_of_list():
    assert length_of_list([1, 2, 3, 4, 5]) == 5
    assert length_of_list([]) == 0
    assert length_of_list([1]) == 1

def test_sum_of_list():
    assert sum_of_list([1, 2, 3, 4, 5]) == 15
    assert sum_of_list([]) == 0
    assert sum_of_list([-1, 2, -3, 4, -5]) == -3

def test_max_of_list():
    assert max_of_list([1, 2, 3, 4, 5]) == 5
    with pytest.raises(ValueError):
        assert max_of_list([])

def test_min_of_list():
    assert min_of_list([1, 2, 3, 4, 5]) == 1
    with pytest.raises(ValueError):
        assert min_of_list([])

def test_reverse_list():
    assert reverse_list([1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1]
    assert reverse_list([]) == []

def test_append_to_list():
    assert append_to_list([1, 2, 3, 4], 5) == [1, 2, 3, 4, 5]
    assert append_to_list([], 1) == [1]

def test_insert_into_list():
    assert insert_into_list([1, 2, 4, 5], 2, 3) == [1, 2, 3, 4, 5]
    with pytest.raises(IndexError):
        assert insert_into_list([1, 2, 3, 4], 5, 6)

def test_remove_from_list():
    assert remove_from_list([1, 2, 3, 4, 5], 3) == [1, 2, 4, 5]
    assert remove_from_list([1, 2, 3, 4, 5], 6) == [1, 2, 3, 4, 5]

def test_sort_list():
    assert sort_list([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]
    assert sort_list([]) == []

def test_value_exists():
    assert value_exists([1, 2, 3, 4, 5], 3) == True
    assert value_exists([1, 2, 3, 4, 5], 6) == False

def test_count_occurrences():
    assert count_occurrences([1, 2, 3, 4, 5, 5], 5) == 2
    assert count_occurrences([1, 2, 3, 4, 5], 6) == 0

def test_remove_duplicates():
    assert remove_duplicates([1, 2, 2, 3, 4, 5, 5]) == [1, 2, 3, 4, 5]
    assert remove_duplicates([1, 1, 1, 1, 1]) == [1]
    assert remove_duplicates([]) == []

def test_index_of_value():
    assert index_of_value([1, 2, 3, 4, 5], 3) == 2
    assert index_of_value([1, 2, 3, 4, 5], 6) == -1
    assert index_of_value([], 1) == -1