---
sidebar_position: 2
---

# Database Format

This is the dataset you would have access if you get authorized (login and password) to our mongodb server. To get access you should ask in our Slack channel.

The entry described below represent one video. How many entries we have?

185 countries + 52 US states x 2 times per day x 7 (avg) video recommended per access.

This configuration give us an average of **3318** entries per day; the collection starts in November 2022, and despite some small interruption, or parameters trimming, the collection have been stable.

### Collection Description

This collection records the presence of a specific video, identified by `videoId` at a specific point in time (`curlTime` )in the ForYou page accessed from a given country (`countryCode`). Each entry is part of a sampling observation, identified by the `curlId`. A `curlId` will repeat across videos that have been observed together when accessing the ForYou page.

### Example

```json
{
  "_id": {
    "$oid": "646f4963c4fd165db8293ea8"
  },
  "hash": "82ae050b4e33de5509dd78ecf328c474376cf87e",
  "_cls": "TKGlobalForYouVideo",
  "authorFollowers": 149200,
  "authorFollowing": 9560,
  "authorId": "6812821487495742470",
  "authorName": "alloshw1",
  "authorProfileLikes": 9802,
  "authorVideoLikes": 144400,
  "authorVideos": 41,
  "captions": null,
  "comments": 4026,
  "countryCode": "VI",
  "createTime": {
    "$date": "2023-02-28T16:18:01.000Z"
  },
  "creation_date": {
    "$date": "2023-05-25T11:39:46.907Z"
  },
  "curlId": "e9073ee33416fc4213e4f57714eb6569077daae9",
  "curlTime": {
    "$date": "2023-03-05T09:33:59.544Z"
  },
  "description": "#إجابة عن @ضيعة ضايعة #دعم_حسابات #علوش #صندوق_الكنز🏆 #صندوق_الكنز #صناديق #اضافات ",
  "duration": 14,
  "labels": null,
  "likes": 10100,
  "modified_date": {
    "$date": "2023-05-25T11:39:46.907Z"
  },
  "musicAuthor": "دعم حسابات",
  "musicDuration": 14,
  "musicId": "7205241762728774405",
  "musicOriginal": true,
  "musicTitle": "الصوت الأصلي",
  "nickname": "دعم حسابات",
  "order": 0,
  "schema_version": 1,
  "shares": 1790,
  "videoId": "7205241760593841414",
  "views": 148500
}
```

| Field Name | Description | Type | Public field | From | 
| --- | --- | --- | --- | --- | 
| hash | unique identifier of the data point. Built hashing together the videoId and the curlId | string | ✅ | TTGO |
| authorFollowers | Accounts following the author  at the time of observation | int | ✅ | TikTok | 
| authorFollowing | Accounts the author is following at the time of observation | int | ✅ | TikTok | 
| authorId | Internal TikTok id for the author | string | ✅ | TikTok | 
| authorName | Name of the author | string | ✅ | TikTok | 
| authorProfileLikes | Likes on the profile of the author | int | ✅ | TikTok | 
| authorVideoLikes | Total likes of the author’s videos | int | ✅ | TikTok | 
| authorVideos | Amount of videos published by the author | int | ✅ | TikTok | 
| captions | ??? | List[string] | ✅ | TikTok | 
| comments | Total comments on the author’s videos | int | ✅ | TikTok | 
| countryCode | Country from which we accessed the ForYou page | string | ✅ | TTGO | 
| createTime | When the video was created | date | ✅ | TikTok | 
| creation_date | When the entry was inserted in the dataset | date | ❌ | TTGO | 
| curlId | Id of the observation | string | ✅ | TTGO | 
| curlTime | When the observation has been performed | date | ✅ | TTGO |
| description | Textual description of the video on TikTok | string | ✅ | TikTok |  |
| duration | Duration of the video in seconds | int | ✅ | TikTok | 
| labels | Labels applied by TikTok to the video | List[string] | ✅ | TikTok | 
| likes | Amount of likes on the video | int | ✅ | TikTok | 
| modified_date | Last time the entry has been modified in the database | date | ❌ | TTGO | 
| musicAuthor | Author of the music of the video | string | ✅ | TikTok | 
| musicDuration | Duration of the music clip of the video | int | ✅ | TikTok | 
| musicId | Id of the music of the video | string | ✅ | TikTok | 
| musicOriginal | Boolean identifying the music as original or not | boolean | ✅ | TikTok | 
| musicTitle | Title of the music of the video | string | ✅ | TikTok | 
| nickname | Display name of the author of the video | string | ✅ | TikTok | 
| order | Order in which the video has appeared in our observation | int | ✅ | TTGO | 
| schema_version | TTGO Schema version | int | ❌ | TTGO | 
| shares | Number of times the video has been shared | int | ✅ | TikTok | 
| state_code | Code of the geographical subdivision  | string | ✅ | TTGO | 
| videoId | ID of the video on TikTok | string | ✅ | TikTok | 
| views | Number of times the video has been played | int | ✅ | TikTok | 
