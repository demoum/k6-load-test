import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [{ duration: "10s", target: 10 }],
  thresholds: {
    checks: ["rate > 0.95"],
    http_req_failed: ["rate > 0.01"],
    http_req_duration: ["p(95) < 500"],
  },
};

export default function() {
  const USER = `${Math.random()}@mail.com`;
  const PASS = "user123";
  const BASE_URL = "http://test-api.k6.io";

  console.log( USER + PASS);
  
  const res = http.post(`${BASE_URL}/user/register/`, {
    username: USER,
    first_name: 'crocodilo',
    last_name: 'dino',
    email: USER,
    password: PASS
  });

  check(res, {
    "sucesso ao registrar": (r) => r.status === 201
  });

  sleep(1);
}
