# Floorquery

jQuery isn't good. At all. It focused too much on issues that were immediately fixed by major browsers. But what if there was a library just in it for the short syntax?

All queries begin with a 2-character operator, then immediately follow with a required `[` for cleanliness. Anything after is controlled by the query handler itself. Like the following:

```javascript
$("ex[]")
```

Uppercase operators are commonly "stronger" versions of their lower counterparts.

**Floorquery** fixes whatever needs fixing. As new features are rolled out in major browsers, it jams shorthand syntax everywhere possible!

---

Examples:

```javascript
// Logs first div with the .stupid class
console.log($("el[div.stupid"))

// Logs all divs with the .stupid class
console.log($("EL[div.stupid"))
```

---

Optional types: [./floorquery.d.ts](./floorquery.d.ts)  
(next to this file)
