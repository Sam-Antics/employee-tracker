INSERT INTO department (name)
VALUES
  ('Administration'),
  ('Accounting'),
  ('Sales'),
  ('Installation'),
  ('Service');

  INSERT INTO role (title, salary, department_id)
  VALUES
    ('Salesperson', 75000.00, 3),
    ('Sales Coordinator', 30000.00, 3),
    ('Marketing Lead', 45000.00, 3),
    ('Sales Manager', 100000.00, 3),
    ('Installation Technician', 38000.00, 4),
    ('Installation Coordinator', 30000.00, 4),
    ('Service Technician', 37450.00, 5),
    ('Service Manager', 52000.00, 5),
    ('Installation Manager', 58000.00, 5),
    ('Customer Service Rep', 32000.00, 5),
    ('Customer Service Manager', 50000.00, 5),
    ('Accounts Manager', 60000.00, 2),
    ('Accountant', 85000.00, 2),
    ('Accounting Clerk', 34000.00, 2),
    ('Chief Financial Officer', 200000.00, 2),
    ('Administrative Assistant', 31000.00, 1),
    ('Administration Manager', 58000.00, 1),
    ('Chief Executive Officer', 300000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Brynne', 'Bates', 4, 0),
  ('Scott', 'Black', 1, 1),
  ('Gene', 'Coy', 1, 1),
  ('Bobby', 'Cline', 1, 1),
  ('Sam', 'Berryman', 2, 1),
  ('Gemma', 'Mount', 3, 1),
  ('Kevin', 'Graham', 9, 0),
  ('Andrew', 'Bacon', 5, 7),
  ('Matt', 'Mason', 5, 7),
  ('Harold', 'Chu', 5, 7),
  ('Kelly', 'Andrews', 5, 7),
  ('BJ', 'Reynolds', 5, 7),
  ('Addison', 'Majors', 6, 7),
  ('Clark', 'Epson', 8, 0),
  ('Junior', 'Morrison', 7, 14),
  ('Conroy', 'Jameson', 7, 14), 
  ('Klara', 'Klein', 7, 14),
  ('Olivia', 'Martin', 11, 0),
  ('Tara', 'Moberly', 10, 18),
  ('Kendra', 'Reynolds', 10, 18),
  ('Tay', 'Fields', 10, 18),
  ('Rhonda', 'Rhodes', 12, 0),
  ('Sylia', 'Brass', 14, 22),
  ('Graham', 'Helms', 14, 22),
  ('Clara', 'Thompson', 14, 22),
  ('Thomas', 'Everly', 13, 27),
  ('Jeff', 'Bates', 15, 0),
  ('Regina', 'Martin', 17, 0),
  ('Blaire', 'Bessinger', 16, 28),
  ('Gerome', 'Bates', 18, 0);