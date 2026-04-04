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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {fromUnitName} to {toUnitName} Conversion Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  {fromUnitName} ({fromUnitSymbol})
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  {toUnitName} ({toUnitSymbol})
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.from} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 text-gray-800 font-medium">
                    {row.from} {fromUnitSymbol}
                  </td>
                  <td className="py-3 px-4 text-blue-600 font-medium">
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
