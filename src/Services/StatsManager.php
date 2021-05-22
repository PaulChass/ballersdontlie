<?php
namespace App\Services;

use Symfony\Contracts\Translation\TranslatorInterface;


class StatsManager 
{
    
      

    /**
     * Renvoi un tableau des moyennes statistique pour l'équipe donné
     *
     * @uses returnStats()
     * @uses http://www.elpauloloco.ovh/TeamsStats.json  (sauvegarde des stats par équipe de nbastats )
     *
     * 
     * @param int $teamId
     * id de l'équipe (d'après nbastats)
     * @return array
     *     tableau avec stats des équipes à domicile et à l'exterieur ainsi que la date
     *     
    **/
    public function teamStats($teamId,$lastNgames,$location,$outcome,$opponentTeamId,$paceAdjust,$seasonType)
    {
        $teamsStatsJson = $this->curl('team',$teamId,$lastNgames,$location,$outcome,$opponentTeamId,$paceAdjust,$seasonType);
        $teamsStats=json_decode($teamsStatsJson);
        if($teamsStats->resultSets[0]->rowSet==[])
        {
            $teamsStatsJson = $this->curl('team',$teamId,0);
            $teamsStats=json_decode($teamsStatsJson);
            $teamStats=$this->returnStats($teamId, $teamsStats, null);
            $teamStats['error']="Aucun résultat trouver pour les critères selectionnés";
            return $teamStats;
            }
        $teamStats=$this->returnStats($teamId, $teamsStats, null);
       
        return $teamStats;
    } 

    public function playerStats($teamId,$lastNgames,$location,$outcome,$opponentTeamId,$paceAdjust,$seasonType)
    {
        $playersStatsJson = $this->curl('player',$teamId,$lastNgames,$location,$outcome,$opponentTeamId,$paceAdjust,$seasonType);
        $playersStats=json_decode($playersStatsJson);
        if($playersStats->resultSets[0]->rowSet==[])
        {
            $playersStatsJson = $this->curl('player',$teamId,0);
            $playersStats=json_decode($playersStatsJson);
            $playerStats=$this->returnPlayerStats($playersStats,$teamId);
            $playerStats['error']="Aucun résultat trouver pour les critères selectionnés";
            return $playerStats;
            }
        $playerStats=$this->returnPlayerStats($playersStats,$teamId);
       
        return $playerStats;
    } 

    public function bestPlayers5($teamId,$playersStats)
    {
        $players5Stats=$this->playerStats($teamId,5,'','',0,'N','Regular+Season');
        $best3players = array_slice($players5Stats, 0, 3);  
        for ($i=0; $i < 3; $i++) {
            $j=0; 
            while($best3players[$i]['id']!==$playersStats[$j]['id'])
            {$j++;}
            $best3players[$i]['pointsDiff'] = $best3players[$i]['points']-$playersStats[$j]['points'];
            $best3players[$i]['assistsDiff'] = $best3players[$i]['assists']-$playersStats[$j]['assists'];
            $best3players[$i]['reboundsDiff'] = $best3players[$i]['rebounds']-$playersStats[$j]['rebounds'];
            $best3players[$i]['minutesDiff'] = $best3players[$i]['minutes']-$playersStats[$j]['minutes'];
            $best3players[$i]['minutesDiff'] = $best3players[$i]['minutes']-$playersStats[$j]['minutes'];
        }
        return $best3players;
    }


    public function getGraphStats($stat,$playerId)
    {

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://stats.nba.com/stats/leaguegamefinder/?playerOrTeam=P&leagueId=00&season=2020-21&seasonType=Regular+Season&teamId=&vsTeamId=&playerId='.$playerId.'&outcome=&location=&dateFrom=&dateTo=&vsConference=&vsDivision=&conference=&division=&seasonSegment=&poRound=0&starterBench=&gtPts=&gtReb=&gtAst=&gtStl=&gtBlk=&gtOReb=&gtDReb=&gtDD=&gtTD=&gtMinutes=&gtTov=&gtPF=&gtFGM=&gtFGA=&gtFG_Pct=&gtFTM=&gtFTA=&gtFT_Pct=&gtFG3M=&gtFG3A=&gtFG3_Pct=&ltPts=&ltReb=&ltAst=&ltStl=&ltBlk=&ltOReb=&ltDReb=&ltDD=&ltTD=&ltMinutes=&ltTov=&ltPF=&ltFGM=&ltFGA=&ltFG_Pct=&ltFTM=&ltFTA=&ltFT_Pct=&ltFG3M=&ltFG3A=&ltFG3_Pct=&eqPts=&eqReb=&eqAst=&eqStl=&eqBlk=&eqOReb=&eqDReb=&eqDD=&eqTD=&eqMinutes=&eqTov=&eqPF=&eqFGM=&eqFGA=&eqFG_Pct=&eqFTM=&eqFTA=&eqFT_Pct=&eqFG3M=&eqFG3A=&eqFG3_Pct=',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Host:  stats.nba.com',
            'Connection:  keep-alive',
            'Accept:  application/json, text/plain, */*',
            'x-nba-stats-token:  true',
            'User-Agent:  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
            'x-nba-stats-origin:  stats',
            'Origin:  https://www.nba.com',
            'Sec-Fetch-Site:  same-site',
            'Sec-Fetch-Mode:  cors',
            'Sec-Fetch-Dest:  empty',
            'Referer:  https://www.nba.com/',
            'Accept-Encoding:  gzip, deflate, br',
            'Accept-Language:  en-GB,en;q=0.9,en-US;q=0.8',
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        $playersGames = json_decode($response)->resultSets[0]->rowSet;
        for ($i=0; $i < 8; $i++) { 
            $label[$i]= $playersGames[$i][8];
            switch ($stat) {
                case 1:
                    $graph['stat']='% Tir';
                    $value[$i]=  $playersGames[$i][14];
                    break;
                case 2:
                    $graph['stat']='% Tir 3pts';
                    $value[$i]=  $playersGames[$i][17];
                    break;
                case 3:
                    $graph['stat']='Rebonds par match';
                    $value[$i]=  $playersGames[$i][23];
                    break;
                case 4:
                    $graph['stat']='Passes decisives';
                    $value[$i]=  $playersGames[$i][24];
                    break; 
                case 5:
                    $graph['stat']='Pertes de balle';
                    $value[$i]=  $playersGames[$i][27];
                    break;  
                case 6:
                    $graph['stat']='Interceptions ';
                    $value[$i]=  $playersGames[$i][25];
                    break; 
                case 7:
                    $graph['stat']='Contres par match';
                    $value[$i]=  $playersGames[$i][26];
                    break; 
                case 8:
                    $graph['stat']='Plus/minus';
                    $value[$i]=  $playersGames[$i][29];
                    break;  
                case 9:
                        $graph['stat']='Minutes par match';
                        $value[$i]=  $playersGames[$i][10];
                        break; 
                  
                default:
                    $graph['stat']='Points par match';
                    $value[$i]=  $playersGames[$i][11];
                    break;
            }
        }
        $label=array_reverse($label);
        $value=array_reverse($value);
        $graph['label']=$label;
        $graph['value']=$value;
        $graph['title']=$playersGames[$i][2];
        
        return $graph;
    }

    public function returnStats($teamId,$teamsStats,$defTeamsStats)
    {
        
        $i=0;
        $teamStatsId[]= $teamsStats->resultSets[0]->rowSet;
        while($teamStatsId[0][$i][0] != $teamId){
            $i++;}
        $stats['Team']=$teamStatsId[0][$i][1];    
        $stats['team_abv'] = $this -> getAbvFromId($teamId);       
        $stats['points']=$teamStatsId[0][$i][26];
        $stats['minutes']=$teamStatsId[0][$i][6];
        $stats['pointsRank'] = $teamStatsId[0][$i][52];
        $stats['rebounds']=$teamStatsId[0][$i][18];
        $stats['reboundsRank'] = $teamStatsId[0][$i][44];
        $stats['assists']=$teamStatsId[0][$i][19];
        $stats['assistsRank'] = $teamStatsId[0][$i][45];
        $stats['blocks']=$teamStatsId[0][$i][22];
        $stats['blocksRank'] = $teamStatsId[0][$i][48];
        $stats['steals']=$teamStatsId[0][$i][21];
        $stats['stealsRank'] = $teamStatsId[0][$i][47];
        $stats['fg_pct']=$teamStatsId[0][$i][9];
        $stats['fg_pctRank'] = $teamStatsId[0][$i][35];
        $stats['three_fg_pct']=$teamStatsId[0][$i][12];
        $stats['three_fg_pctRank'] = $teamStatsId[0][$i][38];
        $stats['three_attempts']=$teamStatsId[0][$i][11];
        $stats['three_attemptsRank'] = $teamStatsId[0][$i][37];
        if (isset($defTeamsStats)){
            $j=0;
            while($defTeamsStats->resultSets[0]->rowSet[$j][0] != $teamId){
                $j++;}
            $stats['d_fg_pct']=$defTeamsStats->resultSets[0]->rowSet[$j][8];
            $rank=1;
            for ($k=0; $k < count($defTeamsStats->resultSets[0]->rowSet); $k++){
                if ($defTeamsStats->resultSets[0]->rowSet[$k][8] <= $stats['d_fg_pct']) {
                    $rank++; }}
            $stats['d_fg_pctRank']=$rank;
        }
        $stats['turnovers']=$teamStatsId[0][$i][20];
        $stats['turnoversRank'] = $teamStatsId[0][$i][46];
        $stats['wins'] =  $teamStatsId[0][$i][3];
        $stats['losses'] = $teamStatsId[0][$i][4];
        $stats['Rank'] = $teamStatsId[0][$i][31];

        return $stats;
    } 

    public function getAbvFromId($id)
    {
        $playerStatsJson = $this->curl('player',$id,0);
        $playerStats = json_decode($playerStatsJson);
       
        
        $i=0;
        while ($playerStats->resultSets[0]->rowSet[$i][2] !=$id) {
            $i++;
        }
        return $playerStats->resultSets[0]->rowSet[$i][3];
    }


    public function returnPlayerStats($playersStats,$teamId)
    {
        $players=[];$player=[];
        for ($i=0; $i < count($playersStats->resultSets[0]->rowSet) ; $i++) { 
            if ($playersStats->resultSets[0]->rowSet[$i][2]==$teamId)
                {
                    $player['id']=$playersStats->resultSets[0]->rowSet[$i][0];
                    $player['name']=$playersStats->resultSets[0]->rowSet[$i][1];
                    $player['games']=$playersStats->resultSets[0]->rowSet[$i][5];
                    $player['minutes']=$playersStats->resultSets[0]->rowSet[$i][9];
                    $player['minutesRank']=$playersStats->resultSets[0]->rowSet[$i][38];

                    $player['points']=$playersStats->resultSets[0]->rowSet[$i][29];
                    $player['pointsRank']=$playersStats->resultSets[0]->rowSet[$i][58];
                    $player['rebounds']=$playersStats->resultSets[0]->rowSet[$i][21];
                    $player['reboundsRank']=$playersStats->resultSets[0]->rowSet[$i][50];
                    $player['assists']=$playersStats->resultSets[0]->rowSet[$i][22];
                    $player['assistsRank']=$playersStats->resultSets[0]->rowSet[$i][51];
                    $player['turnovers']=$playersStats->resultSets[0]->rowSet[$i][23];
                    $player['turnoversRank']=$playersStats->resultSets[0]->rowSet[$i][52];
                    $player['steals']=$playersStats->resultSets[0]->rowSet[$i][24];
                    $player['stealsRank']=$playersStats->resultSets[0]->rowSet[$i][53];
                    $player['blocks']=$playersStats->resultSets[0]->rowSet[$i][25];
                    $player['blocksRank']=$playersStats->resultSets[0]->rowSet[$i][54];
                    $player['plusminus']=$playersStats->resultSets[0]->rowSet[$i][30];
                    $player['plusminusRank']=$playersStats->resultSets[0]->rowSet[$i][59];
                    $player['fg_pct']=$playersStats->resultSets[0]->rowSet[$i][12];
                    $player['fg_pctRank']=$playersStats->resultSets[0]->rowSet[$i][41];
                    $player['three_fg_pct']=$playersStats->resultSets[0]->rowSet[$i][15];  
                    $player['three_fg_pctRank']=$playersStats->resultSets[0]->rowSet[$i][44];   
                    array_push($players,$player);
                }
        }
      
        usort($players, function($a, $b) {
            return $a['pointsRank'] <=> $b['pointsRank'];
        });
        return $players;
    }


    public function curl($teamOrplayer,$teamId,$lastNgames,$location='',$outcome='',$opponentTeamId=0,$paceAdjust='N',$seasonType='Regular+Season'){
        
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://stats.nba.com/stats/leaguedash'.$teamOrplayer.'stats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames='.$lastNgames.'&LeagueID=00&Location='.$location.'&MeasureType=Base&Month=0&OpponentTeamID='.$opponentTeamId.'&Outcome='.$outcome.'&PORound=0&PaceAdjust='.$paceAdjust.'&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType='.$seasonType.'&ShotClockRange=&StarterBench=&TeamID='.$teamId.'&TwoWay=0&VsConference=&VsDivision=&Weight=',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Host:  stats.nba.com',
            'Connection:  keep-alive',
            'Accept:  application/json, text/plain, */*',
            'x-nba-stats-token:  true',
            'User-Agent:  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
            'x-nba-stats-origin:  stats',
            'Origin:  https://www.nba.com',
            'Sec-Fetch-Site:  same-site',
            'Sec-Fetch-Mode:  cors',
            'Sec-Fetch-Dest:  empty',
            'Referer:  https://www.nba.com/',
            'Accept-Encoding:  gzip, deflate, br',
            'Accept-Language:  en-GB,en;q=0.9,en-US;q=0.8',
            
        ),
    ));

$response = curl_exec($curl);

curl_close($curl);
return $response;
}


public function injury($teamId){
     
    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://www.rotowire.com/basketball/tables/injury-report.php?team=ALL&pos=ALL',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
      CURLOPT_HTTPHEADER => array(
      ),
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);
    $injuredPlayers = json_decode($response);
    $team_abv=$this -> getAbvFromId($teamId);
    $infirmerie=[];$injury= [];
    for ($i=0; $i < count($injuredPlayers); $i++) { 
            if($injuredPlayers[$i]->team ==$team_abv){
                    $injury['player']=$injuredPlayers[$i]->player;
                    $injury['injury']=$injuredPlayers[$i]->injury;
                    $injury['status']=$injuredPlayers[$i]->status;
                    array_push($infirmerie,$injury);
            }
        }
        return $infirmerie;
    }

    public function twitter($teamId){
        $team_abv=$this -> getAbvFromId($teamId);
        $leagueTwitters=[
            'CHI'=>'https://twitter.com/chicagobulls?s=20',
            'IND'=>'https://twitter.com/Pacers?s=20',
            'NOP'=>'https://twitter.com/PelicansNBA?s=20',
            'MIA'=>'https://twitter.com/MiamiHEAT?s=20',
            'ORL'=>'https://twitter.com/OrlandoMagic?s=20',
            'MIL'=>'https://twitter.com/Bucks?s=20',
            'MIN'=>'https://twitter.com/Timberwolves?s=20',
            'DAL'=>'https://twitter.com/dallasmavs?s=20',
            'LAL'=>'https://twitter.com/Lakers?s=20',
            'LAC'=>'https://twitter.com/laclippers',
            'CHA'=>'https://twitter.com/hornets?s=20',
            'WAS'=>'https://twitter.com/WashWizards?s=20',
            'OKC'=>'https://twitter.com/okcthunder?s=20',
            'NYK'=>'https://twitter.com/nyknicks?s=20',
            'DET'=>'https://twitter.com/DetroitPistons?s=20',
            'UTA'=>'https://twitter.com/utahjazz?s=20',
            'BOS'=>'https://twitter.com/celtics?s=20',
            'ATL'=>'https://twitter.com/ATLHawks?s=20',
            'SAS'=>'https://twitter.com/spurs?s=20',
            'PHI'=>'https://twitter.com/sixers?s=20',
            'BKN'=>'https://twitter.com/BrooklynNets?s=20',
            'CLE'=>'https://twitter.com/cavs?s=20',
            'TOR'=>'https://twitter.com/Raptors?s=20',
            'MEM'=>'https://twitter.com/memgrizz?s=20',
            'POR'=>'https://twitter.com/trailblazers?s=20',
            'PHX'=>'https://twitter.com/Suns?s=20',
            'GSW'=>'https://twitter.com/warriors?s=20',
            'SAC'=>'https://twitter.com/SacramentoKings?s=20',
            'HOU'=>'https://twitter.com/HoustonRockets?s=20',
            'DEN'=>'https://twitter.com/nuggets?s=20'
        ];
        $twitter=$leagueTwitters[$team_abv];
        return $twitter;
    }
}