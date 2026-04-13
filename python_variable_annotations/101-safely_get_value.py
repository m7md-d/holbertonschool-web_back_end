#!/usr/bin/env python3
"""
11. More involved type annotations
"""
from typing import Mapping, Union, Any, TypeVar
T = TypeVar('T')


def safely_get_value(dct: Mapping,
                     key: Any,
                     default: Union[T, None] = None
                     ) -> Union[Any, T]:
    """
    function safely_get_value that takes a dictionary dct, a key and a default
    value as arguments and returns the value corresponding to key in dct if
    it exists, else it returns the default value.
    """
    if key in dct:
        return dct[key]
    else:
        return default
