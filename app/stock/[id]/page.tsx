"use client";
import { SidebarComponent } from "@/components/Upload/Sidebar";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({params}:{params:{id:string}}) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(
      () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "autosize": true,
              "symbol": "NASDAQ:AAPL",
            "interval": "D",
            "support_host": "https://www.tradingview.com",
            "timezone": "exchange",
            "theme": "light",
            "style": "1",
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "save_image": false,
            "studies": [
              "ROC@tv-basicstudies",
              "StochasticRSI@tv-basicstudies",
              "MASimple@tv-basicstudies"
            ],
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650"
          }`;
        if (container.current as unknown as HTMLElement) {
          (container.current as unknown as HTMLElement).appendChild(script);
        }
      },
      []
    );

    return (
		<SidebarComponent>
            <div className="tradingview-widget-container" ref={container} style={{ height: "00px", width: "100%" }}>
		  <div className="tradingview-widget-container__widget" style={{ height: "700px", width: "100%" }}></div>
		</div>
        </SidebarComponent>
	  );
 }

export default memo(TradingViewWidget);