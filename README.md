# 5th-JobStudy-CodingTest
5기-취로뽕[코테준비]

## 💬 코테 준비 언어 선택
- **JavaScript**
- **Java**
  
## 🍒 코테 사이트
- https://programmers.co.kr/

## 🔥 문제 선정 및 스터디 진행 방식
* 문제 선정

  * 매 주 총 4개, 사다리타기로 한 멤버를 정해 4문제를 선정하여, 리포지토리에 txt 파일로 업로드
    * 문제 주제는 자유
    * 난이도는 우선 lev 1 2문제, lev 2 2문제 진행
  
* 기한
  * 주말 : 문제제출
  * ~금요일 : 문제 풀이 제출 완료
  * 금요일 : 회의 및 코드 리뷰
  * 기한 초과 제출인 경우
    * 주석에 "#기한 초과 제출" 달기

## 🌱 fork한 리포 최신화하는 방법
#### (1번과 2번은 한 번만 실행, 3번부터는 문제를 풀기 전/후 항상 실행)
1. organization 리포지토리(원본 리포로 지칭)를 fork한다.

2. fork한 개인 리포를 로컬에 clone한다.
   - 예시) ```git clone https://github.com/jung-yeon99/5th-JobStudy-CodingTest```
  
3. 원본 리포를 로컬에 upstream 원격 저장소로 추가한다.
   - ```git remote add upstream https://github.com/techeer-sv/5th-JobStudy-CodingTest```
  
4. 문제를 풀기 전, 원본 리포의 내용을 로컬에 fetch한다.
   - ```git fetch upstream```
 
5. 로컬에 fetch한 내용을 merge한다.
   - ```git merge upstream/main```
   
6. 위에 설명한 디렉토리 구조대로 개인 리포에 소스 코드 파일을 위치시킨 후, commit하고 push한다.

문제 제출 커밋 예시 : lev2_올바른 괄호
문제 해결 커밋 예시 : 풀이자이름_올바른 괄호
