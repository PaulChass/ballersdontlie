<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Services\MatchsDeLaNuit;
use App\Services\StatsManager;
use App\Entity\TeamStatsTask;
use App\Form\Type\TeamStatsType;
use App\Entity\PlayerStatsTask;
use App\Form\Type\PlayerStatsType;


class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(MatchsDeLaNuit $MatchsDeLaNuit): Response
    {
        $matchsDeLaNuit = $MatchsDeLaNuit -> MatchsDeLanuit();
        $matchsDeDemain=null;
        if(count($matchsDeLaNuit)>6){
            $matchsDeDemain= array_slice($matchsDeLaNuit,6);
            $matchsDeLaNuit=array_slice($matchsDeLaNuit,0,6);
        }
        else{ $matchsDeDemain= $MatchsDeLaNuit -> MatchsDeLanuit(1);}
        return $this->render('home.html.twig', [
            'matchs'=>$matchsDeLaNuit,
            'tomorrow_matchs'=>$matchsDeDemain
        ]);
    }
    /**
     * @Route("/matchup/{gameId}", name="face-a-face")
     */
    public function faceAface(MatchsDeLaNuit $MatchsDeLaNuit,StatsManager $StatsManager, int $gameId, Request $request)
    {
        
        $matchsDeLaNuit = $MatchsDeLaNuit -> MatchsDeLanuit();
        $equipesdelaNuit =  $MatchsDeLaNuit -> TeamsId($gameId);
        $matchsDeDemain=null;
        if(count($matchsDeLaNuit)>6){
            $matchsDeDemain= array_slice($matchsDeLaNuit,6);
            $matchsDeLaNuit=array_slice($matchsDeLaNuit,0,6);
        }
        else{ $matchsDeDemain= $MatchsDeLaNuit -> MatchsDeLanuit(1);}

        $lastNgames=0;$location[0]='';$location[1]='';$outcome='';$opponentTeamId[0]=0;$opponentTeamId[1]=0;$paceAdjust='N';$seasonType='Regular+Season';


        $teamStatsTask= new TeamStatsTask();
        $playerStatsTask= new PlayerStatsTask();

            $joueursDomicile = $StatsManager -> playerStats($equipesdelaNuit[0],$lastNgames,$location[0],$outcome,$opponentTeamId[0],$paceAdjust,$seasonType);
            $joueursExterieur = $StatsManager -> playerStats($equipesdelaNuit[1],$lastNgames,$location[1],$outcome,$opponentTeamId[1],$paceAdjust,$seasonType);
            $teams[0]['BestPlayers'] = $StatsManager->bestPlayers5($equipesdelaNuit[0],$joueursDomicile);
            $teams[1]['BestPlayers'] = $StatsManager->bestPlayers5($equipesdelaNuit[1],$joueursExterieur);

        $form = $this->createForm(TeamStatsType::class, $teamStatsTask);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
            $teamStatsTask = $form->getData();
            if(null !==$teamStatsTask->getLastNGames()){
                $lastNgames= $teamStatsTask->getLastNGames();}
            if($teamStatsTask->getLocation()=="yes"){$location[0]="Home";$location[1]="Road";}
            $outcome= $teamStatsTask->getOutcome();
            if($teamStatsTask->getOpponentTeamId()==1){$opponentTeamId[0]=$equipesdelaNuit[1];$opponentTeamId[1]=$equipesdelaNuit[0];};
            $paceAdjust= $teamStatsTask->getPaceAdjust();
            $seasonType= $teamStatsTask->getSeasonType();
            
            // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!1
            // $entityManager = $this->getDoctrine()->getManager();
            // $entityManager->persist($task);
            // $entityManager->flush()
            }  

                
        
        $teams[0]['Stats'] = $StatsManager->teamStats($equipesdelaNuit[0],$lastNgames,$location[0],$outcome,$opponentTeamId[0],$paceAdjust,$seasonType);
        $teams[1]['Stats'] = $StatsManager->teamStats($equipesdelaNuit[1],$lastNgames,$location[1],$outcome,$opponentTeamId[1],$paceAdjust,$seasonType);
        $teams[0]['injuries'] = $StatsManager->injury($equipesdelaNuit[0]);
        $teams[1]['injuries'] = $StatsManager->injury($equipesdelaNuit[1]);
        $teams[0]['twitter'] = $StatsManager->twitter($equipesdelaNuit[0]);
        $teams[1]['twitter'] = $StatsManager->twitter($equipesdelaNuit[1]);
       
        
        $form2 = $this->createForm(PlayerStatsType::class, $playerStatsTask);
        $form2->handleRequest($request);

        

        if ($form2->isSubmitted() && $form2->isValid()) {
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
           
            $playerStatsTask = $form2->getData();
            if(null !==$playerStatsTask->getLastNGames()){
                $lastNgames= $playerStatsTask->getLastNGames();}
            if($playerStatsTask->getLocation()=="yes"){$location[0]="Home";$location[1]="Road";}
            $outcome= $playerStatsTask->getOutcome();
            if($playerStatsTask->getOpponentTeamId()==1){$opponentTeamId[0]=$equipesdelaNuit[1];$opponentTeamId[1]=$equipesdelaNuit[0];};
            $paceAdjust= $playerStatsTask->getPaceAdjust();
            $seasonType= $playerStatsTask->getSeasonType();
            $teams[0]['BestPlayers'] = $StatsManager->bestPlayers5($equipesdelaNuit[0],$joueursDomicile);
            $teams[1]['BestPlayers'] = $StatsManager->bestPlayers5($equipesdelaNuit[1],$joueursExterieur);
            $joueursDomicile = $StatsManager -> playerStats($equipesdelaNuit[0],$lastNgames,$location[0],$outcome,$opponentTeamId[0],$paceAdjust,$seasonType);
            $joueursExterieur = $StatsManager -> playerStats($equipesdelaNuit[1],$lastNgames,$location[1],$outcome,$opponentTeamId[1],$paceAdjust,$seasonType);

            // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!1
            // $entityManager = $this->getDoctrine()->getManager();
            // $entityManager->persist($task);
            // $entityManager->flush()
            }
        //$joueursExterieur = $StatsManager -> TeamPlayers($equipesdelaNuit['AwayTeamId']);
        //$game = $StatsManager -> Game();
        //Teams Players Game
        return $this->render('face_a_face.html.twig', [
            'joueurs_domicile'=>$joueursDomicile,
            'joueurs_exterieur'=>$joueursExterieur,
            'matchs'=>$matchsDeLaNuit,
            'tomorrow_matchs'=>$matchsDeDemain,
            //'game'=>$game,
            'teams'=>$teams,
            'form' => $form->createView(),
            'form2' => $form2->createView(),
        ]);
    }

    /**
     * @Route("/graph/{stat}/{playerId}", name="graph")
     */
    public function graph(StatsManager $StatsManager, int $stat, int $playerId)
    {
        $graph=$StatsManager->getGraphStats($stat,$playerId);
         return $this->render('graph.html.twig',[
            'graph'=>$graph,
            ]);  
    }
}
