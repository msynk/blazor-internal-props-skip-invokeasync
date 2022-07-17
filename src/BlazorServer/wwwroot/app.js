function getBoundingClientRect(element) {
    const bounds = element.getBoundingClientRect();
    return {
        width: bounds.width,
        height: bounds.height
    };
}