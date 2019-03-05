var isEmpty = function (obj) {
	count = 0;
	for (property in obj) {
		count++
	}
	count > 0 ? console.log(true):console.log(false);
}

var obj = new Object("1","2","3");
var obj1 = new Object();

isEmpty(obj);
isEmpty(obj1);