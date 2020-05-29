import sys
import csv
from os import listdir
from os.path import isfile, join


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


def get_worlwide_data(path):
    worldwide_data = parse_file(path)
    return worldwide_data


def get_worldwide_new_cases(worldwide_data):
    new_cases = {}

    return new_cases


def get_worldwide_new_deaths(worldwide_data):
    new_cases = {}

    return new_cases


def main():
    daily_reports_path = "./data/jhu-data/csse_covid_19_data/csse_covid_19_daily_reports_us"
    worldwide_data_path = "./data/owid-data/public/data/ecdc/full_data.csv"
    daily_reports_data = parse_files_in_path(daily_reports_path)
    worldwide_data = get_worlwide_data(worldwide_data_path)
    print(worldwide_data)


if __name__ == "__main__":
    main()
