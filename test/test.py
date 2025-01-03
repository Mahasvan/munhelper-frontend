from fastapi import FastAPI
import time

from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def stream():
    for i in res:
        yield i + " "
        time.sleep(1)

res = "Hello World, I am Mahasvan".split()
@app.get("/")
async def stream_res():
    return StreamingResponse(stream())

@app.get("/search/ecosoc-resolutions")
def search(query: str):
    return [
    {
      "symbol": "2005/51",
      "title": "Economic and social repercussions of the Israeli occupation on the living conditions of the Palestinian people in the occupied Palestinian territory, including Jerusalem, and the Arab population in the occupied Syrian Golan",
      "date": "27 July 2005",
      "distance": 0.8469909429550171,
      "document": "Palestinian Territory, including East Jerusalem, as well as the urgent\nneed to address the dire humanitarian crisis facing the Palestinian\npeople,\n\n_Calling_ on both parties to fulfil their obligations under the road\nmap in cooperation with the Quartet,\n\n1. _Stresses_ the need to preserve the national unity and the\nterritorial integrity of the Occupied Palestinian Territory, including East\nJerusalem, and to guarantee the freedom of movement of persons and\ngoods in the Territory, including the removal of restrictions on going\n\n2 See resolution 2200 A (XXI), annex.\n\n3 See resolution 2200 A (XXI), annex.\n4 United Nations, _Treaty Series_ , vol. 1577, No. 27531.\n5 See A/ES-10/273 and Corr.1.\n\ninto and from East Jerusalem, and the freedom of movement to and\nfrom the outside world;\n\n2. _Also stresses_ the vital importance of the construction and\noperation of the airport and the seaport in Gaza and the establishment of\nthe safe passage between the West Bank and Gaza for the economic and"
    },
        {
      "symbol": "2005/10000",
      "title": "Economic and social repercussions of the Israeli occupation on the living conditions of the Palestinian people in the occupied Palestinian territory, including Jerusalem, and the Arab population in the occupied Syrian Golan",
      "date": "27 July 2005",
      "distance": 0.8469909429550171,
      "document": "Palestinian Territory, including East Jerusalem, as well as the urgent\nneed to address the dire humanitarian crisis facing the Palestinian\npeople,\n\n_Calling_ on both parties to fulfil their obligations under the road\nmap in cooperation with the Quartet,\n\n1. _Stresses_ the need to preserve the national unity and the\nterritorial integrity of the Occupied Palestinian Territory, including East\nJerusalem, and to guarantee the freedom of movement of persons and\ngoods in the Territory, including the removal of restrictions on going\n\n2 See resolution 2200 A (XXI), annex.\n\n3 See resolution 2200 A (XXI), annex.\n4 United Nations, _Treaty Series_ , vol. 1577, No. 27531.\n5 See A/ES-10/273 and Corr.1.\n\ninto and from East Jerusalem, and the freedom of movement to and\nfrom the outside world;\n\n2. _Also stresses_ the vital importance of the construction and\noperation of the airport and the seaport in Gaza and the establishment of\nthe safe passage between the West Bank and Gaza for the economic and"
    }
  ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5001)