import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";

export let options = {
  vus: 10,
  duration: "10s",
};

const BASE_URL = "https://ib.develop.pdt.servcore.io";
const myRate = new Rate("Taxa Req 200");

export default function() {
  const response = http.get(`${BASE_URL}/security/auth/v1/interaction`);
  check(response, {
    "status is 200": (r) => r.status === 200,
  });
  myRate.add(response.status === 200);

  sleep(1);
}
