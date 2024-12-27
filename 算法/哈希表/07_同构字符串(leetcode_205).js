/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let n = s.length;
    if(n === 0) return true;
    let maps = new Map();
    let mapt = new Map();

    for(let i = 0, j = 0; i < n, j < n; i++, j++) {
        if(!maps.get(s[i])) {
            maps.set(s[i], t[j]);
        }

        if(!mapt.get(t[j])) {
            mapt.set(t[j], s[i]);
        }

        if(maps.get(s[i]) !== t[j] || mapt.get(t[j]) !== s[i]) {
            return false;
        }
    }

    return true;
}