"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { useRef } from "react";
import { DrawArrow, WaterDrop } from "react-draw-arrow";


export default function IndexPage() {
  const box1 = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);
  return (
    <>
   
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        OSU Quantathon 2024 Challenge<br className="hidden sm:inline" />
        Commodity Trading Analysis 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        The correlation between Delta Airlines' stock and oil prices and how changes in oil costs affect Delta's financial performance.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="  relative top-28 ">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h2 className=" grid-cols-1 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
      Project Overview 🌍
        
        </h2>
        <p className=" grid-cols-1  max-w-[700px] text-lg text-muted-foreground">
        The correlation between Delta Airlines' stock and oil prices and how changes in oil costs affect Delta's financial performance.
        </p>
        <ul className=" list-disc list-outside">
        <li>Analyze the impact of oil price fluctuations on Delta Airlines' stock value.</li>
<li>Study historical data to identify trends between Delta's stock performance and oil prices.</li>
<li>Assess how changes in oil prices affect Delta's operational costs, profitability, and market valuation.</li>
 </ul>
      </div>
      
      </div>
      <div className="  relative mt-40 ">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h2 className=" grid-cols-1 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
      Data and Resources 📊
        
        </h2>
        <p className=" grid-cols-1  max-w-[700px] text-lg text-muted-foreground">
        The analysis is based on historical price data for crude oil and Delta Airlines </p>
        <ul className=" list-disc list-outside">
       
<li>Includes open, high, low, close, and adjusted close prices for crude oil and Delta Airlines.</li>
<li>Trading volumes are also part of the data set.</li>
<li>The data aids in modeling and forecasting future price movements.</li>
<li>Useful for developing investment strategies.</li>

        </ul>
      </div>
      
      </div>
      
    </section>
    <section className=" text-white dark:text-[#0F172A] container grid items-center gap-6 pb-8 pt-6 md:py-10 bg-[#030711] dark:bg-white ">
    <div className="flex max-w-[980px] flex-col items-start gap-2 ">
    <h2 className=" grid-cols-1 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
    Project Roadmap 🚀
        
        </h2>
    <ul className=" list-disc list-outside">
      
      
    <li>Data Collection: Gather historical data on Delta Airlines' stock prices and oil costs.</li>
    <li>Trend Analysis: Analyze patterns between Delta's stock performance and oil price fluctuations.</li>
    
    <li>Financial Impact Assessment: Evaluate how changes in oil prices affect Delta's profitability.</li>
    <li>Sensitivity Modeling: Develop a model to predict Delta's stock response to oil price changes.</li>
    <li>Risk Mitigation Review: Examine Delta's strategies for managing oil price volatility.</li>
    <li>Competitive Analysis: Compare the oil price impact on Delta with its industry peers.</li>
    <li>Strategic Recommendations: Propose actions for Delta to enhance resilience against oil price changes.</li>
  </ul>

</div>
    </section>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <h1 className="text-5xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Want To Learn More... <br className="hidden sm:inline" />
 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          visit the docs!
       </p>
       <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          Documentation
        </Link>
        </div>
    </section>
 
    </>
  )
}
