class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }

  remainingBudget() {
    const sal = this.cast.map((item) => item.salary);
    return this.castingBudget - sal.reduce((acc, num) => acc + num, 0);
  }

  addActor(actor) {
    if (actor.salary <= this.castingBudget) {
      this.cast.push(actor);
      return true;
    }
    return false;
  }

  headliners() {
    const headliners = this.cast.filter((item) => item.popularityRating > 8);
    return headliners;
  }
}

module.exports = FilmProject;
