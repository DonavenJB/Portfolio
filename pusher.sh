#!/bin/bash

NUMBER=$(($RANDOM % 23))
  
for ((run=1; run <= NUMBER + 1; run++))
do
  echo `/usr/games/fortune` > ~/Desktop/Portfolio/file.txt
  /usr/bin/git -C ~/Desktop/Portfolio/ add . -A
  /usr/bin/git -C ~/Desktop/Portfolio/ commit -m "Updated some important features finally got some debugging done!"
  /usr/bin/git -C ~/Desktop/Portfolio/ push -u origin main
done
