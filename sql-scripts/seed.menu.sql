BEGIN;

TRUNCATE
  menu,
  auth_user
  RESTART IDENTITY CASCADE;

INSERT INTO auth_user (user_name, password)
VALUES
  ('dinermgr', 'cd2237')  

INSERT INTO menu
    (name, description, price, category)
Values
/* Beverages */
    ('Juice', null, '2.50', 'Beverages'),
    ('Coffee', null, '1.75', 'Beverages'),
    ('Milk', null, '2.25', 'Beverages'),
    ('Chocolate Milk', null, '2.50', 'Beverages'),
    ('Iced Tea', null, '1.75', 'Beverages'),
    ('Hot Tea', null, '1.95', 'Beverages'),
    ('Hot Chocolate', null, '1.95', 'Beverages'),
    ('Fountain Drink', null, '1.75', 'Beverages'),
    ('Milkshake', null, '4.25', 'Beverages'),
/* Breakfast */    
    ('Breakfast Special (Monday-Friday 6:00am - 9:00am)', 'Two eggs with your choice of bacon or sausage patty and a side of home fries, fried apples or grits and toast.', '4.50', 'Breakfast'),
    ('Strawberry and Broad', 'Two eggs, served with your choice of bacon, bologna, link or patty sausage, choice of home fries, fried apples or grits and your choice of toast, biscuit or short stack.', '7.25', 'Breakfast'),
    ('Best Breakfast', 'Three eggs, served with your choice of bacon, sausage or bologna and your choice of home fries, fried apples or grits and a short stack.', '7.50', 'Breakfast'),
    ('City 1 Egg', 'One egg, served with your choice of bacon or patty sausage and your choice of toast or biscuit.', '4.25', 'Breakfast'),
    ('2 Eggs with Bacon Entree', 'Served with your choice of toast or biscuit.', '5.50', 'Breakfast'),
    ('2 Eggs with Link Sausage Entree', 'Served with your choice of toast or biscuit.', '5.95', 'Breakfast'),
    ('Sausage Gravy with 2 Biscuits Entree', null, '5.50', 'Breakfast'),
    ('Sausage Gravy with 1 Biscuit Entree', null, '3.50', 'Breakfast'),
    ('Breakfast Club', 'Fried egg, bacon, ham, American cheese, lettuce and tomato on your choice of toast with home fries or chips.', '7.50', 'Breakfast'),
    ('Creamed Chipped Beef', 'Two eggs and home fries, served with your choice of apple and grits.', '8.75', 'Breakfast'),
    ('Breakfast Burrito', 'Two eggs, choice of bacon or sausage patty, peppers, onion, cheese with your choice of home fries, grits or fried apples.', '6.50', 'Breakfast'),
    ('2 Eggs with Sausage Patties Entree', 'Served with your choice of toast or biscuit.', '5.50', 'Breakfast'),
/* Omelets */    
    ('Plain Omelet', null, '5.50', 'Omelets'),
    ('Cheese Omelet', null, '6.50', 'Omelets'),
    ('Ham and Cheddar Omelet', null, '6.95', 'Omelets'),
    ('Veggie Omelet', 'Tomatoes, onions, green peppers and mushrooms.','7.50', 'Omelets'),
    ('Western Omelet', 'Ham, tomatoes, onions, peppers, mushrooms and American cheese.', '7.95', 'Omelets'),
    ('Meat Lover Omelet', 'Ham, bacon, sausage and cheddar.', '8.25', 'Omelets'),
    ('Californian Omelet', 'Eggs beaters, chicken, cheddar, tomatoes, broccoli and sour cream.', '8.75', 'Omelets'),
/* Benedicts */    
    ('Eggs Benedict', 'Two poached eggs served over grilled City ham on a toasted English muffin. Served with fries, fried apples or grits.', '7.75', 'Benedicts'),
    ('New York Benedict', 'Two poached eggs served over grilled pastrami on a toasted English muffin. Served with fries, fried apples or grits.', '8.50', 'Benedicts'),
    ('Irish Benedict', 'Two poached eggs served over grilled corned beef on a toasted English muffin. Served with fries, fried apples or grits.', '8.50', 'Benedicts'),
/* Pancakes */    
    ('3 Pancakes', null, '4.95', 'Pancakes'),
    ('10 Silver Dollar Pancakes', null, '4.95', 'Pancakes'),
    ('Chocolate Chip Pancakes', null, '5.95', 'Pancakes'),
    ('Apple Pancakes', null, '5.95', 'Pancakes'),
    ('Berry Pancakes', null, '6.25', 'Pancakes'),
    ('Pigs in a Blanket', null, '6.75', 'Pancakes'),
    ('Short Stack', null, '3.95', 'Pancakes'),
    ('Short Stack with Berries', null, '5.25', 'Pancakes'),
    ('French Toast', null, '5.25', 'Pancakes'),
    ('French Toast Combo', 'With your choice of bacon, City ham, link or sausage patty', '6.50', 'Pancakes'),
    ('French Toast with Pecans', 'With your choice of bacon, City ham, link or sausage patty', '6.25', 'Pancakes'),
    ('French Toast with Country Ham', null, '8.50', 'Pancakes'),
    ('Waffle with Country Ham', null, '8.50', 'Pancakes'),
    ('Belgian Waffle', null, '4.95', 'Pancakes'),
    ('Belgian Waffle Combo', 'With your choice of bacon, City ham, link or sausage patty', '6.50', 'Pancakes'),
/* Breakfast */    
    ('Joseph''s Special', 'Three eggs scrambled with ham chucks with toast, a biscuit or short stack and your choice of home fries, fried apples or grits.', '7.50', 'Breakfast'),
    ('Sean''s Beefy Scramble', 'Three eggs scrambled with ground beef, garlic and onions with toast a biscuit or short stack and your choice of home fries, fried apple or grits.', '7.95', 'Breakfast')
    ('Steak and Eggs', '6 oz. steak and two eggs with toast or a biscuit and your choice of home fries, fried apples or grits.', '11.95', 'Breakfast'),
    ('Pan Fried Salted Herrings', 'Two herrings and two eggs with toast or a short stack and your choice of home fries, fried apples or grits.', '9.95', 'Breakfast'),
    ('Chicken Fried Steak and Eggs', 'Smothered in sausage gravy and served with two eggs with toast or a biscuit and your choice of home fries, fried apples or grits.', '8.95', 'Breakfast'),
    ('Country Ham and Eggs', 'Two eggs and count ham with toast, a biscuit or short stack ans your choice of home fries, fried apples or grits.', '8.50', 'Breakfast'),
    ('Corned Beef Hash and Eggs', 'Two eggs and hash with toast, a biscuit or short stack and your choice of home fries, fried apple or grits.', '7.95', 'Breakfast'),
    ('Salmon Cakes', 'Served with two eggs, your choice of home fries, fried apples or grits and your choice of toast, biscuit or short stack.', '7.95', 'Breakfast'),
    ('Big Bill''s Scrapple and Eggs', 'Served with two eggs, your choice of home fries, fried apples or grits and your choice of toast, biscuit or short stack.', '7.50', 'Breakfast'),
/* A la Carte */    
    ('1 Egg', null, '1.25', 'A la Carte'),
    ('2 Eggs', null, '4.95', 'A la Carte'),
    ('Bacon', null, '2.25', 'A la Carte'),
    ('Saudage Patties', null, '2.25', 'A la Carte'),
    ('2 Sausage Links', null, '2.50', 'A la Carte'),
    ('City Ham', null, '2.75', 'A la Carte'),
    ('Corned Beef Hash', null, '4.50', 'A la Carte'),
    ('Scrapple', null, '3.95', 'A la Carte'),
    ('Biscuit', null, '1.25', 'A la Carte'),
    ('2 Slices of Toast', null, '4.95', 'A la Carte'),
    ('Pancake', null, '1.75', 'A la Carte'),
    ('Home Fries', null, '1.95', 'A la Carte'),
    ('Fried Apples', null, '1.75', 'A la Carte'),
    ('Grits', null, '1.75', 'A la Carte'),
    ('Plain Bagel with Cream Cheese', null, '2.75', 'A la Carte'),
    ('Sausage Gravy', null, '2.95', 'A la Carte'),
    ('Bologna', null, '3.75', 'A la Carte'),
    ('Fresh Fruit', null, '3.25', 'A la Carte'),
    ('Oatmeal', null, '2.25', 'A la Carte'),
    ('Egg with Bacon', null, '3.25', 'A la Carte'),
    ('Egg with Sausage Patty', null, '3.25', 'A la Carte'),
    ('City Ham', null, '2.95', 'A la Carte'),
    ('Egg with City Ham', null, '3.95', 'A la Carte'),
    ('Egg with Bologna', null, '4.75', 'A la Carte'),
    ('Country Ham', null, '3.95', 'A la Carte'),
    ('Egg with Country Ham', null, '4.95', 'A la Carte'),
/* Soup and Salads */    
    ('Chef Salad', null, '8.25', 'Soup and Salads'),
    ('Greek Salad', null, '7.95', 'Soup and Salads'),
    ('Caesar Salad', null, '6.75', 'Soup and Salads'),
    ('House Salad', null, '3.95', 'Soup and Salads'),
    ('Soup and Salad', null, '6.95', 'Soup and Salads'),
    ('Soup du Jour', 'Please call restaurant for soup of the day.', '2.95', 'Soup and Salads'),
    ('Chili Bowl', null, '4.25', 'Soup and Salads'),
    ('Salad Trio', null, '7.50', 'Soup and Salads'),
/* Cold Sandwiches */    
    ('Triple Decker Club', 'Served with lettuce, tomato and mayo on your choice of white, wheat or rye bread with chips.', '7.95', 'Cold Sandwiches'),
    ('Chicken Salad Sandwich', 'Served with lettuce, tomato and mayo on your choice of white, wheat or rye bread with chips.', '6.25', 'Cold Sandwiches'),
    ('Tuna Salad Sandwich', 'Served with lettuce, tomato and mayo on your choice of white, wheat or rye bread with chips.', '6.25', 'Cold Sandwich'),
    ('BLT Sandwich', 'Served with lettuce, tomato and mayo on your choice of white, wheat or rye bread with chips.', '5.95', 'Cold Sandwich'),
    ('Sliced Turkey Sandwich', 'Served with lettuce, tomato and mayo on your choice of white, wheat or rye bread with chips.', '6.25', 'Cold Sandwich'),
    ('Deli Ham Sandwich', 'Served with lettuce, tomato and mayo on your choice of white, wheat or rye bread with chips.', '6.25', 'Cold Sandwich'),
    ('Roast Beef Sandwich', 'Served with lettuce, tomato and mayo on your choice of white, wheat or rye bread with chips.', '6.95', 'Cold Sandwich'),
/* Hot Sandwiches */    
    ('Grilled Cheese Sandwich', 'Served with french fries, slaw and pickle.', '4.95', 'Hot Sandwich'),
    ('Grilled Cheese Sandwich with Bacon', 'Served with french fries, slaw and pickle.', '5.95', 'Cold Sandwich'),
    ('Pulled BBQ Sandwich', 'Served with french fries, slaw and pickle.', '7.25', 'Hot Sandwich'),
    ('Grilled Ham and Cheese Sandwich', 'Served with french fries, slaw and pickle.', '6.95', 'Hot Sandwich'),
    ('Bologna Sandwich', 'Served with french fries, slaw and pickle.', '6.50', 'Hot Sandwich'),
    ('Grilled Chicken Breast Sandwich', 'Served with french fries, slaw and pickle.', '7.50', 'Hot Sandwich'),
    ('Tuna Melt', 'Served with french fries, slaw and pickle.', '7.25', 'Hot Sandwich'),
    ('Sailor Sandwich', 'Served with french fries, slaw and pickle.', '8.50', 'Hot Sandwich'),
    ('Reuben', 'Served with french fries, slaw and pickle.', '8.50', 'Hot Sandwich'),
    ('Cheesesteak Sandwich', 'Served with french fries, slaw and pickle.', '8.75', 'Hot Sandwich'),
    ('Chicken Cheesesteak Sandwich', 'Served with french fries, slaw and pickle.', '8.75', 'Hot Sandwich'),
    ('Diner Turkey Melt', 'Served with french fries, slaw and pickle.', '8.95', 'Hot Sandwich'),
/* Burger and Hot Dogs */    
    ('8 oz. Plain Burger', 'Served with lettuce, tomato, mayo and chips.', '5.95', 'Burger and Hot Dogs'),
    ('8 oz. Cheese Burger', 'Served with lettuce, tomato, mayo and chips.', '6.25', 'Burger and Hot Dogs'),
    ('8 oz. Bacon and Cheese Burger', 'Served with lettuce, tomato, mayo and chips.', '7.25', 'Burger and Hot Dogs'),
    ('8 oz. Fried Egg and Onion Burger', 'Served with lettuce, tomato, mayo and chips.', '7.25', 'Burger and Hot Dogs'),
    ('8 oz. Pineapple Bacon Burger', 'Served with lettuce, tomato, mayo and chips.', '7.50', 'Burger and Hot Dogs'),
    ('8 oz. Patty Melt', 'Served with lettuce, tomato, mayo and chips.', '6.75', 'Burger and Hot Dogs'),
    ('Hot Dog', 'Served with lettuce, tomato, mayo and chips.', '3.25', 'Burger and Hot Dogs'),
    ('Hot Dog Plate', 'Two hot dogs and fries', '6.75', 'Burger and Hot Dogs'),
/* Entrees */    
    ('BBQ Plate', 'With coleslaw and fries.', '8.95', 'Entrees'),
    ('Open Faced Roast Beef', 'With two vegetables.', '8.95', 'Entrees'),
    ('Open Faced Turkey', 'With two vegetables.', '8.95', 'Entrees'),
    ('Meatloaf', 'With two vegetables.', '8.95', 'Entrees'),
    ('Salmon Cakes', 'With two vegetables.', '8.95', 'Entrees'),
    ('Chicken Fingers', 'With two vegetables.', '8.95', 'Entrees'),
    ('Chicken Fried Steak', 'With two vegetables.', '8.95', 'Entrees'),
    ('Ryland''s Fish and Chips', 'With two vegetables.', '8.95', 'Entrees');



COMMIT;