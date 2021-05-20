# Product/Engineering proposal template
Here's the proposal template that I've used at [Ravelin](https://www.ravelin.com) and [Monzo](https://monzo.com).  
It's useful as a general purpose template for writing proposals for product and engineering. It's been used from extremely technical engineering proposals, to broad product strategy.

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