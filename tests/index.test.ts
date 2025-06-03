import { equal } from "assert";
import { RequestBuilder } from "../src";

test("Returns a successful GET reponse on TLS Fingerprinting protected URL", async () => {
    const response = await new RequestBuilder()
        .url("https://shared.animez.my.id")
        .header("x-user-key", "amiami_dev")
        .send();

    expect(response.stderr).toBeUndefined();
    expect(equal(response.details?.http_code, 200));
});

test("Returns a successful POST reponse", async () => {
    const body = {
        title: "foo",
        body: "bar",
        userId: 1,
    };

    const response = await new RequestBuilder()
        .url("https://httpbin.org/post")
        .method("POST")
        .header("user-agent", "node-curl-impersonate Test Suit")
        .body(body)
        .send();

    expect(response.stderr).toBeUndefined();
    expect(equal(response.details?.http_code, 200));
})