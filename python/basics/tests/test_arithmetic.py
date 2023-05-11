from ..arithmetic import *

def test_add():
    assert add(1, 2) == 3
    assert add(-1, 2) == 1
    assert add(0, 0) == 0

def test_subtract():
    assert subtract(2, 1) == 1
    assert subtract(-1, -2) == 1
    assert subtract(0, 0) == 0

def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(-1, -2) == 2
    assert multiply(0, 1) == 0

def test_divide():
    assert divide(6, 2) == 3
    assert divide(-4, -2) == 2
    assert divide(0, 1) == 0

def test_modulus():
    assert modulus(10, 3) == 1
    assert modulus(-10, 3) == 2
    assert modulus(0, 1) == 0

def test_exponent():
    assert exponent(2, 3) == 8
    assert exponent(-2, 3) == -8
    assert exponent(0, 1) == 0
    
def test_floor_division():
    assert floor_division(10, 3) == 3
    assert floor_division(-10, 3) == -4
    assert floor_division(0, 1) == 0

def test_absolute():
    assert absolute(10) == 10
    assert absolute(-10) == 10
    assert absolute(0) == 0

def test_round_number():
    assert round_number(10.2, 0) == 10
    assert round_number(10.5, 0) == 10
    assert round_number(-10.5, 0) == -10


def test_square_root():
    assert square_root(9) == 3
    assert square_root(1) == 1
    assert square_root(0) == 0