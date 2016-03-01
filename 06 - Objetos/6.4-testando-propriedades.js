/**
 * Created by baltazar on 01/03/16.
 */

var o = { x : 1 };
'x' in o;                                             // true, o tem x
'y' in o;                                             // false, o não tem y
'toString' in o;                                      // true, propriedade herdada do prototype

//------------------//

var o = { x : 1 };
o.hasOwnProperty('x');                                // true, x é propriedade propria de o
o.hasOwnProperty('y');                                // false, o não tem propriedade y
o.hasOwnProperty('toString');                         // false, toString é herdada, não propria

//------------------//

