export default function getFormattedSubmitSettings(
  settingData1: number,
  settingData2: number
) {
  const formattedData1 =
    String(settingData1).length === 1 ? `0${settingData1}` : `${settingData1}`;
  const formattedData2 =
    String(settingData2).length === 1 ? `0${settingData2}` : `${settingData2}`;
  const formattedData = formattedData1 + formattedData2;

  return { formattedData };
}
