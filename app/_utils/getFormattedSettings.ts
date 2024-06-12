function getFormattedSettings(settingData: any) {
  const arrayData = settingData?.split("").slice(0, 2);
  let formattedData: string;
  if (arrayData) {
    if (arrayData[0] === "0") {
      formattedData = arrayData[1];
    } else {
      formattedData = arrayData.join("");
    }
  }

  return { formattedData };
}

export default getFormattedSettings;
