import matplotlib.pyplot as plt
from correlations import readDataAndStore


"""
    
    
    Can one of u run this does it work
    
"""
def plotYearlyTrends(clfData, dalData):
    
    plt.figure(figsize=(10, 6))
    plt.plot(clfData[:][0], clfData[:][4], marker='o', linestyle='-')

    # Formatting
    plt.title('Price vs Date')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.grid(True)
    plt.tight_layout()
    plt.show()
    
    
plotYearlyTrends(readDataAndStore("csvFiles/CLF_data_1.csv"), readDataAndStore("csvFiles/DAL_data_1.csv"))



