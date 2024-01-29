export const hexToRGBA=(hex, opacity)=> {
    // Remove the '#' character if it's present
    hex = hex.replace("#", "");

    // Parse the hex values for red, green, and blue
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return the color in RGBA format
    return `rgba(${r},${g},${b},${opacity})`;
  }