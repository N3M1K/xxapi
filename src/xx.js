const xx = {
    fileMappings: {
        modals: './src/modals.js',
        nameA: './src/nameX.js',
        // Další mapování názvů na cesty k souborům
    },
    load: function loadScript(name) {
        const filePath = this.fileMappings[name];
        if (!filePath) {
            throw new Error(`Script '${name}' not found in mappings.`);
        }
        return fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error loading script.');
                }
                return response.text();
            })
            .then(scriptContent => {
                eval(scriptContent);
            })
            .catch(error => {
                console.error('Failed to load script:', error);
            });
    },
    addFile: function addFileMapping(name, filePath) {
        if (this.fileMappings[name]) {
            throw new Error(`Script '${name}' already exists in mappings.`);
        }
        this.fileMappings[name] = filePath;
    }
};
