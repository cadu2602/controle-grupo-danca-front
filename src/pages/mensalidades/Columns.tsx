import type { ColumnDef } from '@tanstack/react-table';

export interface MonthlyFeesData {
	month: string;
	paid: number;
	total: number;
}

export const columns: ColumnDef<MonthlyFeesData>[] = [
	{
		accessorKey: 'month',
		header: 'Mês',
	},
	{
		accessorKey: 'paid',
		header: 'Mensalidades pagas',
	},
	{
		accessorKey: 'total',
		header: 'Total de mensalidades',
	},
];
