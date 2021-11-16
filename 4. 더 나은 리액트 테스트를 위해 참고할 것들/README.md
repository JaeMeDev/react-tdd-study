## 1. Query 사용 우선 순위

screen.getByTestId()

현재까지는 getByTestId 쿼리를 이용해서 엘레멘트에 접근해서 테스트를 진행했다. 이 방법이 편리하긴 하지만 testing library에서 추천하는 쿼리 사용 우선순위가 있기 때문에 한번 보고가자. → getByTestId는 추천하지 않는다고 써있음.

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText

→ getByTestId는 마지막 우선순위이로 getByRole을 사용하도록 한다.

## 2. userEvent > fireEvent

이전에 테스팅에서 버튼을 클릭했을 때 fireEvent API를 사용하였다. 이때 fireEvent를 사용해서 잘 처리를 해줬지만 userEvent API를 사용하는게 더 좋다.

### userEvent란?

userEvent는 fireEvent를 사용해서 만들어졌다. userEvent의 내부 코드를 보면 fireEvent를 사용하면서 엘리먼트의 타입에 따라 Label을 클릭했을 때 checkbox, radio을 클릭했을 때 그 엘리먼트 타입에 맞는 더욱 적절한 반응을 보여준다.

예를 들어 fireEvent로 버튼을 클릭하면 fireEvent.click(button)버튼이 focus되지 않는다. 하지만 userEvent로 클릭하면 userEvent.click(button)버튼이 focus가 된다. 이렇게 실제 사용하는 유저가 보기에 실제 버튼을 클릭하는 행위가 더 잘 표현되기에 useEvent를 사용하는게 더 추천되는 방법이다.