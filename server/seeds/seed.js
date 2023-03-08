import db from '../index.js';
import Recipe from '../models/recipe.js';
import User from '../models/user.js';

const seedUsers = [
  {
    username: 'firstUser',
    password_digest: 'Welcome@1',
  },
  {
    username: 'secondUser',
    password_digest: 'Welcome@2',
  },
];

const seedRecipes = [
  {
    name: 'Classic Burger',
    img: 'https://images.unsplash.com/photo-1479388891567-3c137b61de97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    course: ['Lunch', 'Dinner'],
    cuisine: ['American'],
    serves: '2',
    ingredients:
      '1 1/2 pounds 80% lean 20% fat ground beef; 1 tbsp Worcestershire sauce; 1 1/2 tsp seasoning salt; 1 tsp garlic powder; 1/2 tsp ground black pepper; 4 slices of cheese; 4 hamburger buns; optional: hamburger toppings - lettuce tomato, onion, pickles, ketchup, mustard, mayo, etc.',
    instructions:
      'Preheat the grill to 375 degrees F (medium-high). In a large bowl, add the beef. Sprinkle evenly with the Worcestershire sauce, salt, garlic powder, and pepper. Use your hands to mix the ingredients until they are just combined. Divide the meat mixture into fourths. Take 1/4 of the meat mixture and use your hands to press it into the shape of a hamburger patty that is about 3/4 inch thick. Make an indention in the middle of the patty to prevent bulging in the center of the hamburger as it cooks. Repeat with the remaining meat mixture, making 4 hamburgers. Place the burgers on the grill. Cook 4-5 minutes on the first side. Flip the burgers over and cook an additional 4-5 minutes or until the burgers have reached the desired doneness. If adding cheese, lay a slice of cheese on each burger patty about 1 minute before taking the burgers off the grill, so the cheese has a chance to melt. Serve the burgers on hamburger buns with optional hamburger toppings.',
    user_id: '63c4bfe9ca20c0a05152649e',
  },
  {
    name: 'Creamy Tomato Soup',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    course: ['Lunch', 'Dinner'],
    cuisine: ['American'],
    serves: '2',
    ingredients:
      '1/4 cup (1/2 stick) unsalted butter; 10 sprigs fresh thyme, tied together; 1 medium onion, thinly sliced; 2 garlic cloves, thinly sliced; 1/4 cup tomato paste; 2 28-oz. cans of whole tomatoes; 2 tsp sugar, divided; 1/4 cup (or more) heavy cream; kosher salt and freshly ground black pepper',
    instructions:
      'Melt butter in a large heavy pot over medium heat. Add thyme, onion, and garlic. Cook until onion is completely soft and translucent, 10–12 minutes.    Increase heat to medium-high; add tomato paste. Continue cooking, stirring often, until paste has begun to caramelize in spots, 5–6 minutes. Add tomatoes with juices, 1 tsp. sugar, and 8 cups water to pot. Increase heat to high; bring to a simmer. Reduce heat to medium. Simmer until flavors meld and soup reduces to about 2 quarts (8 cups), 45–55 minutes. Remove soup from heat, let cool slightly. Discard thyme sprigs. Working in small batches, purée soup in a blender until smooth. Return to pot. Stir in ¼ cup cream. Simmer soup until flavors meld, 10–15 minutes longer. Season to taste with salt, pepper, and remaining 1 tsp. sugar. Add more cream, if desired.',
    user_id: '63c4bfe9ca20c0a05152649f',
  },
  //   {
  //     name: 'Pancakes from Scratch',
  //     img: 'https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/51/70/nwoyHKPSAWTjjpcSL5gs_scratch-pancakes-7.jpg',
  //     course: ['Breakfast', 'Dessert'],
  //     cuisine: ['American'],
  //     serves: '9 6-inch pancakes',
  //     ingredients:
  //       '2 cups flour; 3 tbsp sugar; 1/2 tsp salt; 1 tbsp baking powder; 2 eggs, beaten separately before adding to mixture; 1/4 cup butter, melted; 1 3/4 cups milk',
  //     instructions:
  //       'Mix the dry items first. Make a well in the center and pour in the milk, eggs and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
  //     user_id: 1,
  //   },
  //   {
  //     name: 'Keto Chicken Parmesan',
  //     img: 'https://i.imgur.com/gGQ19ni.jpg',
  //     course: ['Lunch', 'Dinner'],
  //     cuisine: ['Italian', 'Keto'],
  //     serves: '8',
  //     ingredients:
  //       '4 boneless skinless chicken breasts; Kosher salt; freshly ground black pepper; 1 cup almond flour; 3 large eggs, beaten; 3 cups freshly grated Parmesan, plus more for serving; 2 tsp. garlic powder; 1 tsp. onion powder; 2 tsp. dried oregano; vegetable oil; 3/4 cup low-carb sugar-free tomato sauce; 1 1/2 cup shredded mozzarella; fresh basil leaves, for topping',
  //     instructions:
  //       'Preheat oven to 400°. Using a sharp knife, cut chicken breasts in half crosswise. Season chicken on both sides with salt and pepper. Place eggs and almond flour in 2 separate shallow bowls. In a third shallow bowl, combine Parmesan, garlic powder, onion powder, and oregano. Season with salt and pepper. Working with one at a time, dip chicken cutlets into almond flour, then eggs, and then Parmesan mixture, pressing to coat.  In a large skillet over medium heat, heat 2 tablespoons oil. Add chicken and cook until golden and cooked through, 2 to 3 minutes per side. Work in batches as necessary, adding more oil when needed. Transfer fried cutlets to a 9″-x-13″ baking dish, evenly spread tomato sauce on each cutlet and top with mozzarella.  Bake until cheese is melted, 10 to 12 minutes. If desired, broil until cheese is golden, 3 minutes. Top with basil and more Parmesan before serving.',
  //     user_id: user._id,
  //   },
  //   {
  //     name: 'Chicken Linguini Alfredo',
  //     img: 'https://i.imgur.com/97Cna6S.jpg',
  //     course: ['Lunch', 'Dinner'],
  //     cuisine: ['Italian'],
  //     serves: '2',
  //     ingredients:
  //       '2 boneless skinless chicken breast halves, cut into thin strips; 2 tsp cajun seasoning; 2 tbsp butter; 1-2 cup heavy cream; 1⁄4 tsp dried basil; 1⁄4 tsp lemon pepper seasoning; 1⁄4 tsp salt; 1⁄8 tsp garlic powder; 1⁄8 tsp pepper; 4 oz linguine or fettuccine pasta, cooked and drained; grated parmesan cheese, to taste',
  //     instructions:
  //       'Place chicken and Cajun seasoning in a bowl or resealable plastic bag, toss or shake to coat. In a large skillet over medium heat, sauté chicken in butter until almost tender, about 5 to 7 minutes. Reduce heat. Add cream and seasoning, heat through. Add pasta and toss, heat through. Sprinkle Parmesan cheese if desired. Adjust the Cajun seasoning if preferred spicier.',
  //     user_id: user._id,
  //   },
  //   {
  //     name: 'Peach Cobbler',
  //     img: 'https://i.imgur.com/m2aOZLLl.jpg',
  //     course: ['Dessert'],
  //     cuisine: ['American'],
  //     serves: '5',
  //     ingredients:
  //       '8 large peaches, pit removed and thinly sliced; 1 1/4 cup granulated sugar, divided; 1 tsp ground cinnamon; 1/2 tsp ground ginger; 1 tsp kosher salt, divided; juice of 1/2 lemon; 1 cup all-purpose flour; 1 tsp baking soda; 1/2 cup (1 stick) melted butter; 3/4 cup buttermilk; coarse sugar, for sprinkling; vanilla ice cream, for serving',
  //     instructions:
  //       'Preheat oven to 350°F. In a large bowl, combine peaches, 1/4 cup sugar, cinnamon, ginger, 1/2 teaspoon salt, and lemon juice. In another large bowl, whisk together flour, remaining 1 cup of sugar, baking soda, and remaining 1/2 teaspoon salt. Add melted butter and buttermilk and whisk to combine. Place peaches into a large baking dish and spread batter on top, then sprinkle with coarse sugar. Bake until golden and bubbling, 45 minutes. Let cool 10 minutes before serving with ice cream.',
  //     user_id: user._id,
  //   },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  await Recipe.deleteMany({});
  await Recipe.insertMany(seedRecipes);
};

seedDB().then(() => {
  db.close();
});
