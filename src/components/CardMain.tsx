import { CalendarDays } from 'lucide-react';

import CardContent from './card/CardContent';

interface Cards {
	title: string;
	subtitle: string;
}

const CardMain = () => {
	const title = 'Mensalidades por mês';
	const cards: Cards[] = [
		{
			title: 'Março',
			subtitle: '8 de 10 mensalidades pagas',
		},
		{
			title: 'Abril',
			subtitle: '8 de 10 mensalidades pagas',
		},
		{
			title: 'Maio',
			subtitle: '8 de 10 mensalidades pagas',
		},
	];

	return (
		<CardContent className="px-3" title={title}>
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
		</CardContent>
	);
};

export default CardMain;
