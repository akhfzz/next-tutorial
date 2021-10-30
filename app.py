from fastapi import FastAPI
from typing import Optional

app = FastAPI()

# uvicorn name_file:name_root_lib --reload
@app.get('/')
async def say_to_world():
    return {
        'sender': 'hallo world!'
    }