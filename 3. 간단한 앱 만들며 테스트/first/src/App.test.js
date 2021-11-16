import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  // screen object 를 이용해서 원하는 엘레먼트에 접근한다.(접근 ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter 인 엘레먼트 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});
