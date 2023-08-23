from fastapi import FastAPI, HTTPException
import os

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.join(BASE_DIR, "projects")

@app.delete("/delete-image/{project_name}/{image_name}")
def delete_image(project_name: str, image_name: str):
    image_path = os.path.join(PROJECT_DIR, project_name, image_name)
    
    if not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Image not found")
    
    os.remove(image_path)
    return {"message": "Image successfully deleted"}
