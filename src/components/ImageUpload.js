import React, { useState } from 'react';

function ImageUpload() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const files = event.target.files;
        let imagesArray = [];
        for (let i = 0; i < files.length; i++) {
            imagesArray.push(URL.createObjectURL(files[i]));
        }
        setImages(imagesArray);
    };

    const handleDeleteImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        // 必要に応じて、実際のファイルもバックエンドのAPI経由で削除
        const handleDeleteImage = async (index) => {
            const newImages = [...images];
            newImages.splice(index, 1);
            setImages(newImages);
            const response = await fetch(`/delete-image/{project_name}/{image_name}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    project_name: 'project_name',
                    image_name: 'image_name'
                })
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error(errorMessage);
            }
        };
    };

    return (
        <div>
            <input type="file" multiple onChange={handleImageChange} />
            <div style={{ display: 'flex' }}>
                {images.map((image, index) => (
                    <div key={index} style={{ marginRight: '10px', position: 'relative' }}>
                        <img 
                            src={image}
                            alt={`uploaded-${index}`}
                            onClick={() => setSelectedImage(image)}
                            style={{ height: '100px', margin: '10px' }}
                        />
                        <button 
                            onClick={() => handleDeleteImage(index)}
                            style={{ position: 'absolute', top: '5px', right: '5px' }}
                        >
                            &#x2716;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageUpload;

