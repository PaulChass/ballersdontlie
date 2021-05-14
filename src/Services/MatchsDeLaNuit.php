<?php
namespace App\Services;


class MatchsDeLaNuit 
{
    /**
 * Retourne la liste des matchs de la nuit NBA 
 *
 * @uses getAbvFromTeam()  
 * @uses http://www.elpauloloco.ovh/2020-03-06.json  (sauvegarde de nbastats du jour)
 *
 * 
 * @return array
 *     tableau avec noms et id des équipes à domicile et à l'exterieur ainsi que la date
 *     
**/
    public function MatchsDeLaNuit()
    {       
        date_default_timezone_set('America/Indiana/Indianapolis'); 
        $date=time(); 
        $schedule=$this->schedule();
        $games=$schedule->league->standard;
        $tonightGames=[];
        for ($i=0; $i < count($games); $i++) { 
            if($games[$i]->startDateEastern==date('Ymd',$date)){
                $match['GameId']=$games[$i]->gameId;
                //$gid=$match['GameId'];
                $homeTeamAbv=substr($games[$i]->gameUrlCode,9,3);
                $awayTeamAbv=substr($games[$i]->gameUrlCode,12,3);
                $gamedate=$games[$i]->startTimeEastern;
                $match['HomeTeamId']= $games[$i]->hTeam->teamId;
                $match['HomeLogoUrl']= 'https://stats.nba.com/media/img/teams/logos/'.$homeTeamAbv.'_logo.svg';
                
                $match['AwayTeamId']= $games[$i]->vTeam->teamId;
                $match['AwayLogoUrl']= 'https://stats.nba.com/media/img/teams/logos/'.$awayTeamAbv.'_logo.svg';

                $match['period']= null;
                $match['timeRemaining']= null;
                $match['homeScore']= null;
                $match['awayScore']= null;
                $match['id']=null;
                date_default_timezone_set('Europe/Paris'); 
                $match['Time']=date($gamedate);
                //$match['Time']=date('H:i', mktime(date('H', strtotime($gamedate)),date('i', strtotime($gamedate))));
                array_push($tonightGames,$match);
                date_default_timezone_set('America/Indiana/Indianapolis');
            }
        }
        return $tonightGames;
    }

    public function TeamsId($gameId)
    {
        $schedule=$this->schedule();
        $games=$schedule->league->standard;
        $i=0;
        $match=[];

        while(intval($games[$i]->gameId)!==$gameId)
        {$i++;}
        $match[0]= $games[$i]->hTeam->teamId;
        $match[1]= $games[$i]->vTeam->teamId;
        return $match;
    }


    private function schedule()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://data.nba.net/prod/v2/2020/schedule.json',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Cookie: akacd_data_nba_net_ems=1616059329~rv=14~id=f99c4dca08f89687c039a759f2256383'
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return json_decode($response);
    }
}