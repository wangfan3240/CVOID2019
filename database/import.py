import pandas
import csv, sqlite3
conn= sqlite3.connect("dbname.db")
df = pandas.read_csv('D:/CVOID/database/News.csv')
df.to_sql('News', conn, if_exists='append', index=False)
print('ok')