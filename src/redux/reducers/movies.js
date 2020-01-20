import { RATE } from "../types";

const initialState = [
  {
    image: "antman.jpg",
    name: "Ant Man",
    rate: 0
  },
  {
    image: "avengers.jpg",
    name: "Avengers",
    rate: 0
  },
  {
    image: "captainamerica.jpg",
    name: "Captain America",
    rate: 0
  },
  {
    image: "deadpool.jpg",
    name: "Dead Pool",
    rate: 0
  },
  {
    image: "it.jpg",
    name: "It Capter 2",
    rate: 0
  },
  {
    image: "joker.jpg",
    name: "Joker",
    rate: 0
  },
  {
    image: "terminator.jpg",
    name: "Terminator",
    rate: 0
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case RATE:
      const newState = [...state];
      newState[action.payload.id].rate = action.payload.value;
      return newState;
    default:
      return state;
  }
};
