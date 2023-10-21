---
sidebar_position: 1
---

# Intro

The `TikTokGo` dataset is accessible in two ways:
* by downloading the CSV
* by accessing the database

## CSV

* You can get a CSV by interacting with the map or directly by querying our APIs.
* A description of our API interactions is at the [API version 1 post](api-version-1).

## Database access

1. You need to request access via this [form](https://view.forms.app/aiforensics/tkgo-data-request).
2. You'll have to accept our DATA LICENSE, which grant unlimited access to the database.
3. Likely you might need a mongodb client like [Mongo Compass](https://www.mongodb.com/products/compass).
4. At that point read the [Database format](database-format) document.

## How much data do we have so far?

We collect daily with these metrics:

* 185 countries + 52 US states (237)
* for 4 times per day
* each access fetches an average of 7 recommended videos.

Multiply these factors and this configuration gives us an average of **6636 entries per day**.
The collection began in November 2022, and despite some small interruptions and parameters trimming, the collection has been stable.

Please consider:

* We started to collect US as single states only from May 2023 onwards. Before, it was just one US access.
* Because now there is much more data from the US, this might affect some computation, and we are still fixing this **preliminary public release**.

## Other important contextual information

* The data returned in the visualization and in the CSV is not complete: **all the content produced by people with less than 500k followers is omitted**. Only the Database Access can give you visibility over the full dataset.

![a funny trimming of the tiktok logo with written that we love it, even if there is a slight irony on it](./tiktok-love.jpeg)
