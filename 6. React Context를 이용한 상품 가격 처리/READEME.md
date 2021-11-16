## 1. 상품 가격을 위한 테스트 케이스 구현

1. 해야 할 일은? → 여행 상품과 옵션의 개수에 따라 가격을 계산해주기
2. 테스트 작성
3. 테스트 실패
4. 성공 코드 작성

## 2. 컴포넌트 간 데이터 전달

컴포넌트 간 공유

1. state, props 사용
2. react context
3. mobx
4. redux
5. 등등

## 3. 4. context를 사용해서 컴포넌트에 데이터 제공하기(1)

Context를 사용해서 할 일

- 어떠한 컴포넌트에서 총 가격으로 Update해주는 것
- 어떠한 컴포넌트에서 총 가격을 보여주는 것

Context를 사용하는 방법

1. Context를 생성 → createContext
2. Context는 Provider안에서 사용가능하기 때문에 Provider를 생성 → <OrderContext.Provider value={???} />
3. 더 복잡한 로직을 구현하기 위해서 Provider를 위한 함수 생성

## 5. context를 사용해서 가격 계산하기

## 6. context wrapper 추가로 에러 제거하기

## 7. 모든 테스트 케이스를 wrapper로 감싸주기

## 8. 옵션 가격을 위한 테스트 구현

옵션 체크박스를 클릭해서 옵션 총 가격을 업데이트 한다.

## 9. 상품 가격, 옵션 가격을 더한 총 가격 구하기