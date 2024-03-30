"use client"
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Image from 'next/image';

interface ContentMap {
    [key: string]: string;
}

const Page: React.FC = () => {
    const [content, setContent] = useState<string>('Select an item to see the details.');
    const [img, setImg] = useState<string>();
    const [desc, setDesc] = useState<string>('Documentation');

    const updateContent = (key: string) => {
        const contentMap: ContentMap = {
            'About Delta': 'The Delta Stock Price dataset is a curated collection of historical data capturing the daily closing prices of Delta, a prominent player in the aviation industry. The dataset has been sourced from reliable financial databases, ensuring its accuracy and credibility. Each entry in the dataset corresponds to a specific date and includes the closing price of Delta\'s stock.',
            'Significance Delta': 'Analyzing the Delta Stock Price dataset provides valuable insights into market sentiments, investor behavior, and industry trends within the aviation sector. As Delta is a key player in the industry, fluctuations in its stock price serve as a barometer for assessing market conditions and forecasting future trends.',
            'About Crude': 'The Crude Oil Price dataset comprises historical data representing the daily price movements of crude oil, a vital commodity with global economic implications. The dataset has been obtained from authoritative sources, such as the U.S. Energy Information Administration (EIA) or reputable financial platforms. Like the Delta Stock Price dataset, it is structured chronologically, with each entry containing the date and the corresponding price of crude oil.',
            'Significance Crude': 'Crude oil prices play a pivotal role in shaping economic dynamics worldwide, impacting various sectors, including aviation. Understanding the relationship between crude oil prices and Delta\'s stock price is essential for gauging market dynamics, assessing risk, and making informed decisions, particularly in the context of the aviation industry, where fuel costs significantly influence operational expenses.',
            'Our Solution': ' The strategy that was employed in code centered around the premise of pairs trading. The thought process behind this strategy centered around the dependence Delta Airlines has on oil. Furthermore, their bottom line is dependent on the price of crude oil. The hypothesis behind this is that as oil prices fluctuate the revenue earned by Delta Airlines fluctuates as it is inversely related to the price of oil. For example, as oil prices increase the cost of aviation oil procurement costs increase and vice versa. This is an intuitive assumption and can further be proven to have a slight correlation by calculating a correlation coefficient between the two datasets. Hence, a strategy of pairs trading can be employed in this case. Typically, this strategy involves checking for a price deviation from the mean price over a period. Once a deviation is  seen, a position can be entered which for pairs trading would involve both a long and short position. Some analysis can be done to see if there truly is a correlation between the price of oil and the price of Delta Airlines stock. To check this a correlation test was done to check the correlation between close prices for both assets. The calculation for this can be seen in the code and an r value of  -.19 was calculated. This value is not majorly significant however it does show some correlation between the two assets’ prices. From here a strategy was developed to capitalize on this correlation. The general premise of this strategy involves a two day rolling window. Using the close from the previous two days a percentage change is calculated and compared to each other. The first case being if the price of oil declined consecutively while the price of Delta increased consecutively simultaneously, a position shorting oil would be opened with another position long Delta Airlines. The other being a similar relationship except reversed with Oil price increasing consecutively and Delta Airlines decreasing consecutively. In this case an Oil would be shorted while a long position in Delta Airlines would be opened. In either case, both long and short positions will be closed daily at closing price.;cash.png',
            'About Analysis': 'This script performs financial analysis focusing on the correlation between crude oil prices and Delta Airlines\' stock prices. It reads historical data from CSV files, simulates trading based on the price correlation, and calculates possible share purchases and trading gains or losses.',
    'Trading Simulation': 'The trading simulation within the script uses historical price data to execute theoretical trades. It assesses the price movements of crude oil and Delta Airlines stocks, determining trade actions based on their correlation. The simulation aims to forecast market conditions and manage investment risks.',
    'Correlation Calculation': 'The calculation process involves standardizing the data points (transforming them into r-scores), then determining the product of corresponding r-scores from the two datasets, summing these products, and dividing by the number of data points to find the correlation coefficient. This coefficient helps in understanding how two financial variables move in relation to each other.',
    'Buy and Sell on Long': 'The graph "Buy and Sell on Long" illustrates the entry (\'priceLong\' in red) and exit (\'closeLong\' in blue) prices for long positions from early 2016 to past 2022. It shows the price data as a scatterplot, indicating the fluctuating nature of the market and potential trading activity. The x-axis denotes time by year, while the y-axis represents price. A horizontal trend line provides a reference for the average price level.The chart is used to analyze the behavior of long position trades over the given period.;./Buy_and_Sell_on_Long.png', 
    'Buy and Sell on Short': 'The graph "Buy and Sell on Short" presents two datasets: \'priceShort\' in red, depicting the entry prices for short positions, and \'closeShort\' in blue, showing the exit prices, over a period from early 2014 to past 2024. The scatterplot shows price volatility and suggests key transaction points for short-selling activities. A horizontal line indicates the average exit price level for the observed period. The x-axis represents time by year, and the y-axis shows price, although not explicitly labeled.;./Buy_and_Sell_on_Short.png',
    'CLF vs DAL Close Prices': 'The graph depicts the closing prices of both CLF and DAL. The horizontal axis represents time, while the vertical axis denotes the price of the respective stocks. Each data point on the graph signifies the closing price of CLF and DAL at the end of the trading session.;./CLF_vs_DAL_Close_Prices.png',
    

        };
        setDesc(key);
        var text =  contentMap[key].split(";");
        setContent(text[0]|| 'Information not available');
        if(text.length>1){
            setImg(text[1]|| "");
        }
    };

    return (
        <>
            <Sidebar>
                <Menu className='dark:bg-[#030712] hover:bg-[#fbfbfb] focus:bg-[#fbfbfb]'>
                    <SubMenu label="Data Description">
                        <SubMenu id='2' label="Delta Stock Price Dataset">
                            <MenuItem onClick={() => updateContent('About Delta')}>About</MenuItem>
                            <MenuItem onClick={() => updateContent('Significance Delta')}>Significance</MenuItem>
                        </SubMenu>
                        <SubMenu id='1' label="Crude Oil Price Dataset">
                            <MenuItem onClick={() => updateContent('About Crude')}>About</MenuItem>
                            <MenuItem onClick={() => updateContent('Significance Crude')}>Significance</MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu label="Results and Analysis">
                        
                            <MenuItem onClick={() => updateContent('Our Solution')}>Our Solution</MenuItem>
                       
                   
                        <SubMenu id='1' label="Code">
                            <MenuItem onClick={() => updateContent('About Analysis')}>About</MenuItem>
                            <MenuItem onClick={() => updateContent('Trading Simulation')}>Trading Simulation</MenuItem>
                            <MenuItem onClick={() => updateContent('Correlation Calculation')}>Correlation Calculation</MenuItem>
                        </SubMenu>
                        <SubMenu id='1' label="Our Data">
                            <MenuItem onClick={() => updateContent('Buy and Sell on Long')}>Buy and Sell on Long</MenuItem>
                            <MenuItem onClick={() => updateContent('Buy and Sell on Short')}>Buy and Sell on Short</MenuItem>
                            <MenuItem onClick={() => updateContent('CLF vs DAL Close Prices')}>CLF vs DAL Close Prices</MenuItem>
                        </SubMenu>
                    </SubMenu>

                    {/* Add other SubMenus and MenuItems as needed */}
                </Menu>
            </Sidebar>
            <section className="gap-8 text-center container grid items-center ">
            <div className="flex justify-center items-center"> 
            <div className="content text-center ">
           
            <h1 className="gap-8 text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl">

{desc}

            </h1>
            <p className="text-lg pt-4 text-muted-foreground">{content}</p>
            {desc == "Our Solution" && <img className=' text-center items-center flex border-red-100  relative' src={"cash1.png"} alt="Loaded Content" /> || null}
            {desc == "Our Solution" && <img className=' text-center items-center flex border-red-100  relative' src={"cash2.png"} alt="Loaded Content" /> || null}
           

            <div className="flex justify-center items-center pt-3  ">        
            {img && <img className=' text-center items-center flex border-red-100  relative' src={img} alt="Loaded Content" /> || null}
            </div>
            </div>
            </div>
            </section>
        </>
    );
}

export default Page;
