<?php

namespace App\Entity;

use App\Repository\TeamStatsTaskRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TeamStatsTaskRepository::class)
 */
class TeamStatsTask
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer" )
     */
    private $lastNgames;

    /**
     * @ORM\Column(type="string", length=255 )
     */
    private $location;

    /**
     * @ORM\Column(type="string", length=255 )
     */
    private $outcome;

    /**
     * @ORM\Column(type="integer" )
     */
    private $opponentTeamId;

    /**
     * @ORM\Column(type="string", length=255 )
     */
    private $paceAdjust;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastNgames(): ?int
    {
        return $this->lastNgames;
    }

    public function setLastNgames(?int $lastNgames): self
    {
        $this->lastNgames = $lastNgames;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getOutcome(): ?string
    {
        return $this->outcome;
    }

    public function setOutcome(?string $outcome): self
    {
        $this->outcome = $outcome;

        return $this;
    }

    public function getOpponentTeamId(): ?int
    {
        return $this->opponentTeamId;
    }

    public function setOpponentTeamId(?int $opponentTeamId): self
    {
        $this->opponentTeamId = $opponentTeamId;

        return $this;
    }

    public function getPaceAdjust(): ?string
    {
        return $this->paceAdjust;
    }

    public function setPaceAdjust(?string $paceAdjust): self
    {
        $this->paceAdjust = $paceAdjust;

        return $this;
    }
}
