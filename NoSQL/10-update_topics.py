#!/usr/bin/env python3
""" Module for task 10 """


def update_topics(mongo_collection, name, topics):
    """ Change all topics of a school document.

    Args:
        mongo_collection: The pymongo collection object.
        name: The school name to update.
        topics: The list of topics approached in the school.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
