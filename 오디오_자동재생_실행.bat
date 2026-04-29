@echo off
echo 브라우저의 오디오 자동재생 차단 정책을 우회하여 독립된 창에서 웹페이지를 실행합니다...
start chrome --autoplay-policy=no-user-gesture-required --user-data-dir="%TEMP%\ROC_Auto_Test" "%~dp0index.html"
exit
