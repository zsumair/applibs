import React from "react";

function Skeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <>
        <div
          role="status"
          className="border  shadow rounded-md p-4 max-w-xs w-full mx-auto"
          key={i}
        >
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    ));
}

export default Skeleton;
