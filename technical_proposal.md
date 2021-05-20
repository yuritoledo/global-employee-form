# Product/Engineering proposal

---

### What problem are you trying to solve?
* We need to add tests (integration and unit) to ensure that the behavior of all components still works when we need to make the form more complex, adding more logics and other fields.

### Why should we solve it?
* To avoid bugs with new refactor or features.
* We should solve it as soon as possible.

### How do you propose to solve it?
* We should add the `testing-library` in project. With it and it libraries, we can create user-behavior tests.

### What could go wrong?
* The only side-effect is the time that write tests take in short-term. Still it worth on mid and long-term