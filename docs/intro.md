---
sidebar_position: 1
---

# Intro

`TikTokGo` dataset is accessible in two ways:
* by downloading the CSV
* by accessing to the database

## CSV

* You can get a CSV by interacting with the map, or directly by querying our APIs.
* A description of our API interactions is at the [API version 1 post](/docs/api-version-1).

## Database access

1. You need to have a login and password, and this is given to research institutes or other investigators that might fit in our criteria
2. You need to accept our DATA LICENSE
3. Likely you might need a mongodb client like [Mongo Compass](https://www.mongodb.com/products/compass).
4. At that point read the [Database format](/docs/database-format) document.

## How much data we have so far?

We collect daily with these metrics:

* 185 countries + 52 US states (237)
* for 4 times per day
* each access fetch an average of 7 recommended videos.

Multiply these factor and this configuration give us an average of **6636 entries per day**.
The collection begun in November 2022, and despite some small interruption, or parameters trimming, the collection have been stable.

We should display a timeline of the collected amount, please consider:

* We start to collect US as single states only May onwards, before was just one US access
* Because now there is much more data from the US, this might affect some computation, and we are still fixing this **ALPHA public release**.

## Other important contextual information

* The URL is experimental too, ad it would change soon.

![a funny trimming of the tiktok logo with written that we love it, even if there is a slight irony on it](./tiktok-love.jpeg)
