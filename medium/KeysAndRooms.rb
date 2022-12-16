# There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

# When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

# Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

def can_visit_all_rooms(rooms)
  @visited = [0]
  @rooms = rooms
  def enter_room(room)
      for key in room
          unless @visited.include? key
              @visited.append(key)
              enter_room(@rooms[key])
          end
      end
  end
  enter_room(@rooms[0])
  return @visited.length == @rooms.length
end

puts can_visit_all_rooms([[1],[2],[3],[]]) == true
puts can_visit_all_rooms([[1,3],[3,0,1],[2],[0]]) == false