# NoSQL

## Overview

This project covers NoSQL databases with a focus on MongoDB. It includes MongoDB shell scripts for common database operations and Python scripts for interacting with MongoDB programmatically using PyMongo.

## Learning Objectives

By completing this project, I was able to:

- Explain what NoSQL means and its benefits
- Understand the difference between SQL and NoSQL databases
- Understand ACID properties and document storage
- Query information from a NoSQL database
- Insert, update, and delete data in a NoSQL database
- Use MongoDB and the mongo shell
- Use MongoDB with Python (PyMongo)

## MongoDB Shell Scripts

| File | Description |
|------|-------------|
| `0-list_databases` | Lists all databases |
| `1-use_or_create_database` | Creates or uses the database `my_db` |
| `2-insert` | Inserts a document into the `school` collection |
| `3-all` | Lists all documents in the `school` collection |
| `4-match` | Finds documents matching a specific criteria |
| `5-count` | Counts documents in the `school` collection |
| `6-update` | Updates documents in the `school` collection |
| `7-delete` | Deletes documents from the `school` collection |

## Python Scripts

| File | Description |
|------|-------------|
| `8-all.py` | Lists all documents in a collection |
| `9-insert_school.py` | Inserts a new document based on kwargs, returns the new `_id` |
| `10-update_topics.py` | Changes all topics of a school document by name |
| `11-schools_by_topic.py` | Returns list of schools having a specific topic |
| `12-log_stats.py` | Prints stats about Nginx logs stored in MongoDB |

## Requirements

- MongoDB 4.4
- Python 3.9
- PyMongo 4.8.0
