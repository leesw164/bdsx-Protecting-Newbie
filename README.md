# bdsx-Protecting-Newbie

플러그인 사용전에 세팅하실게 있습니다.                                                                                 
먼저 뉴비보호사용할 서버에 접속하시고                               
1.마크채팅에 /give @s commandblock 를 치고 엔터해주세요.                                                 
2.마크채팅에 /scoreboard objectives add new dummy 를 치고 엔터해주세요                              
3.마크채팅에 /scoreboard objectives add newm dummy 를 치고 엔터해주세요                                                                                                    
4.커맨드를 설치하고 커맨드안에 명령어자리에 /execute as @a[scores={newm=..뉴비보호시간(분) -1}] run tag @s add new 를 적으시고  
커맨드 세팅을 반복 무조건부 항상사용 해주세요   
5.커맨드를 설치하고 커맨드안에 명령어자리에 /scoreboard players add @a[tag=new] new 1 를 적어주시고 커맨드 세팅을 반복 무조건부 항상사용 해주세요  
6분터끝까지는 커맨드를 각번호마다 설치하고 체인 조건부 항사사용 으로 세팅해주세요 (주의 5번의 커맨드 화살표가 가르키는곳이 똑같아야합니다)  
6.커맨드안에 명령어자리에/execute as @a[scores={new=60}] run scoreboard players add @s newm 1 를 적어주세요  
7.커맨드안에 명령어자리에/execute as @a[scores={new=60}] run scoreboard players set @s new 0 를 적어주세요  
8.커맨드안에 명령어자리에/execute as @a[scores={newm=뉴비보호시간(분)..}] run tag @s remove new 를 적어주세요  
마지막 세팅은 protecting_newbie 폴더안에 protecting_newbie.ts 를 비주얼 스튜디오코드또는 메모장으로 연결하시고 세팅해주시면 됍니다.   
