import MbtiContentsTableHeader from "./MbtiContentsTableHeader";
import MbtiContentsTableRow from "./MbtiContentsTableRow";

interface MbtiContentsTableProps {
  mbtiContents: Contents[];
}

function MbtiContentsTable({ mbtiContents }: MbtiContentsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <MbtiContentsTableHeader />
        <tbody>
          {mbtiContents?.map((mbti, i) => (
            <MbtiContentsTableRow mbti={mbti} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MbtiContentsTable;
