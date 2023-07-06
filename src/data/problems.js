export const problems = {
    "Arrays & Hashing": {
        "Contains Duplicate": {
            "id": 217,
            "difficulty": "Easy",
            "favorited": false,
            "checked": true,
            "url": "https://leetcode.com/problems/Contains-Duplicate",
            "code": {
                "python": "class Solution:\r\n    def containsDuplicate(self, nums: List[int]) -> bool:\r\n        hashset = set()\r\n        \r\n        for n in nums:\r\n            if n in hashset:\r\n                return True\r\n            hashset.add(n)\r\n        return False\r\n        \r\n# Time: O(n)\r\n# Space: O(n)\r\n\r\n\r\n# alternate solution: create set from list and compare lengths\r\nreturn not len(nums) == len(set(nums))\r\n\r\n\r\n\r\n\r\n\r\n",
                "javascript": "javascript code goes here"
            },
            "notes": [
                "iterate through list, using hashset to keep track of elements seen",
                "check if current element is in created hashset, if it is, there is a duplicate"
            ]
        },
        "Valid Anagram": {
            "id": 242,
            "difficulty": "Easy",
            "favorited": false,
            "checked": true,
            "url": "https://leetcode.com/problems/Valid-Anagram",
            "code": {
                "python": "class Solution:\r\n    def isAnagram(self, s: str, t: str) -> bool:\r\n        # if they are different lengths, they cannot be valid anagrams\r\n        if len(s) != len(t):\r\n            return False\r\n            \r\n        countS = {}\r\n        countT = {}\r\n\r\n        # get() method's 2nd parameter is value returned if key doesn't exist\r\n        # must provide because default return value is None which you can't add an integer to\r\n        for i in range(len(s)):\r\n            countS[s[i]] = 1 + countS.get(s[i], 0)\r\n            countT[t[i]] = 1 + countT.get(t[i], 0)\r\n        \r\n        # 2nd parameter isn't required here since None value can be \r\n        # checked for equality with another value\r\n        for c in countS:\r\n            if countS[c] != countT.get(c):\r\n                return False\r\n        \r\n        return True\r\n# Time: O(n)\r\n# Space: O(n)\r\n        \r\n\r\n# alternate solution is to sort strings and check for equality\r\nreturn sorted(s) == sorted(t)\r\n# Time: O(nlogn)\r\n# Space: O(1) or O(n) depending on sorting algorithm\r\n",
                "javascript": "javascript code goes here"
            },
            "notes": [
                "iterate through both lists, keeping track of letters in 2 hashmaps",
                "go through a hashmap and compare values to 2nd hashmap",
                "if they are all equal, they are valid anagrams"
            ]
        },
        "Two Sum": {
            "id": 1,
            "difficulty": "Easy",
            "favorited": false,
            "checked": true,
            "url": "https://leetcode.com/problems/Two-Sum",
            "code": {
                "python": "class Solution:\r\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\r\n        seen = {}\r\n        for i, n in enumerate(nums):\r\n            diff = target - n\r\n            if diff in seen:\r\n                return [i, seen[diff]]\r\n            seen[n] = i\r\n            \r\n# Time: O(n)\r\n# Space: O(n)",
                "javascript": "var twoSum = (nums, target) => {\r\n    for (let curr = 0; curr < nums.length; curr++) \r\n        const complement = target - nums[curr];\r\n\r\n        for (let next = (curr + 1); next < nums.length; next++)\r\n            const num = nums[next];\r\n\r\n            const isTarget = num === complement\r\n            if (isTarget) return [ curr, next ];\r\n        }\r\n    }\r\n\r\n    return [ -1, -1 ];\r\n}"
            },
            "notes": [
                "iterate through list, checking if ( target - n ) has been seen before",
                "if it has, return indices of n and ( target - n )",
                "if not, store value in hashmap"
            ]
        },
        "Group Anagrams": {
            "id": 49,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Group-Anagrams",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Top K Frequent Elements": {
            "id": 347,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Top-K-Frequent-Elements",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Product of Array Except Self": {
            "id": 238,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Product-of-Array-Except-Self",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Valid Sudoku": {
            "id": 36,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Valid-Sudoku",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Longest Consecutive Sequence": {
            "id": 128,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Longest-Consecutive-Sequence",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Two Pointers": {
        "Valid Palindrome": {
            "id": 125,
            "difficulty": "Easy",
            "favorited": false,
            "checked": true,
            "url": "https://leetcode.com/problems/Valid-Palindrome",
            "code": {
                "python": "class Solution:\r\n    def isPalindrome(self, s: str) -> bool:\r\n        l = 0\r\n        r = len(s) - 1\r\n\r\n        while l <= r:\r\n            if not s[l].isalnum():\r\n                l += 1\r\n                continue\r\n            if not s[r].isalnum():\r\n                r -= 1\r\n                continue\r\n            \r\n            if s[l].lower() != s[r].lower():\r\n                return False\r\n\r\n            l += 1\r\n            r -= 1\r\n            \r\n        return True\r\n        \r\n# Time: O(n)\r\n# Space: O(1)\r\n",
                "javascript": "let array = [];\narray.forEach(element =>{\n    element += 1;\n})\nreturn array;"
            },
            "notes": [
                "have left and right pointers at opposite ends of string moving inwards",
                "if character is not a letter or number, move pointer accordingly and continue to next loop cycle",
                "compare left and right characters, if they are not equal, it is not a palindrome",
                "move pointers, if loop ends, all characters were equal and it is a palindrome"
            ]
        },
        "Two Sum II - Input Array Is Sorted": {
            "id": 167,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Two-Sum-II-Input-Array-Is-Sorted",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "3Sum": {
            "id": 15,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/3Sum",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Container With Most Water": {
            "id": 11,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Container-With-Most-Water",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Trapping Rain Water": {
            "id": 42,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Trapping-Rain-Water",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Stack": {
        "Valid Parentheses": {
            "id": 20,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Valid-Parentheses",
            "code": {
                "python": "class Solution:\r\n    def isValid(self, s: str) -> bool:\r\n        stack = []\r\n        map = {')': '(', '}': '{', ']': '['}\r\n\r\n        for c in s:\r\n            # if it is open, it can be added to the stack\r\n            if c not in map:\r\n                stack.append(c)\r\n                continue\r\n            \r\n            # top of stack must be open counterpart, otherwise they would be closing in the incorrect order\r\n            if stack and stack[-1] == map[c]:\r\n                stack.pop()\r\n                \r\n            else:\r\n                return False\r\n        \r\n        #if stack is empty, it means all open parentheses were closed in the correct order and the string is valid\r\n        return not stack\r\n\r\n# Time: O(n)\r\n# Space: O(n)",
                "javascript": "javascript code goes here"
            },
            "notes": [
                "map closed parentheses to open counterpart",
                "iterate through string, if char is an open parenthesis, it can be added to stack",
                "if it is closed, the stack must not be empty, and the last element must be the open counterpart",
                "at the end, the stack must be empty"
            ]
        },
        "Min Stack": {
            "id": 155,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Min-Stack",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Evaluate Reverse Polish Notation": {
            "id": 150,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Evaluate-Reverse-Polish-Notation",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Generate Parentheses": {
            "id": 22,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Generate-Parentheses",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Car Fleet": {
            "id": 853,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Car-Fleet",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Daily Temperatures": {
            "id": 739,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Daily-Temperatures",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Largest Rectangle In Histogram": {
            "id": 84,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Largest-Rectangle-In-Histogram",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Binary Search": {
        "Binary Search": {
            "id": 704,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Binary-Search",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Search a 2D Matrix": {
            "id": 74,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Search-a-2D-Matrix",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Koko Eating Bananas": {
            "id": 875,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Koko-Eating-Bananas",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Find Minimum In Rotated Sorted Array": {
            "id": 153,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Find-Minimum-In-Rotated-Sorted-Array",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Search In Rotated Sorted Array": {
            "id": 33,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Search-In-Rotated-Sorted-Array",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Time Based Key Value Store": {
            "id": 981,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Time-Based-Key-Value-Store",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Median of Two Sorted Arrays": {
            "id": 4,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Median-of-Two-Sorted-Arrays",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Sliding Window": {
        "Best Time to Buy And Sell Stock": {
            "id": 121,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Best-Time-to-Buy-And-Sell-Stock",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Longest Substring Without Repeating Characters": {
            "id": 3,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Longest-Substring-Without-Repeating-Characters",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Longest Repeating Character Replacement": {
            "id": 424,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Longest-Repeating-Character-Replacement",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Permutation In String": {
            "id": 567,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Permutation-In-String",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Minimum Window Substring": {
            "id": 76,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Minimum-Window-Substring",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Sliding Window Maximum": {
            "id": 239,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Sliding-Window-Maximum",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Linked List": {
        "Reverse Linked List": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Reverse-Linked-List",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Merge Two Sorted Lists": {
            "id": 21,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Merge-Two-Sorted-Lists",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Linked List Cycle": {
            "id": 141,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Linked-List-Cycle",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Reorder List": {
            "id": 143,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Reorder-List",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Remove Nth Node From End of List": {
            "id": 19,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Remove-Nth-Node-From-End-of-List",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Copy List With Random Pointer": {
            "id": 138,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Copy-List-With-Random-Pointer",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Add Two Numbers": {
            "id": 2,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Add-Two-Numbers",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Find The Duplicate Number": {
            "id": 287,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Find-The-Duplicate-Number",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "LRU Cache": {
            "id": 146,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/LRU-Cache",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Merge K Sorted Lists": {
            "id": 23,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Merge-K-Sorted-Lists",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Reverse Nodes In K Group": {
            "id": 25,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Reverse-Nodes-In-K-Group",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Trees": {
        "Invert Binary Tree": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Invert-Binary-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Maximum Depth of Binary Tree": {
            "id": 21,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Maximum-Depth-of-Binary-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Diameter of Binary Tree": {
            "id": 141,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Diameter-of-Binary-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Balanced Binary Tree": {
            "id": 143,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Balanced-Binary-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Same Tree": {
            "id": 19,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Same-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Subtree of Another Tree": {
            "id": 143,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Subtree-of-Another-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Lowest Common Ancestor of a Binary Search Tree": {
            "id": 138,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Lowest-Common-Ancestor-of-a-Binary-Search-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Binary Tree Level Order Traversal": {
            "id": 2,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Binary-Tree-Level-Order-Traversal",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Binary Tree Right Side View": {
            "id": 287,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Binary-Tree-Right-Side-View",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Count Good Nodes In Binary Tree": {
            "id": 146,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Count-Good-Nodes-In-Binary-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Validate Binary Search Tree": {
            "id": 23,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Validate-Binary-Search-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Kth Smallest Element In a Bst": {
            "id": 25,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Kth-Smallest-Element-In-a-Bst",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Construct Binary Tree From Preorder And Inorder Traversal": {
            "id": 146,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Construct-Binary-Tree-From-Preorder-And-Inorder-Traversal",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Binary Tree Maximum Path Sum": {
            "id": 23,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Binary-Tree-Maximum-Path-Sum",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Serialize And Deserialize Binary Tree": {
            "id": 25,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Serialize-And-Deserialize-Binary-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Tries": {
        "Implement Trie Prefix Tree": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Implement-Trie-Prefix-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Design Add And Search Words Data Structure": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Design-Add-And-Search-Words-Data-Structure",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Word Search II": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Word-Search-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Backtracking": {
        "Subsets": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Subsets",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Combination Sum": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Combination-Sum",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Permutations": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Permutations",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Subsets II": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Subsets-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Combination Sum II": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Combination-Sum-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Word Search": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Word-Search",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Palindrome Partitioning": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Palindrome-Partitioning",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Letter Combinations of a Phone Number": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Letter-Combinations-of-a-Phone-Number",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "N Queens": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/N-Queens",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Graphs": {
        "Number of Islands": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Number-of-Islands",
            "code": {
                "python": "testing htis right now",
                "javascript": "javascript code goes here",
                "language": "pythong edited"
            },
            "notes": [
                ""
            ]
        },
        "Clone Graph": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Clone-Graph",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values() testing htis  12 2 3",
                "javascript": "testing javascript editing clone graph"
            },
            "notes": [
                ""
            ]
        },
        "Max Area of Island": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Max-Area-of-Island",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Pacific Atlantic Water Flow": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Pacific-Atlantic-Water-Flow",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Surrounded Regions": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Surrounded-Regions",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Rotting Oranges": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Rotting-Oranges",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Walls And Gates": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Walls-And-Gates",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Course Schedule": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Course-Schedule",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Course Schedule II": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Course-Schedule-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Redundant Connection": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Redundant-Connection",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Number of Connected Components In An Undirected Graph": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Number-of-Connected-Components-In-An-Undirected-Graph",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Graph Valid Tree": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Graph-Valid-Tree",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Word Ladder": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Word-Ladder",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Dynamic Programming": {
        "Climbing Stairs": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Climbing-Stairs",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here",
                "language": "edited javascript"
            },
            "notes": [
                ""
            ]
        },
        "Min Cost Climbing Stairs": {
            "id": 21,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Min-Cost-Climbing-Stairs",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "House Robber": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/House-Robber",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()ddd",
                "javascript": "javascript code goes hereddddd"
            },
            "notes": [
                ""
            ]
        },
        "House Robber II": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/House-Robber-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Longest Palindromic Substring": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Longest-Palindromic-Substring",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Palindromic Substrings": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Palindromic-Substrings",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Decode Ways": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Decode-Ways",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Coin Change": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Coin-Change",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Maximum Product Subarray": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Maximum-Product-Subarray",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Word Break": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Word-Break",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Longest Increasing Subsequence": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Longest-Increasing-Subsequence",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Partition Equal Subset Sum": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Partition-Equal-Subset-Sum",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "2D Dynamic Programming": {
        "Unique Paths": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Unique-Paths",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Longest Common Subsequence": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Longest-Common-Subsequence",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Best Time to Buy And Sell Stock With Cooldown": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Best-Time-to-Buy-And-Sell-Stock-With-Cooldown",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Coin Change II": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Coin-Change-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Target Sum": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Target-Sum",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Interleaving String": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Interleaving-String",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Longest Increasing Path In a Matrix": {
            "id": 206,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Longest-Increasing-Path-In-a-Matrix",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Distinct Subsequences": {
            "id": 21,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Distinct-Subsequences",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Edit Distance": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Edit-Distance",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Burst Balloons": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Burst-Balloons",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Regular Expression Matching": {
            "id": 206,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Regular-Expression-Matching",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Bit Manipulation": {
        "Single Number": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Single-Number",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                "throiugh",
                "th;rl;khg",
                ";lkjsdf;kljsdfkjadf",
                ""
            ]
        },
        "Number of 1 Bits": {
            "id": 21,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Number-of-1-Bits",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Counting Bits": {
            "id": 141,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Counting-Bits",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Reverse Bits": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Reverse-Bits",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Missing Number": {
            "id": 21,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Missing-Number",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Sum of Two Integers": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Sum-of-Two-Integers",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Reverse Integer": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Reverse-Integer",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Intervals": {
        "Meeting Rooms": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Meeting-Rooms",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Insert Interval": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Insert-Interval",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Merge Intervals": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Merge-Intervals",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Non Overlapping Intervals": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Non-Overlapping-Intervals",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Meeting Rooms II": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Meeting-Rooms-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Minimum Interval to Include Each Query": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Minimum-Interval-to-Include-Each-Query",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Greedy": {
        "Maximum Subarray": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Maximum-Subarray",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Jump Game": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Jump-Game",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Jump Game II": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Jump-Game-II",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Gas Station": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Gas-Station",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Hand of Straights": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Hand-of-Straights",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Merge Triplets to Form Target Triplet": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Merge-Triplets-to-Form-Target-Triplet",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Partition Labels": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Partition-Labels",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Valid Parenthesis String": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Valid-Parenthesis-String",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Advanced Graphs": {
        "Min Cost to Connect All Points": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Min-Cost-to-Connect-All-Points",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Network Delay Time": {
            "id": 206,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Network-Delay-Time",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Cheapest Flights Within K Stops": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Cheapest-Flights-Within-K-Stops",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Reconstruct Itinerary": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Reconstruct-Itinerary",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Swim In Rising Water": {
            "id": 21,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Swim-In-Rising-Water",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Alien Dictionary": {
            "id": 141,
            "difficulty": "Hard",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Alien-Dictionary",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Math & Geometry": {
        "Happy Number": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Happy-Number",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Plus One": {
            "id": 206,
            "difficulty": "Easy",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Plus-One",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Rotate Image": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Rotate-Image",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Spiral Matrix": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Spiral-Matrix",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Set Matrix Zeroes": {
            "id": 21,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Set-Matrix-Zeroes",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Pow(x, n)": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Powx,-n",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Multiply Strings": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Multiply-Strings",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        },
        "Detect Squares": {
            "id": 141,
            "difficulty": "Medium",
            "favorited": false,
            "checked": false,
            "url": "https://leetcode.com/problems/Detect-Squares",
            "code": {
                "python": "def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\nans = collections.defaultdict(list)\n\nfor s in strs:\n    count = [0] * 26\n    for c in s:\n        count[ord(c) - ord(\"a\")] += 1\n    ans[tuple(count)].append(s)\nreturn ans.values()",
                "javascript": "javascript code goes here"
            },
            "notes": [
                ""
            ]
        }
    },
    "Favorites": {}
}


// functions used to add properties to problems, in case you need to add more in future
function addProperties(propertyName, value){
    for (let category in problems){
      if(problems.hasOwnProperty(category)){
       let problemList = Object.keys(problems[category]);
       for (let i = 0; i < problemList.length; i++){
          console.log(problems[category][problemList[i]])
          problems[category][problemList[i]][propertyName] = value;
        }
       }
      }
    console.log(problems);
    }
// addProperties("notes", [''])


function addLanguage(language, value){
    for (let category in problems){
      if(problems.hasOwnProperty(category)){
       let problemList = Object.keys(problems[category]);
       for (let i = 0; i < problemList.length; i++){
          console.log(problems[category][problemList[i]].code[language] = 'javascript code goes here')
        //   problems[category][problemList[i]][code.language] = value;
        }
       }
      }
    console.log(problems);
    }

// addLanguage('javascript', "test");


