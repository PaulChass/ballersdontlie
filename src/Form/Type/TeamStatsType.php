<?php
// src/Form/Type/TaskType.php
namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class TeamStatsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastNgames', IntegerType::class, array(
                'label' => 'X derniers','required' => false))
            ->add('location', ChoiceType::class, [
                'choices'  => [
                    'non' => 'non',
                    'domicile vs exterieur' => 'yes',
                ],
                'label' => 'Domicile/exterieur'
            ])
            ->add('outcome', ChoiceType::class, [
                'choices'  => [
                    'Win et Lose' => '',
                    'Win ' => 'W',
                    'Lose'=>'L'
                ],
                'label' => 'Victoires/Défaites','required' => false
            ])
            ->add('opponentTeamId', ChoiceType::class, [
                'choices'  => [
                    'non' => null,
                    'Vs Matchup' => 1,
                ]
            ])
            ->add('paceAdjust', ChoiceType::class, [
                'choices'  => [
                    'Non' => 'N',
                    'Oui' => 'Y',
                ]
            ])
            ->add('Charger', SubmitType::class)
        ;
    }
}
