import rules from './rules';

class Guard {
  constructor(to, from, next) {
    this.to = to;
    this.from = from;
    this.next = next;
    this.redirecting = false;
  }

  handle() {
    this.to.meta.middleware.forEach(current => {
      if (rules[current] && !rules[current].check()) {
        if (!this.redirecting) {
          this.next({ name: rules[current].redirectTo });
          this.redirecting = true;
        }
      } else if (!this.redirecting) {
        this.next();
      }
    });
  }
}

export default Guard;
