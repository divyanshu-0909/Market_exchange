"use client";
import React from "react";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";
import Card from "./TopCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const MyResponsiveGrid = () => {
  const layout: Layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
  };
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layout}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key={"a"}>1</div>
      <div key={"b"}>2</div>
      <div key={"c"}>3</div>
    </ResponsiveGridLayout>
  );
};

export default MyResponsiveGrid;

// import React, { useState, useCallback } from "react";
// import { WidthProvider, Responsive, Layout } from "react-grid-layout";
// import _ from "lodash";

// const ResponsiveReactGridLayout = WidthProvider(Responsive);

// interface AddRemoveLayoutProps {
//   onLayoutChange?: (layout: Layout[]) => void;
//   className?: string;
//   cols?: { [key: string]: number };
//   rowHeight?: number;
// }

// interface GridItem {
//   i: string;
//   x: number;
//   y: number;
//   w: number;
//   h: number;
//   add?: boolean;
// }

// const AddRemoveLayout: React.FC<AddRemoveLayoutProps> = ({
//   onLayoutChange,
//   className = "layout",
//   cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//   rowHeight = 100,
// }) => {
//   const [items, setItems] = useState<GridItem[]>(() =>
//     [0, 1, 2, 3, 4].map((i, _, list) => ({
//       i: i.toString(),
//       x: i * 2,
//       y: 0,
//       w: 2,
//       h: 2,
//       add: i === list.length - 1,
//     }))
//   );

//   const [newCounter, setNewCounter] = useState(0);
//   const [currentCols, setCurrentCols] = useState(cols);

//   const onAddItem = useCallback(() => {
//     console.log("adding", `n${newCounter}`);
//     setItems(prevItems => [
//       ...prevItems,
//       {
//         i: `n${newCounter}`,
//         x: (prevItems.length * 2) % currentCols.lg,
//         y: Infinity, // puts it at the bottom
//         w: 2,
//         h: 2,
//       },
//     ]);
//     setNewCounter(prevCounter => prevCounter + 1);
//   }, [newCounter, currentCols]);

//   const onBreakpointChange = useCallback((_breakpoint: string, cols: number) => setCurrentCols(prevCols => ({ ...prevCols, [_breakpoint]: cols })), []);

//   const onRemoveItem = useCallback((i: string) => {
//     console.log("removing", i);
//     setItems(prevItems => _.reject(prevItems, { i }));
//   }, []);

//   const createElement = useCallback(
//     (el: GridItem) => {
//       const removeStyle: React.CSSProperties = {
//         position: "absolute",
//         right: "0px",
//         top: 0,
//         cursor: "pointer",
//       };
//       const i = el.add ? "+" : el.i;
//       return (
//         <div key={i} data-grid={el} className=" bg-slate-600">
//           {el.add ? (
//             <span
//               className="add text"
//               onClick={onAddItem}
//               title="You can add an item by clicking here, too."
//             >
//               Add +
//             </span>
//           ) : (
//             <span className="text">{i}</span>
//           )}
//           <span
//             className="remove"
//             style={removeStyle}
//             onClick={() => onRemoveItem(el.i)}
//           >
//             xklklkkakdfnms,
//           </span>
//         </div>
//       );
//     },
//     [onAddItem, onRemoveItem]
//   );

//   const handleLayoutChange = useCallback(
//     (layout: Layout[]) => {
//       onLayoutChange?.(layout);
//     },
//     [onLayoutChange]
//   );

//   return (
//     <div>
//       <button onClick={onAddItem}>Add Item</button>
//       <ResponsiveReactGridLayout
//         onLayoutChange={handleLayoutChange}
//         onBreakpointChange={onBreakpointChange}
//         className={className}
//         cols={currentCols}
//         rowHeight={rowHeight}
//       >
//         {_.map(items, createElement)}
//       </ResponsiveReactGridLayout>
//     </div>
//   );
// };

// export default AddRemoveLayout;
