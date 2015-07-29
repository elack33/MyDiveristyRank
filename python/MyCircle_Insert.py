import MySQLdb

# Open database connection
db = MySQLdb.connect("localhost", "root", "Super", "MyServer")

# prepare a cursor object using cursor() method
# cursor = db.cursor(MySQLdb.cursors.DictCursor) returned dictionary with header as key

# Prepare SQL query to INSERT a record into the database.
# sql = "INSERT INTO EMPLOYEE(FIRST_NAME, \
#        LAST_NAME, AGE, SEX, INCOME) \
#        VALUES ('%s', '%s', '%d', '%c', '%d' )" % \
#        ('Mac', 'Mohan', 20, 'M', 2000)

var1 = 'variable is one'

# sql = "INSERT INTO Test(Test1, \
#        value2) \
#        VALUES ((SELECT Test1 FROM Test WHERE ID = 1), '%s')" % \
#        ('two')

cursor = db.cursor()
testsql = "SELECT Test1 FROM Test WHERE ID = 2"
cursor.execute(testsql)
sinsert = cursor.fetchone(MySQLdb.cursors.DictCursor)
print sinsert
# sin2 = sinsert[0]
#
# print sinsert[0]

sql = "INSERT INTO Test(Test1) VALUES (%s)"

cursor.execute(sql, testsql)

# try:
#     # Execute the SQL command
#     cursor.execute(sql, testsql)
#     # Commit your changes in the database
#     db.commit()
# except:
#     # Rollback in case there is any error
#     db.rollback()

# disconnect from server
db.close()
