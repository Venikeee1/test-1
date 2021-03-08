const loadScript = (scriptSrc) => {
    const existingScript = document.querySelector(`[src="${scriptSrc}"]`)
    if(existingScript) return;
    
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptSrc;
        document.body.insertAdjacentElement('beforeend', script);
        script.onload = () => {
            console.log('script loaded');
            resolve();
        }
        script.onerror = (error) => reject(error)
    });
}

export default loadScript;