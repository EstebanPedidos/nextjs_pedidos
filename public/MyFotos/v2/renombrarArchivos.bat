@echo off
for %%i in (*.jpg) do (set fname=%%~ni) & call :renameFile
goto :eof
:renameFile
ren "%fname%.jpg" "(v2)%fname:~0,-2%.jpg"
goto :eof