# Given an integer n, add a dot (".") as the thousands separator and return it in string format.

def thousandSeparator(n):
    num = str(n)
    if n > 999:
        num = list(num)
        i = (len(num) - 1) // 3
        while i > 0:
            num.insert(len(num) - (3 * i), '.')
            i -= 1
        num = ''.join(num)
    return num


print(thousandSeparator(123456789) == '123.456.789')
print(thousandSeparator(123) == '123')
