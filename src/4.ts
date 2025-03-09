import random

def get_random_ts(length):
    # Create a list of all possible characters in a timestamp
    chars = "0123456789" + "-:"

    # Generate a random string of the specified length
    ts = "".join([random.choice(chars) for _ in range(length)])

    return ts
