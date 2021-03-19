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
        $matchsDeLaNuit = $MatchsDeLaNuit -> MatchsDeLanuit(0);
        $matchsDeDemain = $MatchsDeLaNuit -> MatchsDeLanuit(1);
        
        return $this->render('home.html.twig', [
            'matchs'=>$matchsDeLaNuit,
            'tomorrow_matchs'=>$matchsDeDemain
        ]);
    }
    /**
     * @Route("/comparaison/{gameId}", name="face-a-face")
     */
    public function faceAface(MatchsDeLaNuit $MatchsDeLaNuit,StatsManager $StatsManager, int $gameId, Request $request)
    {
        $matchsDeLaNuit = $MatchsDeLaNuit -> MatchsDeLanuit(0);
        $matchsDeDemain = $MatchsDeLaNuit -> MatchsDeLanuit(1);
        $equipesdelaNuit =  $MatchsDeLaNuit -> TeamsId($gameId);
        $teams[0]['Stats'] = $StatsManager->teamStats($equipesdelaNuit[0]);
        $teams[1]['Stats'] = $StatsManager->teamStats($equipesdelaNuit[1]);
        
        //$joueursDomicile = $StatsManager -> TeamPlayers($equipesdelaNuit['HomeTeamId']);
        //$joueursExterieur = $StatsManager -> TeamPlayers($equipesdelaNuit['AwayTeamId']);
        //$game = $StatsManager -> Game();
        //Teams Players Game
        return $this->render('face_a_face.html.twig', [
            //'joueurs_domicile'=>$joueursDomicile,
            //'joueurs_exterieur'=>$joueursExterieur,
            'matchs'=>$matchsDeLaNuit,
            'tomorrow_matchs'=>$matchsDeDemain,
            //'game'=>$game,
            'teams'=>$teams,
            
        ]);
    }
}
