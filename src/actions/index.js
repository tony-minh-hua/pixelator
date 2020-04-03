export const colorPicked = (color) => {
  return {
    type: 'COLOR_PICKED',
    payload: color,
    key: ''
  };
};

export const sizeIncreased = (increment) => {
  return {
    type: 'SIZE_INCREASED',
    payload: increment,
    key: ''
  }
}

export const sizeDecreased = (increment) => {
  return {
    type: 'SIZE_DECREASED',
    payload: increment,
    key: ''
  }
}

export const tileChanged = (cell) => {
  return {
    type: "COLOR_CHANGED",
    payload: cell,
    key: ''
  }
}