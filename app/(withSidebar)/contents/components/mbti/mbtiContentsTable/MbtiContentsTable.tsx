import MbtiContentsTableHeader from "./MbtiContentsTableHeader";
import MbtiContentsTableRow from "./MbtiContentsTableRow";
import mbtiData from "./fakeData";

function MbtiContentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <MbtiContentsTableHeader />
        <tbody>
          {mbtiData.map((mbti, i) => (
            <MbtiContentsTableRow mbti={mbti} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MbtiContentsTable;
