import React, { useState } from 'react';

function AnnotateImage({ src }) {
    const [annotations, setAnnotations] = useState([]);

    const handleImageClick = (event) => {
        const offset = event.target.getBoundingClientRect();
        const x = event.clientX - offset.left;
        const y = event.clientY - offset.top;
        setAnnotations([...annotations, { x, y }]);
    };

    return (
        <div>
            <img 
                src={src} 
                alt="to-annotate" 
                onClick={handleImageClick}
                style={{ position: 'relative', maxWidth: '500px', display: 'block', margin: '20px auto' }}
            />
            {annotations.map((annotation, index) => (
                <div 
                    key={index}
                    style={{
                        position: 'absolute',
                        top: annotation.y,
                        left: annotation.x,
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        transform: 'translate(-50%, -50%)'
                    }}
                ></div>
            ))}
            <button onClick={() => console.log(annotations)}>Save Annotations</button>
        </div>
    );
}
