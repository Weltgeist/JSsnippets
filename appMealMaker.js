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
    return this._courses.desserts;
  },
  set appetizers(appetizerChoices){
    this._courses.appetizers = appetizerChoices;
  },
  set mains(mainChoices){
    this._courses.mains = mainChoices;
  },
  set desserts(dessertChoices){
    this._courses.desserts = dessertChoices;
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
  },
  getRandomDishFromCourse(courseName){
    let dishes = [];
    let index;
    //Retrive dishes
    if (courseName === 'appetizers') {
      dishes = this.appetizers;
    }
    if (courseName === 'mains') {
      dishes = this.mains;
    }
    if (courseName === 'desserts') {
      dishes = this.desserts;
    }
    //Generate random index
    index = Math.floor(Math.random()*dishes.length);
    //Return dish
    if(dishes.length){
      console.log('Dish is empty, add more dishes');
    } else {
      return dishes[index];
    }
  },
  generateRandomMeal(){
    let appetizer = getRandomDishFromCourse('appetizers');
    let main = getRandomDishFromCourse('mains');
    let dessert = getRandomDishFromCourse('desserts');
    let sum = appetizer.price + main.price + dessert.price;
    return `You ordered as an appetizer: ${appetizer.price} \nYou ordered as an main: ${main.price} \nYou ordered as an dessert: ${dessert.price}\nFor a total of: ${sum} CAN Dollars \n`
  }
};


menu.addDishToCourse('appetizers', 'Plantain with assorted spices',3);
menu.addDishToCourse('appetizers', 'Slice potatoes with garlic dip ',3);
menu.addDishToCourse('appetizers', 'Kitkat',1);
menu.addDishToCourse('mains', 'Djondjon rice with chicken', 8);
menu.addDishToCourse('mains', 'Beans sauce rice with cabri', 15);
menu.addDishToCourse('mains', 'General tao', 5);
menu.addDishToCourse('desserts', 'Icecream', 3);
menu.addDishToCourse('desserts', 'Sugar pie', 2);
menu.addDishToCourse('desserts', 'Assort fruit boil', 3);

console.log(menu.courses);