import requests
import time

startTime = time.time()
r = requests.get('http://www.google.com')
endTime = time.time() - startTime
endTime = '%.2f' % (endTime)
length_of_document = len(r.content)/1024.0

print "The content from " + r.url + " is " + str(length_of_document) + " kb.  It took " + str(endTime) + " seconds to get the request."