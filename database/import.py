import pandas
import csv, sqlite3
conn= sqlite3.connect("dbname.db")
df = pandas.read_csv('D:/CVOID/database/date_sumary_keywords.csv')
df.to_sql('WordCloud', conn, if_exists='append', index=False)
print('ok')