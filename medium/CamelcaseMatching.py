# Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise.

# A query word queries[i] matches pattern if you can insert lowercase English letters pattern so that it equals the query. You may insert each character at any position and you may not insert any characters.

def camelMatch(queries, pattern):
    length = len(pattern)

    def camel(query):
        match = 0
        for char in query:
            if match < length and pattern[match] == char:
                match += 1
            elif char.isupper():
                return False
        return match == length
    return list(map(camel, queries))


testQueries = ["FooBar", "FooBarTest",
               "FootBall", "FrameBuffer", "ForceFeedBack"]
testPattern = "FoBa"
testAnswers = [True, False, True, False, False]

print(camelMatch(testQueries, testPattern) == testAnswers)
