---
sidebar_position: 1
---

# Intro

`TikTokGo` dataset is accessible in two ways:
* by downloading the CSV
* by accessing to the database

## CSV

You can get a CSV by interacting with the map, or directly by querying our APIs.
A description of our API interactions is at the [API version 1 post](/blog/api-version-1).

## Database access

1. You need to have a login and password, and this is given to research institutes or other investigators that might fit in our criteria
2. You need to accept our DATA LICENSE
3. Likely you might need a mongodb client like [Mongo Compass](https://www.mongodb.com/products/compass).
4. At that point read the [Database format](/docs/database-format) document.

## How much data we have so far?

We collect daily with these metrics:

* 185 countries + 52 US states (237)
* for 2 times per day
* each access fetch an average of 7 recommended videos.

Multiply these factor and this configuration give us an average of 3318 entries per day.
The collection begun in November 2022, and despite some small interruption, or parameters trimming, the collection have been stable.