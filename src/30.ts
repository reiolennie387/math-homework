def calculate_sum(numbers):
    """
    Calculate the sum of all numbers provided as input.
    
    Args:
        numbers (list): A list of integers.
        
    Returns:
        int: The sum of all numbers.
    """
    total = 0
    for num in numbers:
        total += num
    return total

# Example usage
result = calculate_sum([1, 2, 3, 4, 5])
print("The sum is:", result)
