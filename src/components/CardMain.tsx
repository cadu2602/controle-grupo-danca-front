import { CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import CardContent from './card/CardContent';

interface Card {
	title: string;
	subtitle: string;
}

const CardMain = () => {
	const { t } = useTranslation();

	const cards: Card[] = [
		{
			title: t('meses.marco'),
			subtitle: '8 de 10 mensalidades pagas',
		},
		{
			title: t('meses.abril'),
			subtitle: '8 de 10 mensalidades pagas',
		},
		{
			title: t('meses.maio'),
			subtitle: '8 de 10 mensalidades pagas',
		},
	];

	return (
		<CardContent className="px-3 pb-1" title={t('mensalidadeMes')}>
			{cards.map(card => {
				return (
					<CardContent key={card.title} className="text-start px-4">
						<div>
							<div className="flex items-center mb-2">
								<CalendarDays strokeWidth={3} size={27} />
								<div className="mx-2 font-bold text-3xl">{card.title}</div>
							</div>
							<span className="ml-1">{card.subtitle}</span>
						</div>
					</CardContent>
				);
			})}
			<div>
				<Separator className="m-0 p-0" />
				<Link to="/mensalidades" className="text-[#007AFF] cursor-pointer">
					{t('mostrarMeses')}
				</Link>
			</div>
		</CardContent>
	);
};

export default CardMain;
