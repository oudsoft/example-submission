class Person {

  constructor() {
    this.name = '';
    this.friends = [];
    // variable เพิ่มเติม(ถ้ามี) ...
  }

  friendsOfFriends() {
	var result = [];
	var myName = this.getName();
	this.getFriends().forEach(function(AItem) {
		AItem.getFriends().forEach(function(FItem) {
			if (myName != FItem.getName())	{
				result.push(FItem);
			}
		});
	});
	return result;
  }

  // method เพิ่มเติม(ถ้ามี) ...
  setName(value) {
	  this.name = value;
  }

  getName() {
	  return this.name;
  }

  setFriends(list){
	  /*list parameter is array of person object */
	this.friends = list;
  }

  getFriends(){
	return this.friends;
  }

  showFriendsList(){
	var str ="";
	for (var i in this.friends) {
		str = str.concat(this.friends[i].getName() + ", ");
	}
	return (str);
  }

  showFriendsOfFriends() {
	var str ="";
	var friendsOfFriendsList = this.friendsOfFriends();
	for (var i in friendsOfFriendsList) {
		str = str.concat(friendsOfFriendsList[i].getName() + ", ");
	}
	return (str);
  }
}


/*Test Person*/
var A = new Person();
A.setName("A");

var B = new Person();
B.setName("B");

var C = new Person();
C.setName("C");

var D = new Person();
D.setName("D");

var friensOfA = [];

var comFriends = [];

friensOfA.push(B);
friensOfA.push(C);
comFriends.push(A);

A.setFriends(friensOfA);
console.log("Friends of " + A.getName() + " ==> " + A.showFriendsList());


friensOfA.forEach(function(item) {
	item.setFriends(comFriends);
	console.log("Friends of " + item.getName() + " == > " + item.showFriendsList());
});

//console.log("Friends of Friends of " + A.getName() + " == > " + A.showFriendsOfFriends()); 
//console.log("Friends of Friends of " + B.getName() + " == > " + B.showFriendsOfFriends()); 
console.log("Friends of Friends of " + C.getName() + " == > " + C.showFriendsOfFriends()); 
