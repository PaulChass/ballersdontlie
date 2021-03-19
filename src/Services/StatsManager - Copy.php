<?php
$client = new http\Client;
$request = new http\Client\Request;
$request->setRequestUrl('https://stats.nba.com/stats/leaguedashteamstats?College=&Conference=&Country=&DateFrom=12/01/2020&DateTo=03/18/2021&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=5&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&TwoWay=0&VsConference=&VsDivision=&Weight=');
$request->setRequestMethod('GET');
$request->setOptions(array());
$request->setHeaders(array(
  'Host' => ' stats.nba.com',
  'Connection' => ' keep-alive',
  'Accept' => ' application/json, text/plain, */*',
  'x-nba-stats-token' => ' true',
  'User-Agent' => ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
  'x-nba-stats-origin' => ' stats',
  'Origin' => ' https://www.nba.com',
  'Sec-Fetch-Site' => ' same-site',
  'Sec-Fetch-Mode' => ' cors',
  'Sec-Fetch-Dest' => ' empty',
  'Referer' => ' https://www.nba.com/',
  'Accept-Encoding' => ' gzip, deflate, br',
  'Accept-Language' => ' en-GB,en;q=0.9,en-US;q=0.8',
  'Cookie' => 'ak_bmsc=441F2047EBA4CE3F4CE0E4620F1F18FD5F64C8D7E97F0000CBC55360E6F61F68~pl4XgUhaWBJyZpxDG8O3Zdt21O84aOm78jPksT2ri6Gv3tK9hRTyqjuCOpwVu1BH8c4pW0kB2ZUwcjKmtvTYaufysRYbVXstPNQadCvPpgrcEhpfV3BAt8Oa4H8npKRSBrlujc9WjQJF8mOOQz9xeBK3qZVRRE9b83s/r4j6ecLE5BzsefiiVPp7fACxeIk0ji26dPOC2AleDWWNKQwGnBwRVVaTb8rt4RpHNg6l62+1c=; bm_sv=7A701642219326347DA20419E949046B~5sHQW0nuvmV3EbRkn4O9J0XmNqVc224UgcXOwmGT7eNjGNKTPMFetrGBlIirIMBIkPKMX9S7Y+KDD+NX2iPsN274uLvuDARPNUDruEVokr8kcvQ+o5n6hK+QZnDKREw4JR4/x33p6yEouuRwrskTMQ=='
));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();
