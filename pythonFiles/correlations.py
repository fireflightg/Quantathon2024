import csv
import datetime as dt



"""

    Intakes Data from CSV's and stores this in a dictionary
    
"""
def readDataAndStore(fileName):
    
    ret = []
    
    with open(fileName) as clf_file:

        reader = csv.reader(clf_file, delimiter=',')
        line = 0
        for row in reader:
            
            if line != 0:
                ret.append([row[0], float(row[1]), float(row[2]), float(row[3]), float(row[4]), float(row[5]), row[6]])
            line +=1
            
    return ret

"""

    Checks if there is a relationship between the Oil and Delta Airlines stock price.
    That is, there is an inverse delta betweeen the two assets
    
"""
def isCorrelation(clfTwoP, clfOneP, dalTwoP, dalOneP):
    
    clfDelta = (clfTwoP-clfOneP)/2.0
    dalDelta = (dalTwoP-dalOneP)/2.0
    
    if clfDelta < 0 and dalDelta > 0:
        
        return 0 
    
    elif clfDelta > 0 and dalDelta < 0:
        
        return 1
    
    else: 
        return 2
    
"""

    Calculates the possible amount of shares for an assest
    given a split of the total cash available
    
"""
def calculatePossibleShares(cash, price, split):
    
    workingCash = cash/split
    
    totalShares = int(workingCash/price)
    
    
    return totalShares

"""

    Creates a psuedotrade that would be theoretically executed in
    market
    
"""
def openTrade(tradeArr, longLow, shortHigh, closeLong, closeShort, sharesLong, shareShort, date):
    
    
    gainLong = (closeLong - longLow) * sharesLong
    gainShort = (shortHigh - closeShort) * shareShort
    
    tradeArr.append({'Date': date, 'priceLong': longLow, 'priceShort': shortHigh, 'closeLong': closeLong, 'closeShort': closeShort, 'shareLong': sharesLong, 'sharesShort': shareShort, 'gainLong': gainLong, 'gainShort': gainShort})
    
    
    return gainLong + gainShort
    
    

"""

    Main function boi
    
"""
def processData():
    
    cashAvail = 10000
    gainsWithCash = 0
    clfData = readDataAndStore("csvFiles/CLF_data_1.csv")
    dalData = readDataAndStore("csvFiles/DAL_data_1.csv")
    trades = []
    accountBalanceDaily = []
    packageForProcess = {}

    for i in range(2, len(clfData)):
        
        corr = isCorrelation(clfData[i-2][5], clfData[i-1][5], dalData[i-2][5], dalData[i-1][5])
        
        # Short Crude and Long Delta
        if corr == 0:
            sharesOil = calculatePossibleShares(cashAvail, clfData[i][2], 2.0)
            sharesDelta = calculatePossibleShares(cashAvail, dalData[i][3], 2.0)
            cashAvail += openTrade(trades, dalData[i][3], clfData[i][2], dalData[i][4], clfData[i][4], sharesDelta, sharesOil, clfData[i][0])
            
        # Long Crude and Short Delta
        elif corr == 1:
            sharesOil = calculatePossibleShares(cashAvail, clfData[i][2], 2.0)
            sharesDelta = calculatePossibleShares(cashAvail, dalData[i][3], 2.0)
            cashAvail += openTrade(trades, clfData[i][3], dalData[i][2], clfData[i][4], dalData[i][4], sharesOil, sharesDelta, clfData[i][0])
        
        if cashAvail > 20000:
            cashAvail -= 5000
            gainsWithCash += 5000
            
        
        accountBalanceDaily.append([clfData[i][0],cashAvail, gainsWithCash])
    
    packageForProcess.update({'Trades': trades, 'balances':accountBalanceDaily})

    print(cashAvail, gainsWithCash)
    return packageForProcess



        
    
    
    
    