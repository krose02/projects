import sys
import csv
from os import listdir
from os.path import isfile, join
import plotly.graph_objects as go
import numpy as np
np.random.seed(1)

# virus data
NEW_CASES = NEW_DEATHS = TOTAL_CASES = TOTAL_DEATHS = {}

# data paths
daily_reports_path = "./data/jhu-data/csse_covid_19_data/csse_covid_19_daily_reports_us"
worldwide_data_path = "./data/owid-data/public/data/ecdc/full_data.csv"


def parse_file(path):
    # parses a file, returns data
    with open(path) as file:
        parsedFile = csv.reader(file)
        data = list(parsedFile)
    return data


def parse_files_in_path(path):
    # parses all data in files given specific path
    # returns dictionary, key=date val=data

    data_dict = {}
    onlyfiles = [f for f in listdir(path) if isfile(join(path, f))]
    for filename in onlyfiles:
        if filename == "README.md":
            continue
        data = parse_file(path + '/' + filename)
        data_dict[filename] = data
    return data_dict


def getDailyReports(path):
    return parse_files_in_path(path)


def getWorlwideData(path):
    worldwide_data = parse_file(path)
    return worldwide_data


def getUsaData(worldwide_data):
    usa_data = {}

    for i in range(len(worldwide_data)):
        date = worldwide_data[i][0]
        country = worldwide_data[i][1]
        virus_data = worldwide_data[i][2:]
        if country == "United States":
            # storing new_cases, new_deaths, total_cases, total_deaths
            # in dictionary with the date as the key
            usa_data[date] = virus_data
    return usa_data


def populate_virus_data(usa_data):
    # virus data: new cases, total cases,
    # new deaths, total deaths
    for key in usa_data:
        date = key
        NEW_CASES[date] = usa_data[key][0]
        NEW_DEATHS[date] = usa_data[key][1]
        TOTAL_CASES[date] = usa_data[key][2]
        TOTAL_DEATHS[date] = usa_data[key][3]


# getting worlwide and usa data
daily_reports_data = getDailyReports(daily_reports_path)
worldwide_data = getWorlwideData(worldwide_data_path)
usa_data = getUsaData(worldwide_data)

# populating usa virus data
populate_virus_data(usa_data)

# plotting data
x = [key for key in usa_data]
# new cases
y = [NEW_CASES[key] for key in NEW_CASES]
fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y,
                         mode='lines+markers',
                         name='lines+markers'))
fig.show()


def main():
    usa_data = getUsaData(worldwide_data)
    x = [key for key in usa_data]
    y = [NEW_CASES[key] for key in NEW_CASES]
    for i in range(len(y)):
        print(y[i])


if __name__ == "__main__":
    main()
