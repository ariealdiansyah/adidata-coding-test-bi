var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let mapST = {};
  let mapTS = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapST[charS] === undefined && mapTS[charT] === undefined) {
      mapST[charS] = charT;
      mapTS[charT] = charS;
    } else {
      if (mapST[charS] !== charT || mapTS[charT] !== charS) {
        return false;
      }
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))