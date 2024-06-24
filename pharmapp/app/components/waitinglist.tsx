export const WaitingList: React.FC = () => {
 return (
  <main className="sticky top-0 h-auto p-4 bg-white border-l-[1px] border-slate-20">
   <div className="flex justify-between">
    <h1 className="text-lg font-semibold ">Waitlist</h1>
    <p>
     A <span className="text-custom-gray opacity-70 font-semibold">1#1256</span>
    </p>
   </div>
   <p className="text-sm font-semibold pt-3">Detail Prescription <span className="text-custom-green">3</span></p>
   <div className="max-w-md mx-auto mt-8 bg-gray-200 p-4 rounded-lg">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-300">
            <th className="px-4 py-2 w-1/2 text-left">Column 1</th>
            <th className="px-4 py-2 w-1/2 text-left">Column 2</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-2 border-r">Row {index + 1}, Col 1</td>
              <td className="px-4 py-2">Row {index + 1}, Col 2</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
 );
};
