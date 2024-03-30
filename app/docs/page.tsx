import React from 'react'

const Page = () => {
  return (
    <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        OSU Quantathon 2024 Challenge<br className="hidden sm:inline" />
        Commodity Trading Analysis 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        The correlation between Delta Airlines' stock and oil prices and how changes in oil costs affect Delta's financial performance.
        </p>
      </div>
  )
}

export default Page