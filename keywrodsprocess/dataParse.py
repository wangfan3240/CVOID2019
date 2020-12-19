#-*-encoding:utf-8-*-
import re
import csv
import numpy as np
import jieba
import jieba.analyse
datas = []
with open('News.csv','r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        date = re.search(r'(\d{4}/\d{1,2}/\d{1,2})',row['pubDate'])
        date = date.group(0)
        print(date)
        data = ([date,row['title'],row['summary']])
        datas.append(data)
    datas = np.array(datas)

np.save("datas.npy",datas)

datas = np.load('datas.npy')

date_title_dic = {}
date_summary_dic = {}

print(datas.shape)

titles = ''
summary = ''
index = 0
for i in range(datas.shape[0]):

    # print(index)

    if datas[index][0] != datas[i][0]:
        print('index: ' + str(index) + ' ' + datas[index][0])
        print('i: ' + str(i) + ' ' + datas[i][0])
        for j in range(index,i):
            titles = titles + datas[j][1] + ' '
            summary = summary + datas[j][2] + ' '
        print('titles: ' + titles)
        print('summary: ' + summary)
        date_title_dic[datas[index][0]] = titles
        date_summary_dic[datas[index][0]] = summary
        index = i
        titles = ''
        summary = ''
print('date_title_dic: ' , date_title_dic)
print('date_summary_dic: ' , date_summary_dic)
np.save('date_title_dic.npy',date_title_dic)
np.save('date_summary_dic.npy',date_summary_dic)