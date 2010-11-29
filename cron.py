# -*- coding: utf-8 -*-
from base import BaseRequestHandler
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from model import Tweet
from weibopy.api import API
from weibopy.auth import BasicAuthHandler

class UploadTweets(BaseRequestHandler):
    def get(self):
        auth = BasicAuthHandler("user", "password")
        api = API(auth, source="3990552168")
        timeline = api.user_timeline(count=1, page=1)[0]
        tweet = Tweet.all().get()
        if not tweet:
            tweet = Tweet(text=timeline.text, date=timeline.created_at)
        tweet.text = timeline.text
        tweet.date = timeline.created_at
        tweet.put()

application = webapp.WSGIApplication([('/cron/updatetweets', UploadTweets)],debug=False) 
 
def main(): 
    run_wsgi_app(application) 
 
if __name__ == "__main__": 
    main()
