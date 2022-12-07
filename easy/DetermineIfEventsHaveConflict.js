// You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

// event1 = [startTime1, endTime1] and
// event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.

// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

// Return true if there is a conflict between two events. Otherwise, return false.

var haveConflict = function (event1, event2) {
  if (event1[0] < event2[0]) {
    return event1[1] >= event2[0]
  } else {
    return event1[1] <= event2[0] || event1[0] <= event2[1]
  }
};

console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"]) == true)
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"]) == false)