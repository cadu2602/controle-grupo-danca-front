import CardContent from '@/components/card/CardContent';
import { type MonthlyFeesData, columns } from '@/pages/mensalidades/Columns';
import { DataTable } from '@/pages/mensalidades/DataTable';

const MonthlyFees = () => {
	const monthlyFees: MonthlyFeesData[] = [
		{
			month: 'Janeiro',
			paid: 8,
			total: 10,
		},
		{
			month: 'Fevereiro',
			paid: 8,
			total: 10,
		},
		{
			month: 'Março',
			paid: 8,
			total: 10,
		},
		{
			month: 'Abril',
			paid: 8,
			total: 10,
		},
		{
			month: 'Maio',
			paid: 8,
			total: 10,
		},
		{
			month: 'Junho',
			paid: 8,
			total: 10,
		},
		{
			month: 'Julho',
			paid: 8,
			total: 10,
		},
		{
			month: 'Agosto',
			paid: 8,
			total: 10,
		},
		{
			month: 'Setembro',
			paid: 8,
			total: 10,
		},
		{
			month: 'Outubro',
			paid: 8,
			total: 10,
		},
		{
			month: 'Novembro',
			paid: 8,
			total: 10,
		},
		{
			month: 'Dezembro',
			paid: 8,
			total: 10,
		},
	];

	return (
		<CardContent title="Mensalidades">
			<DataTable columns={columns} data={monthlyFees} />
		</CardContent>
	);
};

export default MonthlyFees;
