#!/usr/bin/env node
import hello from "../src/cli.js";
export function main() {
  console.log("Welcome to the Brain Games!");
  return hello();
}
