import { CalendarDays, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Separator } from '@/components/ui/separator';

import {
	type MonthlyFeesData,
	columns,
} from '@/components/mensalidades/Columns';
import { DataTable } from '@/components/mensalidades/DataTable';
import CardContent from './card/CardContent';

interface Card {
	title: string;
	subtitle: string;
	monthlyFees: MonthlyFeesData[];
}

const CardMain = () => {
	const { t } = useTranslation();
	const [showTable, setShowTable] = useState({ month: '', show: false });

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

	function handleShowTable(month: string) {
		setShowTable(prev =>
			month === prev.month ? { month: '', show: false } : { month, show: true },
		);
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
						{showTable.show && showTable.month === card.title ? (
							<div>
								<div
									onClick={() => handleShowTable(card.title)}
									className="flex cursor-pointer underline text-[#007AFF]">
									<ChevronDown />
									<span>Ocultar integrantes</span>
								</div>
								<DataTable columns={columns} data={card.monthlyFees} />
							</div>
						) : (
							<div
								onClick={() => handleShowTable(card.title)}
								className="flex cursor-pointer underline text-[#007AFF]">
								<ChevronRight />
								<span>Mostrar integrantes</span>
							</div>
						)}
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
