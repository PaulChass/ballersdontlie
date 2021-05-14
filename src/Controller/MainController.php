<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Services\MatchsDeLaNuit;
use App\Services\StatsManager;


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
        $matchsDeDemain=null;
        if(count($matchsDeLaNuit)>6){
            $matchsDeDemain= array_slice($matchsDeLaNuit,6);
            $matchsDeLaNuit=array_slice($matchsDeLaNuit,0,6);
        }
        $equipesdelaNuit =  $MatchsDeLaNuit -> TeamsId($gameId);
        $teams[0]['Stats'] = $StatsManager->teamStats($equipesdelaNuit[0]);
        $teams[1]['Stats'] = $StatsManager->teamStats($equipesdelaNuit[1]);
        $teams[0]['injuries'] = $StatsManager->injury($equipesdelaNuit[0]);
        $teams[1]['injuries'] = $StatsManager->injury($equipesdelaNuit[1]);
        $teams[0]['twitter'] = $StatsManager->twitter($equipesdelaNuit[0]);
        $teams[1]['twitter'] = $StatsManager->twitter($equipesdelaNuit[1]);
        $joueursDomicile = $StatsManager -> playersStats($equipesdelaNuit[0],0);
        $teams[0]['BestPlayers'] = $StatsManager->bestPlayers5($equipesdelaNuit[0],$joueursDomicile);
        $joueursExterieur = $StatsManager -> playersStats($equipesdelaNuit[1],0);
        $teams[1]['BestPlayers'] = $StatsManager->bestPlayers5($equipesdelaNuit[1],$joueursExterieur);
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
            
        ]);
    }
}
