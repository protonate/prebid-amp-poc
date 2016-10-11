# prebid-amp-poc

To run the POC, clone this repo and Prebid.js. In the Prebid repo check out the `poc/prebid-sandbox` branch.

The current config expects these
hosts listening on loopback:
```
prebidapp.com
amp.prebidapp.com
```
In the Prebid.js repo run `gulp serve --https`.  In this repo run `gulp serve`.

Load this url in chrome with mobile emulation:

https://prebidapp.com:5000/amp-test.html#development=1

You should see an AppNexus Prebid.js ad in each of the two `amp-ad` components on the page.

Remaining issues:
-[X] Render multiple ad placements
-[ ] render bugs  
