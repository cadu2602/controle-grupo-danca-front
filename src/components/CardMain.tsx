import { CalendarDays } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { Separator } from '@/components/ui/separator';

import {
	type MonthlyFeesData,
	columns,
} from '@/components/mensalidades/Columns';
import { DataTable } from '@/components/mensalidades/DataTable';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import CardContent from './card/CardContent';

export interface Card {
	title: string;
	subtitle: string;
	monthlyFees: MonthlyFeesData[];
}

interface CardMainProps {
	cards: Card[];
}

const CardMain = ({ cards }: CardMainProps) => {
	const { t } = useTranslation();
	const location = useLocation();
	const [showTable, setShowTable] = useState('');

	function handleShowTable(value: string) {
		setShowTable(value);
	}

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
						<Accordion
							type="single"
							collapsible
							onValueChange={handleShowTable}>
							<AccordionItem value={card.title}>
								<AccordionTrigger className="flex cursor-pointer  dark:bg-[#00205E]! text-[#007AFF] bg-white!">
									{showTable === card.title
										? t('integrantes.ocultar')
										: t('integrantes.mostrar')}
								</AccordionTrigger>
								<AccordionContent>
									<DataTable columns={columns} data={card.monthlyFees} />
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</CardContent>
				);
			})}
			{location.pathname !== '/mensalidades' && (
				<div className="text-center">
					<Separator className="m-0 p-0" />
					<Link to="/mensalidades" className="text-[#007AFF] cursor-pointer ">
						{t('mostrarMeses')}
					</Link>
				</div>
			)}
		</CardContent>
	);
};

export default CardMain;
