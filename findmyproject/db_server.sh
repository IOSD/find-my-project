# If you get a `permission denied` error, run `chmod +x db_server.sh` first
# Run `db_server.sh` or `./db_server.sh` in terminal
# Tested - Ok on Linux
# Shell scripts generally don't run easily in Windows so run these commands in cmd manually
[ -d database ] || mkdir "database"
mongod --dbpath "/home/dabasajay/Desktop/find-my-project/findmyproject/database/"