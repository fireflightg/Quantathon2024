import csv
from math import sqrt
from correlations import readDataAndStore

def calcSTD(dataSet, mean):
    
    meanDiffSum = 0
    
    for x in dataSet:
        
        meanDiffSum += (x - mean)**2
        
    
    return sqrt(meanDiffSum/len(dataSet)-2)


def calcStdValues(xData, xMean, xStd,  yData, yMean, yStd):
    
    sumVals = 0
    
    for i in range(len(xData)):
        
        zXi = (xData[i] - xMean)/(xStd)
        zYi = (yData[i] - yMean)/(yStd)
        
        sumVals += (zXi*zYi)
        
        
    return sumVals
            

def calculateMean(dataSet):
    
    sumT = sum(dataSet)
    length = len(dataSet)-1
    
    return (sumT/length)



if __name__ == '__main__':
    

    clfData = readDataAndStore("csvFiles/CLF_data_1.csv")
    dalData = readDataAndStore("csvFiles/DAL_data_1.csv")
    closePricesClf = []
    closePricesDal = []
    
    for i in range(len(clfData)):
        
        closePricesClf.append(clfData[i][4])
        closePricesDal.append(dalData[i][4])
    
    dalMean = calculateMean(closePricesDal)
    clfMean = calculateMean(closePricesClf)
    
    clfStd = calcSTD(closePricesClf, clfMean)
    dalStd = calcSTD(closePricesDal, dalMean)
    
    stdVals = calcStdValues(closePricesClf, clfMean, clfStd, closePricesDal, dalMean, dalStd)
    
    corrCoeff = stdVals/(len(closePricesClf)-1)
    
    
    print(corrCoeff)
    
        
    
    
    