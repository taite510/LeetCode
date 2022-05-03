// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

const canVisitAllRooms = function(rooms) {
  const keys = {};
  const openDoor = (key) => {
    if (keys[key] === undefined) {
      keys[key] = true;
      for (let i = 0; i < rooms[key].length; i++) {
        openDoor(rooms[key][i]);
      }
    }
  }
  openDoor(0);
  if (Object.keys(keys).length === rooms.length) {
    return true;
  }
  return false;
};

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))