BEGIN;

INSERT INTO menu
    (name, description, price, category)
Values
    ('Breakfast Special (Monday-Friday 6:00am - 9:00am)', 'Two eggs with your choice of bacon or sausage patty and a side of home fries, fried apples or grits and toast.', '4.50', 'Breakfast'),
    ('Strawberry and Broad', 'Two eggs, served with your choice of bacon, bologna, link or patty sausage, choice of home fries, fried apples or grits and your choice of toast, biscuit or short stack.', '7.25', 'Breakfast'),
    ('Sean''s Beefy Scramble', 'Three eggs scrambled with ground beef, garlic and onions with toast a biscuit or short stack and your choice of home fries, fried apple or grits.', '7.95', 'Breakfast');



COMMIT;