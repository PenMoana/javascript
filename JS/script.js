function myClick() {
//document.getElementById("demo").innerHTML = " x + y  = " + (min (readvalue("m"), readvalue("n") + readvalue("k")));
let mInp = readvalue("m");
let nInp = readvalue("n");
let kInp = readvalue("k");
 document.getElementById("demo").innerHTML = " Result: " + (Math.min(Math.trunc (mInp / 2), nInp , Math.trunc ((mInp + nInp - kInp) / 3)));
}
function readvalue(inputbox) {
return +(document.getElementById(inputbox).value);
}

