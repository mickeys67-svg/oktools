import { generateConversionTable } from "@/lib/converter";

interface ConversionTableProps {
  categoryId: string;
  fromUnitId: string;
  fromUnitName: string;
  fromUnitSymbol: string;
  toUnitId: string;
  toUnitName: string;
  toUnitSymbol: string;
}

export default function ConversionTable({
  categoryId,
  fromUnitId,
  fromUnitName,
  fromUnitSymbol,
  toUnitId,
  toUnitName,
  toUnitSymbol,
}: ConversionTableProps) {
  const rows = generateConversionTable(categoryId, fromUnitId, toUnitId);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-900">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-gray-100">
          {fromUnitName} to {toUnitName} Conversion Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {fromUnitName} ({fromUnitSymbol})
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {toUnitName} ({toUnitSymbol})
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.from} className="border-b border-gray-100 hover:bg-blue-50 transition-colors dark:border-gray-800 dark:hover:bg-gray-800">
                  <td className="py-3 px-4 text-gray-800 font-medium dark:text-gray-100">
                    {row.from} {fromUnitSymbol}
                  </td>
                  <td className="py-3 px-4 text-blue-600 font-medium dark:text-blue-400">
                    {row.to} {toUnitSymbol}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
