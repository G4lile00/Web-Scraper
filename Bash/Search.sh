#!/usr/bin/bash
echo "What name wuld you like to search ?"
read varname
echo "------------"
for (( i=0; i<10000; i++ ))
do
  code=$(cat ../Data/data.json | jq '.name['$i'] == "'$varname'"')
  age=$(cat ../Data/data.json | jq '.birth['$i']')
  if ("$code" == "true"); then
  echo "$i:$code"
  echo "$varname birth is:$age"
  echo "------------"; fi; done
