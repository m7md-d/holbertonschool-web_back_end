#!/usr/bin/env python3
"""
10. Duck typing - first element of a sequence
"""
from typing import Sequence, Any, Optional


# The types of the elements of the input are not known
def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """
    function safe_first_element that takes a list lst as argument and returns
    the first element of lst if it exists, else it returns None.
    """
    if lst:
        return lst[0]
    else:
        return None
