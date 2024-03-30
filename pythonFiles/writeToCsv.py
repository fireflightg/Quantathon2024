import csv
from correlations import processData, readDataAndStore


if __name__ == '__main__':
    
    data = processData()
    trades = data['Trades']
    cashOvrTime = data['balances']
    
    
    file = open("trades.csv", "w")
    file.write("Date, priceLong, priceShort, closeLong, closeShort, sharesLong, sharesShort, gainLong, gainShort \n")
    for trade in trades:
        
        file.write(trade['Date'] + ',' + str(trade['priceLong']) +',' + str(trade['priceShort']) + ',' + str(trade['closeLong']) + ',' + str(trade['closeShort']) + ',' + str(trade['shareLong']) + ',' +str(trade['sharesShort']) + ',' + str(trade['gainLong'])+ ',' + str(trade['gainShort']) + '\n')
        
    cashFile = open('cashBalance.csv', 'w')
    
    for cashBal in cashOvrTime:
        
        cashFile.write(cashBal[0] +',' +str(cashBal[1]) +',' +str(cashBal[2]) + '\n')
        

        
        
