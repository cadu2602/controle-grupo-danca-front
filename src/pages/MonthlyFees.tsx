import type { Card } from '@/components/CardMain';
import CardMain from '@/components/CardMain';
import { useTranslation } from 'react-i18next';

const MonthlyFees = () => {
	const { t } = useTranslation();
	const cards: Card[] = [
		{
			title: t('meses.janeiro'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Carlos',
					paid: true,
				},
				{
					name: 'Luiz',
					paid: true,
				},
			],
		},
		{
			title: t('meses.fevereiro'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Ronan',
					paid: true,
				},
				{
					name: 'Fernando',
					paid: false,
				},
			],
		},
		{
			title: t('meses.marco'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Carlos',
					paid: true,
				},
				{
					name: 'Luiz',
					paid: true,
				},
			],
		},
		{
			title: t('meses.abril'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Ronan',
					paid: true,
				},
				{
					name: 'Fernando',
					paid: false,
				},
			],
		},
		{
			title: t('meses.maio'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'João',
					paid: false,
				},
				{
					name: 'Henrique',
					paid: false,
				},
			],
		},
		{
			title: t('meses.junho'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Carlos',
					paid: true,
				},
				{
					name: 'Luiz',
					paid: true,
				},
			],
		},
		{
			title: t('meses.julho'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Ronan',
					paid: true,
				},
				{
					name: 'Fernando',
					paid: false,
				},
			],
		},
		{
			title: t('meses.agosto'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'João',
					paid: false,
				},
				{
					name: 'Henrique',
					paid: false,
				},
			],
		},
		{
			title: t('meses.setembro'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Carlos',
					paid: true,
				},
				{
					name: 'Luiz',
					paid: true,
				},
			],
		},
		{
			title: t('meses.outubro'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'Ronan',
					paid: true,
				},
				{
					name: 'Fernando',
					paid: false,
				},
			],
		},
		{
			title: t('meses.novembro'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'João',
					paid: false,
				},
				{
					name: 'Henrique',
					paid: false,
				},
			],
		},
		{
			title: t('meses.dezembro'),
			subtitle: '8 de 10 mensalidades pagas',
			monthlyFees: [
				{
					name: 'João',
					paid: false,
				},
				{
					name: 'Henrique',
					paid: false,
				},
			],
		},
	];

	return <CardMain cards={cards} />;
};

export default MonthlyFees;
