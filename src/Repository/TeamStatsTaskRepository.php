<?php

namespace App\Repository;

use App\Entity\TeamStatsTask;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TeamStatsTask|null find($id, $lockMode = null, $lockVersion = null)
 * @method TeamStatsTask|null findOneBy(array $criteria, array $orderBy = null)
 * @method TeamStatsTask[]    findAll()
 * @method TeamStatsTask[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeamStatsTaskRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TeamStatsTask::class);
    }

    // /**
    //  * @return TeamStatsTask[] Returns an array of TeamStatsTask objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TeamStatsTask
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
