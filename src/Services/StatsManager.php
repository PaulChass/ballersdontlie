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
    public function teamStats($teamId)
    {
        $teamsStats = json_decode(file_get_contents('http://localhost/test/teamStats.php'));
        $teamStats=$this->returnStats($teamId, $teamsStats, null);
        return $teamStats;
    } 


    public function returnStats($teamId,$teamsStats,$defTeamsStats)
    {
        
        $i=0;
        $teamStatsId[]= $teamsStats->resultSets[0]->rowSet;
        while($teamStatsId[0][$i][0] != intval($teamId)){
            $i++;}
            
        $stats['Team']=$teamStatsId[0][$i][1];    
        $stats['team_abv'] = $this -> getAbvFromId($teamId);       
        $stats['points']=$teamStatsId[0][$i][26];
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
        $playerStats = json_decode(file_get_contents('http://localhost/test/playerStats.php'));
       
        
        $i=0;
        while ($playerStats->resultSets[0]->rowSet[$i][2] !=$id) {
            $i++;
        }
        return $playerStats->resultSets[0]->rowSet[$i][3];
    }
}