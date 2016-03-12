/**
 * Created by baltazar on 12/03/16.
 */

function addPrivateProperty(o, name, predicate) {
	var value;  // This is the property value

	// The getter method simply returns the value.
	o["get" + name] = function() { return value; };

	// The setter method stores the value or throws an exception if
	// the predicate rejects the value.
	o["set" + name] = function(v) {
		if (predicate && !predicate(v))
			throw Error("set" + name + ": invalid value " + v);
		else
			value = v;
	};
}

// The following code demonstrates the addPrivateProperty() method.
var o = {};  // Here is an empty object

// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o, "Name", function(x) { return typeof x == "string"; });

o.setName("Frank");       // Set the property value
console.log(o.getName()); // Get the property value
o.setName(0);             // Try to set a value of the wrong type
