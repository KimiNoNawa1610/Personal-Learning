# function to return two consecutive index with the largest sum in the list of numbers
def maxPair(nums:list) -> tuple:

    # init return value of the two index 1, 2
    i1, i2 = 0, 0

    # init the current max to check for the max sum of two consecutive numbers in the list
    cur_max = 0

    # loop through the list and get the sum of each consecutive numbers
    for i in range(len(nums)-1):
        sum_num = nums[i]+nums[i+1]
        if sum_num > cur_max: # change the two index everytime the consecutive sum is bigger than the current max
            cur_max = sum_num
            i1 = i
            i2 = i+1

    return (i1,i2) # return tuple of two indexes

print(maxPair([0, 5, 5, 2])) # expected (1,2), output (1,2)
print(maxPair([0, 4, 3, 1, 2, 3, 4, 0])) # expected (1,2), output (1,2)