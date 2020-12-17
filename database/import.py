import pandas
import csv, sqlite3
conn= sqlite3.connect("dbname.db")
df = pandas.read_csv('D:/CVOID/database/ProvinceCase.csv')
df.to_sql('ProvinceCase', conn, if_exists='append', index=False)
print('ok')