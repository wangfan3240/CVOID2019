#-*-encoding:utf-8-*-
import numpy as np
import jieba
import jieba.analyse
import json

date_summary_dic = np.load('date_summary_dic.npy', allow_pickle=True).item()
data_keywords_dic = {}
data = ''
with open('date_sumary_keywords.txt','w+') as f:

	for (date, summary) in date_summary_dic.items():
		print(date)
		keywords = jieba.analyse.extract_tags(summary, topK=20, withWeight=True, allowPOS=('n', 'nr', 'ns'))
		for item in keywords:
			data = data + date + ',' + str(item[0]) + ',' + str(item[1]) + '\n'
		f.write(data)
		data = ''
# print(data_keywords_dic)
# data_keywords_json = json.dumps(data_keywords_dic)
# with open('data_keywords.json','w+') as f:
# 	f.write(data_keywords_json)
# text = date_summary_dic['2020/8/22']
# keywords = jieba.analyse.extract_tags(text, topK=20, withWeight=True, allowPOS=('n', 'nr', 'ns'))
# for item in keywords:


