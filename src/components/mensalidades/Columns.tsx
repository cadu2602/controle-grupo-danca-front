import type { ColumnDef } from '@tanstack/react-table';
import { CircleCheck, CircleX } from 'lucide-react';

export interface MonthlyFeesData {
	name: string;
	paid: boolean;
}

export const columns: ColumnDef<MonthlyFeesData>[] = [
	{
		accessorKey: 'name',
		header: 'Nome',
	},
	{
		accessorKey: 'paid',
		cell: ({ row }) =>
			row.getValue('paid') ? (
				<CircleCheck className="text-green-500" />
			) : (
				<CircleX className="text-red-500" />
			),
		header: 'Pago',
	},
];
