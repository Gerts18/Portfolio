// Take a path and uses it to construct an absolute path for every image 
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};