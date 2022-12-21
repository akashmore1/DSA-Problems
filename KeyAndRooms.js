// There are n rooms labeled from 0 to There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.
///
// Leetcode link: https://leetcode.com/problems/keys-and-rooms/description/

var canVisitAllRooms = function (rooms) {
  const keySet = new Set();
  keySet.add(0);
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (keySet.has(i)) {
        keySet.add(rooms[i][j]);
      } else {
        console.log(rooms[i][j]);
        return false;
      }
    }
  }

  return true;
};
