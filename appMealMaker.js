const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.deserts;
  },
  set appetizers(appetizerChoices){
    this._courses.appetizers = appetizerChoices;
  },
  set mains(mainChoices){
    this._courses.mains = mainChoices;
  },
  set desserts(dessertChoices){
    this._courses.deserts = dessertChoices;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }

  },
  // Add dish to _course depending on courseName, mandatory format include appetizers, mains or dessert in the courseName
  addDishToCourse(courseName,dishName,dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice
    };
    if (courseName === 'appetizers') {
      this.appetizers.push(dish);
    }
    if (courseName === 'mains') {
      this.mains.push(dish);
    }
    if (courseName === 'desserts') {
      this.desserts.push(dish);
    }
  }
};