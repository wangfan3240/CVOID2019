import pandas
import csv, sqlite3
conn= sqlite3.connect("dbname.db")
df = pandas.read_csv('D:/CVOID/database/Overall.csv')
df.to_sql('CVOID', conn, if_exists='append', index=False)
print('ok')