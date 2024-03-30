import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
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
      <h1 className=" grid-cols-1 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
      Project Overview 🌍
        
        </h1>
        <p className=" grid-cols-1  max-w-[700px] text-lg text-muted-foreground">
        The correlation between Delta Airlines' stock and oil prices and how changes in oil costs affect Delta's financial performance.
        </p>
        <ul className=" list-disc list-outside">
        <li >Investigate the relationship between Delta Airlines' stock value and oil prices, analyzing how fluctuations in oil costs influence Delta's financial health.</li>
        <li>Examine historical data to identify trends and patterns in the correlation between Delta Airlines' stock performance and oil price movements.</li>
        <li>Evaluate the impact of rising or falling oil prices on Delta's operational costs, profitability, and stock market valuation.</li>
        </ul>
      </div>
      
      </div>
      <div className="  relative mt-40 ">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className=" grid-cols-1 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
      Data and Resources 📊
        
        </h1>
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
      <section>
        
      </section>
    </section>
  )
}
