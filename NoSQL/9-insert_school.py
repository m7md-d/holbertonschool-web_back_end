#!/usr/bin/env python3
""" Module for task 9 """


def insert_school(mongo_collection, **kwargs):
    """ Insert a new document in a collection.

    Args:
        mongo_collection: The pymongo collection object.
        **kwargs: The document attributes.

    Returns:
        The new _id of the inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
