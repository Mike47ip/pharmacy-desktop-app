

interface Medicine {
  grade: string;
  code: string;
  name: string;
  items: number;
}

interface WaitingListProps {
  medicines: Medicine[];
}
export const WaitingList: React.FC<WaitingListProps> = ({ medicines }) => {
 return (
  <main className="sticky top-0 h-auto p-4 bg-white border-l-[1px] border-slate-20">
   <div className="flex justify-between">
    <h1 className="text-lg font-semibold">Waitlist</h1>
    <p>
     A{" "}
     <span className="text-custom-gray text-lg opacity-70 font-semibold">
      1#1256
     </span>
    </p>
   </div>
   <p className="text-sm font-semibold pt-3">
    Detail Prescription <span className="text-custom-green">3</span>
   </p>
   <div className="max-w-md mx-auto mt-8 bg-custom-background p-4 rounded-lg">
    <div className="h-28 overflow-y-auto rounded-lg bg-gray-100 custom-scrollbar">
     <table className="w-full  table-fixed">
      <thead>
       <tr className="text-custom-gray">
        <th className="px-4 py-2 w-1/2 text-left">Name</th>
        <th className="px-4 py-2 w-1/2 text-right">Amount </th>
       </tr>
      </thead>
      <tbody>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         H1 D50000 Vitamin
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>{" "}
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Santol Tablets
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Paracetamol Berno
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Injection Fluid
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Colace Glycerine
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
   <aside id="waiting-list">
   <ul className="flex flex-col gap-4">
        {medicines.map((medicine, index) => (
          <li key={index} className="flex items-center gap-4">

            <div>
              <p className="font-bold">{medicine.name}</p>
              <p className="text-sm text-gray-500">{medicine.items} items</p>
            </div>
          </li>
        ))}
      </ul>

   </aside>
  </main>
 );
};
