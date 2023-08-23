import React, { useState } from 'react';

function ProjectCreation() {
    const [projectName, setProjectName] = useState('');

    const handleCreateProject = () => {
        // ここでバックエンドのAPIを呼び出してプロジェクトフォルダを作成
        console.log(`Creating project: ${projectName}`);
    };

    return (
        <div>
            <input value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <button onClick={handleCreateProject}>Create Project</button>
        </div>
    );
}

export default ProjectCreation;
