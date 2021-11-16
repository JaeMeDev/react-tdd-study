import { render, screen } from "../../../test-utils";
import Type from "../Type";
import userEvent from "@testing-library/user-event";

test("update product's total when products change", async () => {
  render(<Type orderType="products" />);

  // 상품 총 가격 뒤에 어떤 텍스트가 있어도 불러온다.
  const productsTotal = screen.getByText("상품 총 가격", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // 아메리카 여행 상품 한개 올리기 / 서버에서 데이터 가져온 이후는 get이 아닌 find를 사용한다.
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  // input이나 textarea에 텍스트를 선택한 후 제거해준다. 이 부분은 현재 없어도 결과에 영향을 미치지 않는다
  // 하지만 만약 현재 소스 코드 보다 위에서 같은 엘리먼트를 위한 userEvent를 사용했다면 clear 해준 후에 userEvent.type()을 하는 것이 좋다.
  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});

test("update option's total when options change", async () => {
  render(<Type orderType="options" />);

  const optionsTotal = screen.getByText("옵션 총 가격:", { exact: false });
  expect(optionsTotal).toHaveTextContent("0");

  const insuranceCheckBox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
  userEvent.clear(insuranceCheckBox);
  userEvent.click(insuranceCheckBox);

  expect(optionsTotal).toHaveTextContent("500");

  const dinnerCheckBox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });
  userEvent.clear(dinnerCheckBox);
  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent("1000");

  userEvent.clear(dinnerCheckBox);
  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent("500");
});
