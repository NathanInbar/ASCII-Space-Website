import { readable, writable } from "svelte/store";

export let dark_mode = new writable(false);

export let photos = new writable([
  "crane.JPG",
  "car.JPG",
  "sunflowers.jpeg",
  "boat.jpeg",
]);
