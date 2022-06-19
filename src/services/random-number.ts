import axios, { AxiosResponse } from "axios";

/**
 * It makes a GET request to the random.org API and returns a random number between 1 and 100
 * @returns A promise
 */
export const getRandomNumber = async (): Promise<AxiosResponse<number>> => {
  return axios.get("https://random.org/integers/", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    params: {
      num: 1,
      min: 1,
      max: 100,
      col: 1,
      base: 10,
      format: "plain",
      rnd: "new",
    },
  });
};
