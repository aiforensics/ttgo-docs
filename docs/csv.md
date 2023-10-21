---
slug: api-version-1
title: V1 (CSV and API)
sidebar_position: 2
---

The `alpha` version of `ttgo` has three APIs; In this article the parameters and the data format is detailed.

<!--truncate-->

## Videos most present globally

Returns a list of all the videos that appeared in more than one country, in the selected time window.

* url: `https://tkgo.aiforensics.org/foryourecommendations/global`
* parameters:
  * `start`: date to begin the window of time considered, format `YYYY-MM-DD` (default, _15 days ago_)
  * `end`: date to end the window of time considered, format `YYYY-MM-DD` (default, _today_)
  * `n`: number of videos to return (default, `20`)
  * `format`: it can be `csv` or `json` (default, `json`)
* CSV file produced has a name such as `global-$NUMBER-OF-VIDEOS.csv` which is the same as `n`
* note: in this API USA is considered only once, not the 52 states.

### CSV format for `/global` API

|Field Name       |Example row n.1         |Example row n.2         |
|-----------------|------------------------|------------------------|
|name             |Guam                    |Panama                  |
|three            |GUM                     |PAN                     |
|two              |GU                      |PA                      |
|dataFormatVersion|0.1                     |0.1                     |
|videoId          |7242021356601101594     |7242021356601101594     |
|musicId          |7242021338859244315     |7242021338859244315     |
|description      |I hope you will appreciate my little house. 🏠 It is for you #learnfromkhaby  #comic #commedy  |I hope you will appreciate my little house. 🏠 It is for you #learnfromkhaby  #comic #commedy  |
|authorName       |khaby.lame              |khaby.lame              |
|musicTitle       |suono originale         |suono originale         |
|musicAuthor      |Khabane lame            |Khabane lame            |
|videoOccurrencies|261                     |261                     |
|samplingTime     |2023-06-08T16:31:21.858Z|2023-06-08T16:31:21.858Z|
|createTime       |2023-06-07T19:01:43.000Z|2023-06-07T19:01:43.000Z|
|likes            |271400                  |271400                  |
|comments         |3170                    |3170                    |
|shares           |557                     |557                     |

As you can note, the same video is duplicated. it is present for every country.

<!-- 
## topByCountry

Returns a list, with the same number of videos for each country, the most present video recommended in the selected time window.

* url: `https://tkgo.aiforensics.org/foryourecommendations/topByCountry`
* parameters:
  * `start`: date to begin the window of time considered, format `YYYY-MM-DD` (default, _15 days ago_)
  * `end`: date to end the window of time considered, format `YYYY-MM-DD` (default, _today_)
  * `n`: number of videos to return (default, `5`)
  * `format`: it can be `csv` or `json` (default, `json`)
* CSV file produced has a name such as `topByCountry-$NUMBER-OF-VIDEOS.csv`
* note: in this API USA is considered only once, not the 52 states.

### CSV format for `/topByCountry`

_Note: there is a small bug, seems the country code/name is not present: I'm checking it next week_

-->

## raw data by Country

* url: `https://tkgo.aiforensics.org/foryourecommendations/country/$THREE_LETTER_COUNTRY_CODE`
* about  the url country code, this is the standard we follow: [ISO_3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
* _examples_: `ARG` is Argentina, `PAK` is Pakistan
* parameters:
  * `start`: date to begin the window of time considered, format `YYYY-MM-DD` (default, _15 days ago_)
  * `end`: date to end the window of time considered, format `YYYY-MM-DD` (default, _today_)
  * `n`: number of videos to return (default, `1000`)
  * `format`: it can be `csv` or `json` (default, `json`)
* CSV file produced has a name such as `country-$THREE_LETTER_CODE-$NUMBER-OF-VIDEOS.csv`
* note: in this API you can't query USA individual states.

### CSV format for `/country/$THREE_LETTER_COUNTRY_CODE`

|Field Name       |Example row n.1         |Example row n.2         |
|-----------------|------------------------|------------------------|
|dataFormatVersion|0.1                     |0.1                     |
|name             |Argentina               |Argentina               |
|three            |ARG                     |ARG                     |
|two              |AR                      |AR                      |
|videoId          |7248720457984150810     |7234862712428236037     |
|musicId          |7242380100220504875     |7234862746257050374     |
|description      |Necesito que @Karim me enseñe a romperla bien etiquetenle 🙏🏼🧬#forearms #fuerza #kratos #retosfitness #gripstrength #nathaa_c  |                        |
|authorName       |nathaa_c                |leandroduan             |
|musicAuthor      |Constant Gains          |leandroduan             |
|samplingTime     |2023-06-30T16:21:43.213Z|2023-06-30T16:21:43.213Z|
|createTime       |2023-06-25T20:17:36.000Z|2023-05-19T12:02:24.000Z|
|likes            |479900                  |314400                  |
|comments         |1001                    |1949                    |
|shares           |331                     |3100                    |
|musicDuration    |64                      |60                      |
|dataFormatVersion|0.1                     |0.1                     |
