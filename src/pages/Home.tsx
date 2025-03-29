import CardMain, { type Card } from '@/components/CardMain';
import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation();

	const cards: Card[] = [
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
	];

	return <CardMain cards={cards} />;
};

export default Home;
