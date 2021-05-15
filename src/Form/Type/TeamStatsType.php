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
                'label' => 'X derniers matchs','required' => false))
            ->add('location', ChoiceType::class, [
                'choices'  => [
                    'non' => null,
                    'Oui' => 'yes',
                ],
                'label' => 'Domicile/exterieur','required' => false
            ])
            ->add('outcome', ChoiceType::class, [
                'choices'  => [
                    'Tout' => '',
                    'Victoires uniquement' => 'W',
                    'Défaites uniquement'=>'L'
                ],
                'label' => 'Victoires/Défaites','required' => false
            ])
            ->add('opponentTeamId', ChoiceType::class, [
                'choices'  => [
                    'Total' => null,
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
