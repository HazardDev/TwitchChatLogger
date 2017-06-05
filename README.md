# Twitch Chat Logger

## Each File

* bot.js - Does the logging (must be used with redis)
* default_config.js - An empty configuration for the bot (rename to config.js)
* pretty_dump.json - The entire database dump of RLCS day 3
* sort_data.js - A small file used to sort and print info from the pretty_dump
* sorted.txt - A sorted version of everything above 200 messages sent
