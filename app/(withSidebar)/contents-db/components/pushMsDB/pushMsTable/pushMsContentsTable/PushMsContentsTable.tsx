import PushMsContentsTableHeader from "./PushMsContentsTableHeader";
import PushMsContentsTableRow from "./PushMsContentsTableRow";

interface PushMsContentsTableProps {
  todayContents: Contents[];
}

function PushMsContentsTable({ todayContents }: PushMsContentsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PushMsContentsTableHeader />
        <tbody>
          {todayContents?.map((today, i) => (
            <PushMsContentsTableRow content={today} index={i} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PushMsContentsTable;
