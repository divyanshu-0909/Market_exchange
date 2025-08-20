"use client";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  RangeDirective,
  RangesDirective,
  SheetDirective,
  SheetsDirective,
  SpreadsheetComponent
} from "@syncfusion/ej2-react-spreadsheet";

function ExcelSheet({ initialData }: { initialData: any }) {
  registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhIfkx/WmFZfVpgdVVMYl9bQX9PMyBoS35RckVqWXZfcHZRRmBdWUBx"
  );

  let ssObj: SpreadsheetComponent | null = null;

  const handleChange = () => {
    // Handle changes if needed
  };

  // const getAllData = () => {
  //   if (ssObj) {
  //     const data = ssObj.getData(); // Pass 0 as an argument to getData()
  //     data.then((result: any) => {
  //       console.log(result);
  //     });
  //   }
  // };

  function getAllData() {
    const data = initialData.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    const mergedData: { [key: string]: any[] } = {};

    data.forEach((item: any) => {
      const monthYear = new Date(item.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!mergedData[monthYear]) {
        mergedData[monthYear] = [];
      }
      mergedData[monthYear].push(item);
    });

    const result = Object.keys(mergedData).map((key) => {
      return {
        name: key,
        data: mergedData[key]
      };
    });
    console.log(result)
    return result;
  }

  return (
    <div className="App">
      {/* <Button onClick={getAllData}>Get All Data</Button> */}
      <SpreadsheetComponent
        ref={(s: SpreadsheetComponent | null) => {
          if (s) ssObj = s;
        }}
        saveComplete={handleChange}
        dataSourceChanged={handleChange}
        height={700}
      >
        <SheetsDirective>
          {getAllData().map((sheet: any, index: number) => {
            return (
              <SheetDirective name={`Sheet ${index + 1}`} key={index}>
                <RangesDirective>
                  <RangeDirective dataSource={sheet.data}></RangeDirective>
                </RangesDirective>
              </SheetDirective>
            );
          })}
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default ExcelSheet;
