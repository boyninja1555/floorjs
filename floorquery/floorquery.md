# Floorquery

jQuery isn't good. At all. It focused too much on issues that were immediately fixed by major browsers. But what if there was a library just in it for the short syntax?

All queries are made with 2 arguments: operator and params. Params are always controlled by the operator itself. Like the following:

```javascript
$("example", "EXAMPLE!!!")
```

Notes:
- Operators are mostly 2 characters but may extend beyond that.
- Uppercase operators are commonly "stronger" versions of their lower counterparts.
- The type file comes with operator autocompletion (but none for params).

**Floorquery** fixes whatever needs fixing. As new features are rolled out in major browsers, it jams shorthand syntax everywhere possible!

---

Examples:

```javascript
// Logs first div with the .stupid class
console.log($("el", "div.stupid"))

// Logs all divs with the .stupid class
console.log($("EL", "div.stupid"))
```

---

Optional types: [./floorquery.d.ts](./floorquery.d.ts)  
(next to this file)
