import json
import math
from pprint import pprint


def update_price(current_price):
    return math.floor(current_price*0.8)


with open('Testdata.json', 'r+') as file:
    data = json.load(file)

    for elem in data:
        if 'Cameras & Camcorders' in elem['categories']:
            elem['price'] = update_price(elem['price'])

    file.seek(0)
    json.dump(data, file, indent=2)
    file.truncate()

pprint(data)
